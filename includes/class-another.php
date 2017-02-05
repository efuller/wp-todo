<?php
/**
 * WP Todo Another
 *
 * @since 1.0.0
 * @package WP Todo
 */

/**
 * WP Todo Another.
 *
 * @since 1.0.0
 */
class WPT_Another {
	/**
	 * Parent plugin class
	 *
	 * @var   WP_Todo
	 * @since 1.0.0
	 */
	protected $plugin = null;

	/**
	 * Constructor
	 *
	 * @since  1.0.0
	 * @param  WP_Todo $plugin Main plugin object.
	 * @return void
	 */
	public function __construct( $plugin ) {
		$this->plugin = $plugin;
		$this->hooks();
	}

	/**
	 * Initiate our hooks
	 *
	 * @since  1.0.0
	 * @return void
	 */
	public function hooks() {
	}
}
