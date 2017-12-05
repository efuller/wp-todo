const uuid = require( 'uuid/v4' );

module.exports = () => {
	return {
		config: {
			'activeList': 2,
			'hideCompleted': false,
			'hideDeleted': false
		},
		'todoLists': [
			{
				'id': 1,
				'activeList': true,
				'name': 'default list'
			},
			{
				'id': 2,
				'activeList': false,
				'name': 'Another list'
			}
		],
		'todos': [
			{
				'id': uuid(),
				'title': 'Todo Number 1',
				'description': 'Here is the description for number 1',
				'todoListId': 1,
				'completed': false,
				'deleted': false
			},
			{
				'id': uuid(),
				'title': 'Todo Number 6',
				'description': 'Here is the description for number 1',
				'todoListId': 1,
				'completed': true,
				'deleted': false
			},
			{
				'id': uuid(),
				'title': 'Todo Number 2',
				'description': 'Here is the description for number 2',
				'todoListId': 1,
				'completed': false,
				'deleted': true
			}
		]
	};
};
