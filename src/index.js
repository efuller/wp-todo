/**
 * Entry point file.
 *
 * From here we will initialize our app.
 */

// User imports
import $ from 'jQuery';
import WPTodo from './WPTodo';
import './scss/index.scss';

// Initialize our app when the page is ready.
$( function() {
	new WPTodo().init();
});
