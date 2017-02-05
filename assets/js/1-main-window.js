/**
 * WP Todo Js.
 * https://github.com/aubreypwd/wp-todo
 *
 * Licensed under the GPLv2+ license.
 */

if ( ! window.hasOwnProperty( 'WPTodoMainWindow' ) && window.hasOwnProperty( 'WPTodo' ) ) {
	/* globals jQuery, WPTodo */

	// Main module.
	window.WPTodoMainWindow = ( function ( $, pub ) {

		/**
		 * Init.
		 *
		 * @author Aubrey Portwood
		 * @since  1.0.0
		 */
		function init () {

			// Just show right away.
			$( '.main-window', WPTodo.$wpTodo ).removeClass( 'hidden' );
		}

		init(); // Initialize.

		return pub; // Return public things.
	} )( jQuery, {} );
}
