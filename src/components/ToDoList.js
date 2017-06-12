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
		$todos.on( 'click', '.wp-todo-complete', this.handleTodoComplete.bind( this ) );
	}

	renderToDoList() {
		API.getPrimaryList()
			.then( ({ data }) => {
				console.log( data );
				events.emit( 'hide-loader' );
				this.$listContainer.html( todoTemplate({ todos: data }) );
				this.bindEvents();
		});
	}

	handleTodoComplete( e ) {
		const $target = $( e.target );
		const $targetContainer = $target.closest( '.wp-todo-list-item' );
		const $id = $targetContainer.data( 'id' );

		API.completeTodo( $id )
			.then( ( todo ) => {
				events.emit( 'complete-todo', todo );
			});
	}

	handleTodoDelete( e ) {
		const $target = $( e.target );
		const $targetContainer = $target.closest( '.wp-todo-list-item' );
		const $id = $targetContainer.data( 'id' );

		API.deleteTodo( $id )
			.then( ( id ) => {
				$targetContainer.remove();
				events.emit( 'delete-todo', id );
			})
			.catch( ( error ) => {
				console.warn( 'ToDoList Error: ', error );
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
