import configTemplate from '../views/configTemplate.html';
import API from '../api/API';
import { appState } from '../utilities/State';
import $ from 'jQuery';

class Config {
	constructor() {
		this.cache();
		this.render();
		this.cacheAfterRender();
		this.bindEvents();
	}

	render() {
		const state = appState.getState();
		const config = {
			hideCompleted: state.hideCompleted,
			hideDeleted: state.hideDeleted
		};
		this.listContainer.append( configTemplate({ config: config }) );
	}

	cache() {
		this.listContainer = $( '#wp-todo-content-container' );
		this.configLink = $( '#configure-link' );
	}

	cacheAfterRender() {
		this.toggleCompleted = $( '#hide-completed' );
	}

	bindEvents() {
		const configPanel = this.listContainer.find( '#configure' );
		this.configLink.on( 'click', () => {
			configPanel.toggleClass( 'panel-hidden' );
		});

		this.toggleCompleted.on( 'change', this.handleToggleCompleted.bind( this ) );
	}
	handleToggleCompleted() {

		API.toggleHideCompleted()
			.then( ( result ) => {
				console.log( result );
				this.updateHideCompletedState( result );
				this.render();
			});
	}
}

export default Config;
