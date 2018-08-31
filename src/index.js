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
	const todos = API.getTodos();
	Promise.all([ config, lists, todos ])
		.then( ( values ) => {
			const { data: configData } = values[0];
			const { data: listsData } = values[1];
			const { data: todos } = values[2];
			appState.setState({
				config: configData,
				todoLists: listsData,
                todos
			});
            new WPTodo().init();
        });
});
