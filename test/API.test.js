import test from 'tape';
import API from '../src/api/API';

test( 'The API', ( t ) => {

		API.getLists()
			.then( ( lists ) => {
				const expected = 2;
				const actual = lists.length;
				t.equal( actual, expected, 'API.getLists(): should return 3 lists.' );
			});
		API.getLists( false, true )
			.then( ( lists ) => {
				const expected = 1;
				const actual = lists.length;
				t.equal( actual, expected, 'API.getLists(true): should return 1 deleted list.' );
			});
		API.getListById( 2 )
			.then( ( list ) => {
				const expected = 'My Second List';
				const actual = list[0].name;
				t.equal( actual, expected, 'API.getListByID(): should return list 2 named My Second List' );
			});
		API.getTodos( 2 )
			.then( ( todos ) => {
				const expected = 2;
				const actual = todos.length;
				t.equal( actual, expected, 'API.getTodo(): should get todos from list 5. There should be 5 todos.' );
			});
		API.updateTodo( 3, 12, { title: 'List 3 - Todo 3, Updated' })
			.then( ( todo ) => {
				const expected = 'List 3 - Todo 3, Updated';
				const expectedId = 12;
				const actual = todo.title;
				const actualId = todo.id;
				t.equal( actual, expected, 'API.updateTodo(): should update title to List 3 - Todo 3, Updated' );
				t.equal( actualId, expectedId, 'API.updateTodo(): should update todo with id of 12.' );
			});
		API.deleteTodo( 2, 7 )
			.then( ( todos ) => {
				const expectedNumberOfTodos = 1;
				const actualNumberOfTodos = todos.length;
				t.equal( actualNumberOfTodos, expectedNumberOfTodos, 'API.deleteTodo(): should return 1 todos.' );
			});
		API.deleteTodo( 1, 3 )
			.then( ( todos ) => {
				const expectedNumberOfTodos = 2;
				const actualNumberOfTodos = todos.length;
				t.equal( actualNumberOfTodos, expectedNumberOfTodos, 'API.deleteTodo(): should return 1 todos.' );
			});
		API.completeTodo( 3, 14 )
			.then( ( todo ) => {
				const expectedTodoId = 14;
				const expectedCompleted = true;
				const actualTodosId = todo.id;
				const actualCompleted = todo.completed;
				t.equal( actualTodosId, expectedTodoId, 'API.completeTodo(): should update todo with id 14.' );
				t.equal( actualCompleted, expectedCompleted, 'API.completeTodo(): should be completed' );
			});
		API.deleteList( 2 )
			.then( ( list ) => {
				const expectNumberOfLists = 2;
				const expectDeletedListId = 2;
				const actualDeletedListId = list.id;
				API.getLists( true )
					.then( ( lists ) => {
						const actualNumberOfLists = lists.length;
						t.equal( actualDeletedListId, expectDeletedListId, 'API.deleteList(2): should delete the list with Id 2.' );
						t.equal( actualNumberOfLists, expectNumberOfLists, 'API.deleteList(2): should result with there being two lists.' );
					});
			});
	t.end();
});
