import configTemplate from '../views/configTemplate.html';
import listSelect from '../views/listSelect.html';
import API from '../api/API';
import { events } from '../utilities/Events';
import { appState } from '../utilities/State';

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
			hideDeleted: state.config.hideDeleted,
		};

		const todoLists = state.todoLists;

		const container = document.createElement( 'div' );
		container.innerHTML = configTemplate.render({ config, todoLists }, { listSelect: listSelect });

		this.listContainer.appendChild( container );
	}

	cache() {
		this.listContainer = document.getElementById( 'wp-todo-content-container' );
		this.configLink = document.getElementById( 'configure-link' );
	}

	cacheAfterRender() {
		this.toggleCompleted = document.getElementById( 'hide-completed' );
		this.toggleDeleted = document.getElementById( 'hide-deleted' );
		this.listSelect = document.getElementById( 'wp-todo-list-select' );
	}

	handleListSelectChange( e ) {
		const currentPrimaryListID = appState.getState().config.primaryList;
		const listID = parseInt( e.target.value.trim() );
		const name = e.target.selectedOptions[0].text.trim();
		const listData = {
			id: listID,
			primaryList: true,
			name
		};

		// Flip the current primary list to not be primary list
		const toggleCurrentPrimaryList = API.togglePrimaryList( currentPrimaryListID );
		const toggleNewPrimaryList = API.togglePrimaryList( listID );
		const updateConfig = API.updateConfig({ primaryList: listID });

		Promise.all([ toggleCurrentPrimaryList, toggleNewPrimaryList, updateConfig ])
			.then( ( results ) => {
				console.log( 'result1:', results );
		});

		// Render todos

	}

	bindEvents() {
		const configPanel = this.listContainer.querySelector( '#configure' );

		this.configLink.addEventListener( 'click', () => {
			configPanel.classList.toggle( 'panel-hidden' );
		});

		this.toggleCompleted.addEventListener( 'change', this.handleHideCompleted.bind( this ) );
		this.toggleDeleted.addEventListener( 'change', this.handleHideDeleted.bind( this ) );
		this.listSelect.addEventListener( 'change', this.handleListSelectChange.bind( this ) );
	}

	updateState( result ) {
		const config = appState.getState().config;
		const newState = Object.assign({}, config, result );

		appState.setState({ config: newState });
	}

	handleHideCompleted() {

		API.toggleHideCompleted()
			.then( ( result ) => {
				this.updateState( result );
				this.render();
				events.emit( 'render-todos' );
			});
	}

	handleHideDeleted() {

		API.toggleHideDeleted()
			.then( ( result ) => {
				this.updateState( result );
				this.render();
				events.emit( 'render-todos' );
			});
	}
}

export default Config;
