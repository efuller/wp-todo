import test from 'tape';
import API from '../src/api/API';

test( 'The API', ( t ) => {

	API.getLists()
		.then( ( lists ) => {
			const expected = 3;
			const actual = lists.length;
			t.equal( actual, expected, 'API.getLists(): should return 3 lists.' );
		});
	API.getPrimaryList()
		.then( ( list ) => {
			const expected = 1;
			const actual = list.id;
			t.equal( actual, expected, 'API.getPrimaryList(): should return list id 1.' );
		});
	API.getDeletedLists()
		.then( ( lists ) => {
			const expected = 1;
			const actual = lists.length;
			t.equal( actual, expected, 'API.getLists(): should return 1 deleted list.' );
		});
	API.getListById( 2 )
		.then( ( list ) => {
			const expected = 'My Second List';
			const actual = list.name;
			t.equal( actual, expected, 'API.getListByID(2): should return list 2 named My Second List' );
		});
	API.getTodos( 2 )
		.then( ( todos ) => {
			const expected = 3;
			const actual = todos.length;
			t.equal( actual, expected, 'API.getTodos(2): should get todos from list 3. There should be 3 todos.' );
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
			const expected = 'My Second List';
			const actual = list.name;
			t.equal( actual, expected, 'API.deleteList(2): should delete list with name of My Second List' );
		});
	t.end();
});
