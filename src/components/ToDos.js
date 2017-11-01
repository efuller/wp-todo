import API from '../api/API';
import { events } from '../utilities/Events';
import { appState } from '../utilities/State';
import todoTemplate from '../views/todoTemplate.html';
import $ from 'jQuery';

class Todos {
	constructor() {
		this.bindEvents();
		this.$loader = $( '.wp-todo-loader-container' );
		this.$listContainer = $( '#wp-todo-list-container' );
		events.emit( 'show-loader' );
	}

	bindEvents() {
		events.on( 'hide-loader', () => this.hideLoader() );
		events.on( 'show-loader', () => this.showLoader() );
		events.on( 'render-todos', () => this.renderToDoList() );

		const $todos = $( '#wp-todo-list' );
		$todos.on( 'click', '.wp-todo-task-delete', this.handleTodoDelete.bind( this ) );
		$todos.on( 'click', '.wp-todo-complete', this.handleTodoComplete.bind( this ) );
	}

	renderToDoList() {
		const state = appState.getState();
		events.emit( 'hide-loader' );
		let todos = state.todos;

		if ( state.config.hideDeleted ) {
			todos = todos.filter( ( todo ) => {
				return true !== todo.deleted;
			});
		}

		if ( state.config.hideCompleted ) {
			todos = todos.filter( ( todo ) => {
				return true !== todo.completed;
			});
		}

		this.$listContainer.html( todoTemplate({ todos: todos }) );
		this.bindEvents();
	}

	updateCompletedTodoState( completedTodo ) {
		const state = appState.getState();
		const { todos } = state;

		const newTodos = todos.map( todo => {
			if ( todo.id === completedTodo.id ) {
				todo.completed = ! todo.completed;
			}

			return todo;
		});

		appState.setState({todos: newTodos});
	}

	updateDeletedTodoState( deletedTodo ) {
		const state = appState.getState();
		const { todos } = state;

		const newTodos = todos.map( todo => {
			if ( todo.id === deletedTodo.id ) {
				todo.deleted = ! todo.deleted;
			}

			return todo;
		});

		appState.setState({todos: newTodos});
	}

	handleTodoComplete( e ) {
		const $target = $( e.target );
		const $targetContainer = $target.closest( '.wp-todo-list-item' );
		const $id = $targetContainer.data( 'id' );

		API.completeTodo( $id )
			.then( ( todo ) => {
				this.updateCompletedTodoState( todo );
				events.emit( 'complete-todo', todo );
			});
	}

	handleTodoDelete( e ) {
		const $target = $( e.target );
		const $targetContainer = $target.closest( '.wp-todo-list-item' );
		const $id = $targetContainer.data( 'id' );

		API.deleteTodo( $id )
			.then( ( todo ) => {
				this.updateDeletedTodoState( todo );
				events.emit( 'delete-todo', todo );
			});
	}

	hideLoader() {
		this.$loader.hide();
	}

	showLoader() {
		this.$loader.show();
	}
}

export default Todos;
