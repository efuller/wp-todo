/**
 * Entry point file.
 *
 * From here we will initialize our app.
 */

// User imports
import $ from 'jQuery';
import API from './api/API';
import { appState } from './utilities/State';
import WPTodo from './WPTodo';
import './scss/index.scss';

// Initialize our app when the page is ready.
$( function() {
	// Get the app config and then kick off the app.
	API.getConfig()
		.then( ( config ) => {
			appState.setState( config.data );
			appState.setState({ hideCompleted: true, hideDeleted: true });

			API.getTodos()
				.then( ({ data }) => {
					appState.setState({ todos: data });
					new WPTodo().init();
				});
		});
});
