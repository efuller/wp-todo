<?php
/**
 * WP Todo Interface
 *
 * @since 1.0.0
 * @package WP Todo
 */

/**
 * WP Todo Interface.
 *
 * @since 1.0.0
 */
class WPT_Interface {

	/**
	 * Parent plugin class
	 *
	 * @var   WP_Todo
	 * @since 1.0.0
	 */
	protected $plugin = null;

	/**
	 * Whether or not to load the main window in the wp footer.
	 *
	 * @author Aubrey Portwood
	 * @since 1.0.0
	 *
	 * @var boolean
	 */
	private $wp_footer = true;

	/**
	 * Whether or not to load the main window in the admin footer.
	 * @author Aubrey Portwood
	 * @since 1.0.0
	 *
	 * @var boolean
	 */
	private $admin_footer = true;

	/**
	 * Constructor
	 *
	 * @since  1.0.0
	 * @param  WP_Todo $plugin Main plugin object.
	 * @return void
	 */
	public function __construct( $plugin ) {
		$this->plugin = $plugin;
		$this->template_tags();
		$this->hooks();
	}

	/**
	 * Load the template tags file.
	 *
	 * @author Aubrey Portwood
	 * @since 1.0.0
	 */
	private function template_tags() {
		include dirname( __FILE__ ) . '/../interface/template-tags.php';
	}

	/**
	 * Initiate our hooks.
	 *
	 * @since  1.0.0
	 * @return void
	 */
	public function hooks() {
		$this->set_enabled_areas();
		$this->styles();
		$this->main_window();
	}

	/**
	 * Enable or display areas the main window shows in.
	 *
	 * You can filter whether the main window shows in the
	 * admin and frontend to change these.
	 *
	 * @author Aubrey Portwood
	 * @since 1.0.0
	 */
	private function set_enabled_areas() {

		/**
		 * Filter whether or not to show the main window in the admin_footer.
		 *
		 * @author Aubrey Portwood
		 * @since 1.0.0
		 *
		 * @var boolean
		 */
		$this->admin_footer = apply_filters( 'wp_todo_admin_footer', '__return_true' );

		/**
		 * Filter whether or not to show the main window in the wp_footer.
		 *
		 * @author Aubrey Portwood
		 * @since 1.0.0
		 *
		 * @var boolean
		 */
		$this->wp_footer = apply_filters( 'wp_todo_wp_footer', '__return_true' );
	}

	/**
	 * Load the styles.
	 *
	 * @author Aubrey Portwood
	 * @since 1.0.0
	 */
	private function styles() {
		if ( $this->admin_footer ) {

			// Enqueue on the backend when enabled.
			add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts_and_styles' ) );
		}

		if ( $this->wp_footer ) {

			// Enqueue on the frontend when it's enabled.
			add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts_and_styles' ) );
		}
	}

	/**
	 * Enqueue scripts and styles.
	 *
	 * @author Aubrey Portwood
	 * @since  1.0.0
	 */
	public function enqueue_scripts_and_styles() {

		// wp-todo is concat down.
		wp_enqueue_style( 'wp-todo', plugins_url( '../assets/css/wp-todo.css', __FILE__ ), array(), '1.0.0' );

		// Load .js or .min.js?
		$ext = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? 'js' : 'min.js';

		// Enqueue scripts.
		wp_enqueue_script( 'wp-todo-main-window', plugins_url( "../assets/js/bundle.{$ext}", __FILE__ ), array( 'jquery' ), wp_todo()->get_plugin_info( 'Version' ), true );
	}

	/**
	 * Main window hooks.
	 *
	 * @author Aubrey Portwood
	 * @since 1.0.0
	 */
	private function main_window() {

		if ( $this->admin_footer ) {
			add_action( 'admin_footer', array( $this, '_interface' ) );
		}

		if ( $this->wp_footer ) {
			add_action( 'wp_footer', array( $this, '_interface' ) );
		}
	}

	/**
	 * Call the main interface into the admin and frontend.
	 *
	 * @author Aubrey Portwood
	 * @since  1.0.0
	 *
	 * @return void Early exit on doing ajax or doing autosave.
	 */
	public function _interface() {

		if ( wp_doing_ajax() ) {

			// If doing an ajax call, don't add interface to backend/frontend.
			return;
		}

		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {

			// If doing an autosave, don't add interface to backend/frontend.
			return;
		}

		// Run our interface function on the frontend and backend.
		wpt_container();
	}
}
