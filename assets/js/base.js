/**
 * WP Todo Js.
 * https://github.com/aubreypwd/wp-todo
 *
 * Licensed under the GPLv2+ license.
 */

/* globals console, jQuery, WPTodo */
if ( ! window.hasOwnProperty( 'WPTodo' ) ) {

	/*
	 * Main Module.
	 *
	 * This is where shared JS functionality and
	 * properties can be accessed.
	 */
	window.WPTodo = ( function( $, pub ) {

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
	WPTodo.loaded();
}
