import listSelect from '../views/listSelect.html';
import { events } from '../utilities/Events';
import { appState } from '../utilities/State';
import API from '../api/API';
import uuid from 'uuid/v4';

class Lists {
	constructor() {
		this.state = appState.getState();
		this.cache();
		this.render();
		this.bindEvents();
	}

	render() {
		this.listSelect.innerHTML = listSelect.render({ todoLists: this.state.todoLists });
	}

	cache() {
		this.listSelect = document.getElementById( 'list-select' );
		this.listPanel = document.getElementById( 'new-list' );
		this.addListButton = document.getElementById( 'add-list' );
		this.addListForm = document.getElementById( 'add-list-form' );
	}

	toggleListPanel() {
        this.listPanel.classList.toggle( 'panel-hidden' );
    }

	handleListSelect( e ) {
		const listID = parseInt( e.target.value.trim() );
        const newConfig = Object.assign({}, this.state.config, { activeList: listID });

		appState.setState({ config: newConfig });
	}

	handleAddListFormSubmit( e ) {

			e.preventDefault();
			const list = e.target.list.value.trim();

			const newList = {
				'id': uuid(),
				'name': list,
				'activeList': true
			};

			API.addList( newList )
				.then( ( result ) => {
					const list = result.data;

					const todoLists = appState.getState().todoLists;

					const newTodoLists = [
						...todoLists,
						list
					];

					const activeTodoListSet = newTodoLists.map( item => {
						if ( item.id === list.id ) {
							return item;
						}

						item.activeList = false;
						return item;
					});

					appState.setState({ todoLists: activeTodoListSet, todos: [] });
					e.target.list.value = '';
					this.toggleListPanel();
				});
	}

	bindEvents() {
		this.listSelect.addEventListener( 'change', this.handleListSelect.bind( this ) );

		this.addListButton.addEventListener( 'click', this.toggleListPanel.bind( this ) );

		this.addListForm.addEventListener( 'submit', this.handleAddListFormSubmit.bind( this ) );

        events.on( 'state-change', () => this.render() );
    }

}

export default Lists;
