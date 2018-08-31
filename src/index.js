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
	const config = API.getConfig();
	const lists = API.getLists();
	Promise.all([ config, lists ])
		.then( ( values ) => {
			const { data: configData } = values[0];
			const { data: listsData } = values[1];
			appState.setState({
				config: configData,
				todoLists: listsData
			});

			return API.getTodos( configData.activeList );
		})
		.then( ( result ) => {
			const todos = result.data;
			appState.setState({ todos });

            new WPTodo().init();
		});
});
