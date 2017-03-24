import API from '../api/API';
import ToDoListView from './ToDoListView';
import { events } from '../utilities/Events';

class ToDoList {
	constructor() {
		new ToDoListView;
	}

	render() {
		this.renderToDoList();
	}

	renderToDoList() {
		return API.getPrimaryList()
			.then( ( list ) => {
				events.emit( 'hide-loader' );
				events.emit( 'render-todos', list.todos );
			});
	}
}

export default ToDoList;
