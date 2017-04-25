//import ToDoList from './components/ToDoList';

import ToDoList from './components/ToDoList';

class WPTodo {
	constructor() {
		this.todoList = new ToDoList();
	}

	init() {
		this.todoList.renderToDoList();
	}

	bindEvents() {

	}
}

export default WPTodo;
