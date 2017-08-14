import { events } from './utilities/Events';
import ToDos from './components/ToDos';
import { appState } from './utilities/State';

class WPTodo {
	constructor() {
		this.todos = new ToDos();
	}

	init() {
		this.todos.renderToDoList();
		this.bindEvents();
	}

	bindEvents() {
		events.on( 'delete-todo', ( id ) => {
			console.log( 'ACTION: todo deleted' + id );
			this.todos.renderToDoList();
		});
		events.on( 'render-todos', ( todos ) => {
			console.log( 'ACTION: rendered todos ' + todos );
		});
		events.on( 'complete-todo', ( completedTodo ) => {
			console.log( 'ACTION: todo completed:', completedTodo );

			this.todos.renderToDoList();
		});
	}
}

export default WPTodo;
