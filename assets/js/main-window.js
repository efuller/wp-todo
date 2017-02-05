/**
 * WP Todo Js for Main Window.
 * https://github.com/aubreypwd/wp-todo
 *
 * Licensed under the GPLv2+ license.
 */

if ( ! window.hasOwnProperty( 'WPTodoBaseMainWindow' ) && window.hasOwnProperty( 'WPTodoBase' ) ) {
	/* globals jQuery, WPTodoBase */

	// Main window module.
	window.WPTodoBaseMainWindow = ( function ( $, pub ) {

		/**
		 * Init.
		 *
		 * @author Aubrey Portwood
		 * @since  1.0.0
		 */
		function init () {

			// Just show right away.
			$( '.main-window', WPTodoBase.$wpTodo ).removeClass( 'hidden' );
		}

		init(); // Initialize.

		return pub; // Return public things.
	} )( jQuery, {} );
}
