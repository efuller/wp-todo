/**
 * WP Todo Js.
 * https://github.com/aubreypwd/wp-todo
 *
 * Licensed under the GPLv2+ license.
 */

if ( ! window.hasOwnProperty( 'WPTodo' ) ) {
	/* globals console, jQuery */

	// Main module.
	window.WPTodo = ( function ( $, pub ) {

		/**
		 * The main container.
		 *
		 * @author Aubrey Portwood
		 * @since  1.0.0
		 *
		 * @type {object} jQuery object.
		 */
		var $wpTodo = $( '#wp-todo' );

		/**
		 * Init.
		 *
		 * @author Aubrey Portwood
		 * @since  1.0.0
		 */
		function init () {

			// Just show right away.
			$( '.main-window', $wpTodo ).removeClass( 'hidden' );
		}

		/**
		 * A public function.
		 *
		 * @author Aubrey Portwood
		 * @since  1.0.0
		 */
		pub.publicMethod = function () {
			console.log( 'I\'m public yo!' );
		};

		init(); // Initialize.
		return pub; // Return public things.
	} )( jQuery, {} );
}
