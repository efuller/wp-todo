//import ToDoList from './components/ToDoList';
import { events } from './utilities/Events';
import ToDoList from './components/ToDoList';

class WPTodo {
	constructor() {
		this.todoList = new ToDoList();
	}

	init() {
		this.todoList.renderToDoList();
		this.bindEvents();
	}

	bindEvents() {
		events.on( 'delete-todo', ( id ) => {
			console.log( 'ACTION: todo deleted' + id );
			this.todoList.renderToDoList();
		});
		events.on( 'render-todos', ( todos ) => {
			console.log( 'ACTION: rendered todos ' + todos );
		});
		events.on( 'complete-todo', ( todo ) => {
			console.log( 'ACTION: todo completed:', todo );
			this.todoList.renderToDoList();
		});
	}
}

export default WPTodo;
