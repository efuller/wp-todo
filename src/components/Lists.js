import listSelect from '../views/listSelect.html';
import { events } from '../utilities/Events';
import { appState } from '../utilities/State';
import API from '../api/API';
import uuid from "uuid/v4";

class Lists {
	constructor() {
		this.cache();
		this.render();
		this.bindEvents();
	}

	render() {
		const state = appState.getState();
		this.listSelect.innerHTML = listSelect.render({ todoLists: state.todoLists });
	}

	cache() {
		this.listSelect = document.getElementById( 'list-select' );
		this.listPanel = document.getElementById( 'new-list' );
		this.addListButton = document.getElementById( 'add-list' );
		this.addListForm = document.getElementById( 'add-list-form' );
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

	handleAddListFormSubmit( e ) {

			e.preventDefault();
			const list = e.target.list.value.trim();

			const newList = {
				'id': uuid(),
				'name': list,
				'activeList': false
			};

			API.addList( newList )
				.then( ( result ) => {
					const list = result.data;

					const todoLists = appState.getState().todoLists;

					const newTodoLists = [
						...todoLists,
						list
					];

					appState.setState({ todoLists: newTodoLists });
					e.target.list.value = '';
					this.render();
				});
	}

	bindEvents() {
		this.listSelect.addEventListener( 'change', this.handleListSelect.bind( this ) );

		this.addListButton.addEventListener( 'click', () => {
			this.listPanel.classList.toggle( 'panel-hidden' );
		});

		this.addListForm.addEventListener( 'submit', this.handleAddListFormSubmit.bind( this ) );
	}

}

export default Lists;
