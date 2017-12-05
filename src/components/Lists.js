import listsTemplate from '../views/listsTemplate.html';
import listSelect from '../views/listSelect.html';
import { appState } from '../utilities/State';

class Lists {
	constructor() {
		this.cache();
		this.render();
		this.bindEvents();
	}

	render() {
		const listContainer = document.createElement( 'div' );
		listContainer.innerHTML = listsTemplate.render();
		this.listContainer.appendChild( listContainer );

		const state = appState.getState();

		this.listSelect.innerHTML = listSelect.render({ todoLists: state.todoLists });
	}

	cache() {
		this.listContainer = document.getElementById( 'wp-todo-content-container' );
		this.listSelect = document.getElementById( 'list-select' );
	}

	cacheAfterRender() {
		this.toggleCompleted = document.getElementById( 'hide-completed' );
		this.toggleDeleted = document.getElementById( 'hide-deleted' );
	}

	bindEvents() {

	}
}

export default Lists;
