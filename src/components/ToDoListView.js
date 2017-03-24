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

	render( todos ) {
		this.$listContainer.html( this.renderTemplate( todos ) );
	}

	renderTemplate( todos ) {
		return todoTemplate({todos: todos});
	}

	hideLoader() {
		this.$loader.hide();
	}

	showLoader() {
		this.$loader.show();
	}
}

export default ToDoListView;