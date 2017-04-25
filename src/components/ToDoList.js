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
		events.on( 'render-todos', ( todos ) => this.render( todos ) );
	}

	renderToDoList() {
		return API.getPrimaryList()
			.then( ( list ) => {
				events.emit( 'hide-loader' );
				events.emit( 'render-todos', list.todos );
				this.bindEvents();
			});
	}

	render( todos ) {
		this.$listContainer.html( todoTemplate({ todos: todos }) );
	}

	hideLoader() {
		this.$loader.hide();
	}

	showLoader() {
		this.$loader.show();
	}
}

export default ToDoListView;
