import listsTemplate from '../views/listsTemplate.html';
import listSelect from '../views/listSelect.html';
import { events } from '../utilities/Events';
import { appState } from '../utilities/State';
import API from '../api/API';

class Lists {
	constructor() {
		this.cache();
		this.render();
		this.bindEvents();
	}

	render() {
		const listContainer = document.createElement( 'div' );
		listContainer.innerHTML = listsTemplate.render();
		this.listContainer.appendChild( listContainer );

		const state = appState.getState();

		this.listSelect.innerHTML = listSelect.render({ todoLists: state.todoLists });
	}

	cache() {
		this.listContainer = document.getElementById( 'wp-todo-content-container' );
		this.listSelect = document.getElementById( 'list-select' );
	}

	cacheAfterRender() {
		this.toggleCompleted = document.getElementById( 'hide-completed' );
		this.toggleDeleted = document.getElementById( 'hide-deleted' );
	}

	handleListSelect( e ) {
		const currentActiveListID = appState.getState().config.activeList;
		const listID = parseInt( e.target.value.trim() );

		// Flip the current primary list to not be primary list
		const toggleCurrentActiveList = API.toggleActiveList( currentActiveListID );
		const toggleNewActiveList = API.toggleActiveList( listID );
		const updateConfig = API.updateConfig({ activeList: listID });
		const getTodos = API.getTodos( listID );

		Promise.all([ toggleCurrentActiveList, toggleNewActiveList, updateConfig, getTodos ])
			.then( ( results ) => {
				events.emit( 'show-loader' );

				const state = appState.getState();
				const { config, todoLists } = state;
				const activeListID = results[1].data.id;

				const newConfig = Object.assign({}, config, { activeList: activeListID });

				const newTodoLists = todoLists.map( list => {
					if ( list.id === listID ) {
						list.activeList = true;
						return list;
					} else {
						list.activeList = false;
						return list;
					}
				});

				appState.setState({
					config: newConfig,
					todoLists: newTodoLists
				});

				return API.getTodos( activeListID );
			})
			.then( results => {
				const todos = results.data;

				appState.setState({ todos });

				events.emit( 'render-todos' );
			});
	}

	bindEvents() {
		this.listSelect.addEventListener( 'change', this.handleListSelect.bind( this ) );
	}
}

export default Lists;
