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
	}
}

export default WPTodo;
