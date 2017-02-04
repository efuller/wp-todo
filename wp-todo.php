<?php
/*
 * Plugin Name: WP Todo
 * Plugin URI:  https://github.com/aubreypwd/wp-todo
 * Description: A todo for your WordPress powered site.
 * Version:     NEXT
 * Author:      Aubrey Portwood and Eric Fuller
 * Author URI:  https://github.com/aubreypwd
 * Donate link: https://github.com/aubreypwd/wp-todo
 * License:     GPLv2
 * Text Domain: wp-todo
 * Domain Path: /languages
 *
 * @link https://github.com/aubreypwd/wp-todo
 *
 * @package WP Todo
 * @version NEXT
 */

/**
 * Copyright (c) 2017 Aubrey Portwood and Eric Fuller (email : aubreypwd@gmail.com)
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License, version 2 or, at
 * your discretion, any later version, as published by the Free
 * Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 */

/**
 * Autoloads files with classes when needed.
 *
 * @since  NEXT
 * @author Aubrey Portwood
 *
 * @param  string $class_name Name of the class being requested.
 *
 * @return void
 */
function wp_todo_autoload_classes( $class_name ) {
	if ( 0 !== strpos( $class_name, 'WPT_' ) ) {
		return;
	}

	$filename = strtolower( str_replace(
		'_', '-',
		substr( $class_name, strlen( 'WPT_' ) )
	) );

	WP_Todo::include_file( 'includes/class-' . $filename );
}
spl_autoload_register( 'wp_todo_autoload_classes' );

/**
 * Main initiation class.
 *
 * @since  NEXT
 * @author Aubrey Portwood
 */
final class WP_Todo {

	/**
	 * Detailed activation error messages.
	 *
	 * @var array
	 *
	 * @since  NEXT
	 * @author Aubrey Portwood
	 */
	protected $activation_errors = array();

	/**
	 * Singleton instance of plugin.
	 *
	 * @var WP_Todo
	 *
	 * @since  NEXT
	 * @author Aubrey Portwood
	 */
	protected static $single_instance = null;

	/**
	 * Creates or returns an instance of this class.
	 *
	 * @since  NEXT
	 * @author Aubrey Portwood
	 *
	 * @return WP_Todo A single instance of this class.
	 */
	public static function get_instance() {
		if ( null === self::$single_instance ) {
			self::$single_instance = new self();
		}

		return self::$single_instance;
	}

	/**
	 * Sets up our plugin.
	 *
	 * @since  NEXT
	 * @author Aubrey Portwood
	 */
	protected function __construct() {

		// Nothing yet.
	}

	/**
	 * Attach other plugin classes to the base plugin class.
	 *
	 * @since  NEXT
	 * @author Aubrey Portwood
	 *
	 * @return void
	 */
	public function plugin_classes() {
		// Attach other plugin classes to the base plugin class.
		// $this->plugin_class = new WPT_Plugin_Class( $this );
	} // END OF PLUGIN CLASSES FUNCTION

	/**
	 * Add hooks and filters.
	 *
	 * @since  NEXT
	 * @author Aubrey Portwood
	 *
	 * @return void
	 */
	public function hooks() {
		add_action( 'init', array( $this, 'init' ), 0 );
	}

	/**
	 * Activate the plugin
	 *
	 * @since  NEXT
	 * @author Aubrey Portwood
	 *
	 * @return void
	 */
	public function _activate() {

		// Make sure any rewrite functionality has been loaded.
		flush_rewrite_rules();
	}

	/**
	 * Deactivate the plugin.
	 *
	 * Uninstall routines should be in uninstall.php
	 *
	 * @since  NEXT
	 * @author Aubrey Portwood
	 *
	 * @return void
	 */
	public function _deactivate() {}

	/**
	 * Init hook.
	 *
	 * @since  NEXT
	 * @author Aubrey Portwood
	 *
	 * @return void
	 */
	public function init() {

		// load translated strings for plugin
		load_plugin_textdomain( 'wp-todo', false, dirname( 'wp-todo' ) . '/languages/' );

		// initialize plugin classes
		$this->plugin_classes();
	}

	/**
	 * Deactivates this plugin, hook this function on admin_init.
	 *
	 * @since  NEXT
	 * @author Aubrey Portwood
	 *
	 * @return void
	 */
	public function deactivate_me() {
		if ( function_exists( 'deactivate_plugins' ) ) {
			deactivate_plugins( 'wp-todo' );
		}
	}

	/**
	 * Include a file from the includes directory.
	 *
	 * @since  NEXT
	 * @author Aubrey Portwood
	 * @param  string $filename Name of the file to be included.
	 *
	 * @return bool   Result of include call.
	 */
	public static function include_file( $filename ) {
		$file = self::dir( $filename . '.php' );

		if ( file_exists( $file ) ) {
			return include_once( $file );
		}

		return false;
	}

	/**
	 * This plugin's directory.
	 *
	 * @since  NEXT
	 * @author Aubrey Portwood
	 * @param  string $path (optional) appended path.
	 *
	 * @return string       Directory and path
	 */
	public static function dir( $path = '' ) {
		static $dir;
		$dir = $dir ? $dir : trailingslashit( dirname( __FILE__ ) );
		return $dir . $path;
	}

	/**
	 * This plugin's url.
	 *
	 * @since  NEXT
	 * @author Aubrey Portwood
	 * @param  string $path (optional) appended path.
	 *
	 * @return string       URL and path
	 */
	public static function url( $path = '' ) {
		static $url;

		$url = $url ? $url : trailingslashit( plugin_dir_url( __FILE__ ) );

		return $url . $path;
	}
}

/**
 * Grab the WP_Todo object and return it.
 *
 * Wrapper for WP_Todo::get_instance().
 *
 * @since  NEXT
 * @author Aubrey Portwood
 *
 * @return WP_Todo  Singleton instance of plugin class.
 */
function wp_todo() {
	return WP_Todo::get_instance();
}

// Kick it off.
add_action( 'plugins_loaded', array( wp_todo(), 'hooks' ) );

// Activate/Deactivate.
register_activation_hook( __FILE__, array( wp_todo(), '_activate' ) );
register_deactivation_hook( __FILE__, array( wp_todo(), '_deactivate' ) );
