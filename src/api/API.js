import axios from 'axios';
import { appState } from '../utilities/State';
import { API_URL } from '../utilities/helpers';

// Get the app state.
const state = appState.getState();

/**
 * Fake API Class
 */
class API {

	static getConfig() {
		return axios.get( `${API_URL}/config` );
	}

	static getTodos() {
		if ( appState.getState().config.activeList ) {
			return axios.get( `${API_URL}/todoLists/${state.config.activeList}/todos` );
		}

		return axios.get( `${API_URL}/todoLists/${state.config.primaryList}/todos` );
	}

	static addTodo( list, todo ) {
		if ( appState.getState().activeList ) {
			return axios.post( `${API_URL}/todoLists/${state.config.activeList}/todos`, todo );
		}

		return axios.post( `${API_URL}/todoLists/${state.config.primaryList}/todos`, todo );
	}

	/**
	 * Mark a todo as deleted or perform a hard delete.
	 *
	 * @param   {Number}  todoId     The id of the todo to delete.
	 * @param   {Boolean} hardDelete If true, the todo will be permanently deleted.
	 * @returns {Promise} todos      The todos.
	 */
	static deleteTodo( todoId, hardDelete = false ) {

		if ( hardDelete ) {
			return axios.delete( `${API_URL}/todos/${todoId}` )
				.then( () => {
					return todoId;
				})
				.catch( error => error );
		}

		return API.getTodo( todoId )
			.then( ( todo ) => {
				const newTodo = todo.data;
				newTodo.deleted = true;

				return axios.put( `${API_URL}/todos/${todoId}`, newTodo )
					.then( ( result ) => {
						return result.data;
					})
					.catch( error => error );
			});
	}

	/**
	 * Complete a todo.
	 *
	 * @param   {Number}  todoId The id of the todo.
	 * @returns {Promise} todos  The list of todos.
	 */
	static completeTodo( todoId ) {

		return API.getTodo( todoId )
			.then( ( todo ) => {
				const newTodo = todo.data;
				newTodo.completed = ! newTodo.completed;

				return axios.put( `${API_URL}/todos/${todoId}`, newTodo )
					.then( ( result ) => {
						return result.data;
					})
					.catch( error => error );
			});
	}

	/**
	 * Get a single todo.
	 *
	 * @param {Number} id      The ID of the todo to get.
	 * @returns {AxiosPromise} The promise of the todo retrieved.
	 */
	static getTodo( id ) {
		return axios.get( `${API_URL}/todos/${id}` );
	}
}

export default API;
