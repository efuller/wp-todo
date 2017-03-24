import ToDoList from './components/ToDoList';

class WPTodo {
	constructor() {
		this.todoList = new ToDoList();
	}

	init() {
		this.todoList.render();
	}
}

export default WPTodo;
