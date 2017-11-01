import listsTemplate from '../views/listsTemplate.html';
import $ from 'jQuery';

class Lists {
	constructor() {
		this.cache();
		this.render();
		this.bindEvents();
	}

	render() {
		this.listContainer.append( listsTemplate() );
	}

	cache() {
		this.listContainer = $( '#wp-todo-content-container' );
		this.listsLink = $( '#configure-lists' );
	}

	cacheAfterRender() {
		this.toggleCompleted = $( '#hide-completed' );
		this.toggleDeleted = $( '#hide-deleted' );
	}

	bindEvents() {
		const listsPanel = this.listContainer.find( '#lists' );
		this.listsLink.on( 'click', () => {
			listsPanel.toggleClass( 'panel-hidden' );
		});
	}
}

export default Lists;
