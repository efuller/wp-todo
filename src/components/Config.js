import configTemplate from '../views/configTemplate.html';
import API from '../api/API';
import { events } from '../utilities/Events';
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
			hideCompleted: state.config.hideCompleted,
			hideDeleted: state.config.hideDeleted
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

	updateHideCompletedState( result ) {
		const config = appState.getState().config;
		const newState = Object.assign({}, config, result );

		appState.setState({ config: newState });
	}

	handleToggleCompleted() {

		API.toggleHideCompleted()
			.then( ( result ) => {
				console.log( result );
				this.updateHideCompletedState( result );
				this.render();
				events.emit( 'render-todos' );
			});
	}
}

export default Config;
