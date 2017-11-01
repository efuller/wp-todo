import { events } from './utilities/Events';
import ToDos from './components/ToDos';
import AddTodo from './components/AddTodo';
import Config from './components/Config';
import Lists from './components/Lists';

class WPTodo {
	constructor() {
		this.todos = new ToDos();
		this.addToDo = new AddTodo();
		this.config = new Config();
		this.lists = new Lists();
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
		events.on( 'add-todo', ( todo ) => {
			console.log( 'ACTION: todo added:', todo );

			this.todos.renderToDoList();
		});
		events.on( 'complete-todo', ( completedTodo ) => {
			console.log( 'ACTION: todo completed:', completedTodo );

			this.todos.renderToDoList();
		});
	}
}

export default WPTodo;
