/**
 * WP Todo Js.
 * https://github.com/aubreypwd/wp-todo
 *
 * Licensed under the GPLv2+ license.
 */

/* globals console, jQuery, WPTodo */
if ( ! window.hasOwnProperty( 'WPTodo' ) ) {

	// Main module.
	window.WPTodo = ( function( $, pub ) {

		pub.$wpTodo = $( '#wp-todo' );

		/**
		 * A public function.
		 *
		 * @author Aubrey Portwood
		 * @since  1.0.0
		 */
		pub.publicMethod = function () {
			console.log( 'I\'m public yo!' );
		};

		return pub; // Return public things.
	} )( jQuery, {} );

	// Load the public method.
	WPTodo.publicMethod();
}
