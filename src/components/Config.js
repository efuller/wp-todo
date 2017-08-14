import configTemplate from '../views/configTemplate.html';
import $ from 'jQuery';

class Config {
	constructor() {
		this.cache();
		this.render();
		this.bindEvents();
	}

	render() {
		this.listContainer.append( configTemplate() );
	}

	cache() {
		this.listContainer = $( '#wp-todo-content-container' );
		this.configLink = $( '#configure-link' );
	}

	bindEvents() {
		const configPanel = this.listContainer.find( '#configure' );
		this.configLink.on( 'click', () => {
			configPanel.toggleClass( 'panel-hidden' );
		});
	}
}

export default Config;
