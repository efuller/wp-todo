import API from '../api/API';
import { events } from '../utilities/Events';
import { appState } from '../utilities/State';
import uuid from 'uuid/v4';
import addToDoTemplate from '../views/addToDo.html';

import $ from 'jQuery';

class AddTodo {
	constructor() {
		this.cache();
		this.render();
		this.bindEvents();
	}

	render() {
		this.$footer.html( addToDoTemplate() );
	}

	cache() {
		this.$footer = $( '#wp-todo-footer' );
	}

	updateAddTodoState( todo ) {
		const state = appState.getState();
		const { todos } = state;

		const newTodos = [
			...todos,
			todo
		];

		appState.setState({todos: newTodos});
	}

	bindEvents() {
		const $form = $( '#add-todo-form' );
		$form.submit( ( e ) => {
			e.preventDefault();
			const $input = $form.find( '#add-todo' );
			const todo = $input.val().trim();
			const state = appState.getState();
			const list = state.activeList || state.primaryList;

			const newTodo = {
				'id': uuid(),
				'title': todo,
				'description': '',
				'todoListId': list,
				'completed': false,
				'deleted': false
			};

			API.addTodo( list, newTodo )
				.then( ( response ) => {
					this.updateAddTodoState( response.data );
					events.emit( 'add-todo', todo );
					$input.val( '' );
				});
		});
	}
}

export default AddTodo;
