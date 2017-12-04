/**
 * Entry point file.
 *
 * From here we will initialize our app.
 */

// User imports
import API from './api/API';
import { appState } from './utilities/State';
import WPTodo from './WPTodo';
import './scss/index.scss';

document.addEventListener( 'DOMContentLoaded', () => {
	// Get the app config and then kick off the app.
	API.getConfig()
		.then( ( config ) => {
			appState.setState({ config: config.data });

			API.getLists()
				.then( ({ data }) => {
					appState.setState({ todoLists: data });
				});

			API.getTodos()
				.then( ({ data }) => {
					appState.setState({ todos: data });
					new WPTodo().init();
				});
		});
});
