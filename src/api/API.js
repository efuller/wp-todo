import delay from './delay';
import axios from 'axios';
import { API_URL } from '../utilities/helpers';

const data = {
	primaryList: 1,
	activeList: 1,
	lists: [
		{
			id: 1,
			name: 'My First List',
			active: true,
			deleted: false,
			showCompleted: false,
			showDeleted: false,
			todos: [
				{
					id: 1,
					title: 'Here is todo number 1',
					description: 'Here is the description for number 1',
					deleted: false,
					completed: true
				},
				{
					id: 2,
					title: 'Here is todo number 2',
					description: 'Here is the description for number 1',
					deleted: false,
					completed: false
				},
				{
					id: 3,
					title: 'Here is todo number 3',
					description: 'Here is the description for number 1',
					deleted: false,
					completed: true
				}
			]
		},
		{
			id: 2,
			name: 'My Second List',
			primary: false,
			active: false,
			deleted: true,
			showCompleted: false,
			showDeleted: false,
			todos: [
				{
					id: 5,
					title: 'List 2 - Todo 1',
					description: 'Here is the description for number 1',
					deleted: false,
					completed: false
				},
				{
					id: 6,
					title: 'List 2 - Todo 2',
					description: 'Here is the description for number 1',
					deleted: true,
					completed: true
				},
				{
					id: 7,
					title: 'List 2 - Todo 3',
					description: 'Here is the description for number 1',
					deleted: false,
					completed: true
				}
			]
		},
		{
			id: 3,
			name: 'My Third List',
			primary: false,
			active: false,
			deleted: false,
			showCompleted: false,
			showDeleted: false,
			todos: [
				{
					id: 10,
					title: 'List 3 - Todo 1',
					description: 'Here is the description for number 1',
					deleted: false,
					completed: false
				},
				{
					id: 11,
					title: 'List 3 - Todo 2',
					description: 'Here is the description for number 1',
					deleted: true,
					completed: true
				},
				{
					id: 12,
					title: 'List 3 - Todo 3',
					description: 'Here is the description for number 1',
					deleted: false,
					completed: true
				},
				{
					id: 13,
					title: 'List 3 - Todo 4',
					description: 'Here is the description for number 1',
					deleted: true,
					completed: true
				},
				{
					id: 14,
					title: 'List 3 - Todo 5',
					description: 'Here is the description for number 1',
					deleted: false,
					completed: false
				}
			]
		}
	]
};

/**
 * Fake API Class
 */
class API {

	static getConfig() {
		return axios.get( `${API_URL}/config` );
	}

	static getPrimaryList() {
		return API.getConfig()
			.then( ( result ) => {
				return axios.get( `${API_URL}/todoLists/${result.data.primary}/todos` );
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

	/**
	 * Get the current active list.
	 * @returns {Promise}
	 */
	static getActiveList() {
		return new Promise( ( resolve ) => {
			setTimeout( () => {
				resolve( data.activeList );
			}, delay );
		});
	}

	/**
	 * Get lists.
	 * By default, get all lists.
	 * @returns {Promise} lists   The list items.
	 */
	static getLists() {
		return new Promise( ( resolve ) => {
			setTimeout( () => {
				resolve( data.lists );
			}, delay );
		});
	}

	/**
	 * Get lists marked as deleted.
	 * @returns {Promise} Lists marked as deleted.
	 */
	static getDeletedLists() {
		return new Promise( ( resolve ) => {
			API.getLists()
				.then( ( lists ) => {
					const deleted = lists.filter( ( list ) => true === list.deleted );
					resolve( deleted );
				});
		});
	}

	/**
	 * Gets a list by it's id property.
	 * @param   {Number}  listId The id of the list you want to retrieve.
	 * @returns {Promise} list   The list with matching id.
	 */
	static getListById( listId ) {
		return new Promise( ( resolve ) => {
			setTimeout( () => {
				const list = data.lists.filter( ( list ) => list.id === listId );
				resolve( list[0]);
			}, delay );
		});
	}

	/**
	 * Delete a list.
	 * @param   {Number}  listId the id of the list.
	 * @returns {Promise} The deleted list.
	 */
	static deleteList( listId ) {
		return new Promise( ( resolve ) => {
			setTimeout( () => {
				API.getListById( listId )
					.then( ( list ) => {
						const listIndex = data.lists.findIndex( list => {
							return list.id === listId;
						});
						data.lists.splice( listIndex, 1 );
						resolve( list );
					});
			}, delay );
		});
	}

	/**
	 * Get todos from a list. By default, get todos not marked as deleted.
	 * @param   {Number}  listId  The id of the list to retrieve todos from.
	 * @returns {Promise} todos   The set of matching todos.
	 */
	static getTodos( listId ) {
		return new Promise( ( resolve ) => {
			setTimeout( () => {
				API.getListById( listId )
					.then( ( list ) => {
							const todos = list.todos;
							resolve( todos );
						});
					});
			}, delay );
	}

	/**
	 * Update a todo.
	 * @param   {Number}  listId The id of the list.
	 * @param   {Number}  todoId The id of the todo to update.
	 * @param   {Object}  data   The data you want to update in the todo.
	 * @returns {Promise} todo   The updated todo.
	 */
	static updateTodo( listId, todoId, data ) {
		return new Promise( ( resolve ) => {
			setTimeout( () => {
				API.getTodos( listId )
					.then( ( todos ) => { // @todo This is not immutable.
						debugger;
						const todoIndex = todos.findIndex( todo => {
							return todo.id === todoId;
						});
						Object.assign( todos[todoIndex], data );
						resolve( todos[todoIndex]);
					})
					.catch( err => err );
			}, delay );
		});
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
}

export default API;
