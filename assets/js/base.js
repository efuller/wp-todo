/**
 * WP Todo Js.
 * https://github.com/aubreypwd/wp-todo
 *
 * Licensed under the GPLv2+ license.
 */

/* globals console, jQuery, WPTodoBase */
if ( ! window.hasOwnProperty( 'WPTodoBase' ) ) {

	/*
	 * Main Module.
	 *
	 * This is where shared JS functionality and
	 * properties can be accessed.
	 */
	window.WPTodoBase = ( function( $, pub ) {

		pub.$wpTodo = $( '#wp-todo' );

		/**
		 * A public function.
		 *
		 * @author Aubrey Portwood
		 * @since  1.0.0
		 */
		pub.loaded = function () {
			console.log( 'wp-todo Js loaded.' );
		};

		return pub; // Return public things.
	} )( jQuery, {} );

	// Load the public method.
	WPTodoBase.loaded();
}
