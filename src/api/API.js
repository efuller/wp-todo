import delay from './delay';
import uuid from 'uuid';

const data = [
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
				completed: true
			},
			{
				id: 3,
				title: 'Here is todo number 2',
				description: 'Here is the description for number 1',
				deleted: false,
				completed: true
			}
		]
	},
	{
		id: 2,
		name: 'My Second List',
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
];

/**
 * Fake API Class
 */
class API {
	/**
	 * Get lists.
	 * By default, get all lists not marked as deleted.
	 * @param   {Boolean} all     If true, return all lists.
	 * @param   {Boolean} deleted If true, get lists marked as deleted.
	 * @returns {Promise} lists   The list items.
	 */
	static getLists( all = false, deleted = false ) {
		return new Promise( ( resolve ) => {
			setTimeout( () => {
				if ( all ) {
					resolve( data );
				}
				const lists = data.filter( ( list ) => deleted === list.deleted );
				resolve( lists );
			}, delay );
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
				const list = data.filter( ( list ) => list.id === listId );
				resolve( list );
			}, delay );
		});
	}

	/**
	 * Delete a list.
	 * @param   {Boolean} listId the id of the list.
	 * @returns {Promise} The deleted list.
	 */
	static deleteList( listId ) {
		return new Promise( ( resolve ) => {
			setTimeout( () => {
				API.getListById( listId )
					.then( ( list ) => {
						const listIndex = data.findIndex( list => {
							return list.id === listId;
						});
						data.splice( listIndex, 1 );
						resolve( list[0]);
					});
			}, delay );
		});
	}

	/**
	 * Get todos from a list. By default, get todos not marked as deleted.
	 * @param   {Number}  listId  The id of the list to retrieve todos from.
	 * @param   {Boolean} deleted If true, this will return todos marked as deleted.
	 * @returns {Promise} todos   The set of matching todos.
	 */
	static getTodos( listId, deleted = false ) {
		return new Promise( ( resolve ) => {
			setTimeout( () => {
				API.getListById( listId )
					.then( ( list ) => {
							const todos = list[0].todos;
							resolve( todos.filter( todos => deleted === todos.deleted ) );
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
	 * @param   {Number}  listId     The id of the list.
	 * @param   {Number}  todoId     The id of the todo to delete.
	 * @param   {Boolean} hardDelete If true, the todo will be permanently deleted.
	 * @returns {Promise} todos      The todos.
	 */
	static deleteTodo( listId, todoId, hardDelete = false ) {
		return new Promise( ( resolve ) => {
			API.getTodos( listId )
				.then( ( todos ) => {
					const todoIndex = todos.findIndex( todo => {
						return todo.id === todoId;
					});
					if ( true === hardDelete ) {
						todos.splice( todoIndex, 1 );
						resolve( todos );
					}
					todos[todoIndex].deleted = true;
					resolve( todos.filter( todo => false === todo.deleted ) );
				})
				.catch( err => err );
		});
	}

	/**
	 * Complete a todo.
	 * @param   {Number}  listId The id of the list.
	 * @param   {Number}  todoId The id of the todo.
	 * @returns {Promise} todos  The list of todos.
	 */
	static completeTodo( listId, todoId ) {
		return new Promise( ( resolve ) => {
			API.getTodos( listId, todoId )
				.then( ( todos ) => {
					const todoIndex = todos.findIndex( todo => {
						return todo.id === todoId;
					});
					todos[todoIndex].completed = ! todos[todoIndex].completed;
					resolve( todos[todoIndex]);
				})
				.catch( err => err );
		});
	}
}

export default API;
