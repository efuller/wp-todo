import API from '../api/API';
import { events } from '../utilities/Events';
import { appState } from '../utilities/State';
import uuid from 'uuid/v4';
import addToDoTemplate from '../views/addToDo.html';

class AddTodo {
	constructor() {
		this.cache();
		this.render();
		this.bindEvents();
	}

	render() {
		this.footer.innerHTML = addToDoTemplate.render();
	}

	cache() {
		this.footer = document.getElementById( 'wp-todo-footer' );
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
		const form = document.getElementById( 'add-todo-form' );
		form.addEventListener( 'submit', ( e ) => {
			e.preventDefault();
			const input = form.querySelector( '#add-todo' );
			const todo = input.value.trim();
			const state = appState.getState();
			const list = state.activeList;

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
					input.value = '';
				});
		});
	}
}

export default AddTodo;
