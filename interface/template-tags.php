<?php
/**
 * Template Tags.
 *
 * @since 1.0.0
 * @package WP Todo
 */

/**
 * Load the main window.
 *
 * Called in admin_footer and wp_footer.
 *
 * Wraps all wp-todo elements in a .wp-todo wrapper.
 *
 * @author Aubrey Portwood
 * @since  1.0.0
 */
function wpt_container() {
	?>
	<div id="wp-todo">
		<?php include 'templates/main-window.php'; ?>
	</div>
	<?php
}
