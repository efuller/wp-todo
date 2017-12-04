import listsTemplate from '../views/listsTemplate.html';

class Lists {
	constructor() {
		this.cache();
		this.render();
		this.bindEvents();
	}

	render() {
		const listContainer = document.createElement( 'div' );
		listContainer.innerHTML = listsTemplate();
		this.listContainer.appendChild( listContainer );
	}

	cache() {
		// this.listContainer = $( '#wp-todo-content-container' );
		this.listContainer = document.getElementById( 'wp-todo-content-container' );
		// this.listsLink = $( '#configure-lists' );
		this.listsLink = document.getElementById( 'configure-lists' );
	}

	cacheAfterRender() {
		this.toggleCompleted = document.getElementById( 'hide-completed' );
		this.toggleDeleted = document.getElementById( 'hide-deleted' );
	}

	bindEvents() {
		const listsPanel = this.listContainer.querySelector( '#lists' );
		this.listsLink.addEventListener( 'click', () => {
			listsPanel.toggleClass( 'panel-hidden' );
		});
	}
}

export default Lists;
