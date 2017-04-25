import API from '../api/API';
import { events } from '../utilities/Events';
import todoTemplate from '../views/todoTemplate.html';
import $ from 'jQuery';

class ToDoListView {
	constructor() {
		this.bindEvents();
		this.$loader = $( '.wp-todo-loader-container' );
		this.$listContainer = $( '#wp-todo-list-container' );
		events.emit( 'show-loader' );
	}

	bindEvents() {
		events.on( 'hide-loader', () => this.hideLoader() );
		events.on( 'show-loader', () => this.showLoader() );

		const $todos = $( '#wp-todo-list' );
		$todos.on( 'click', '.wp-todo-task-delete', this.handleTodoDelete.bind( this ) );
	}

	renderToDoList() {
		return API.getPrimaryList()
			.then( ( list ) => {
				events.emit( 'hide-loader' );
				this.$listContainer.html( todoTemplate({ todos: list.todos }) );
				this.bindEvents();
			});
	}

	handleTodoDelete( e ) {
		const $target = $( e.target );
		const $targetContainer = $target.closest( '.wp-todo-list-item' );
		const id = $targetContainer.data( 'id' );
		API.getActiveList()
			.then( ( list ) => {
				API.deleteTodo( list, id ).then( () => {
					// $targetContainer.remove();
					events.emit( 'delete-todo', id );
				}).catch( ( err ) => {
					console.warn( err );
				});
			});
	}

	hideLoader() {
		this.$loader.hide();
	}

	showLoader() {
		this.$loader.show();
	}
}

export default ToDoListView;
