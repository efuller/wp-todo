<?php
/**
 * Plugin Name: WP Todo
 * Plugin URI:  http://www.ericfuller.net
 * Description: A todo app for your WordPress powered site.
 * Version:     1.0.0
 * Author:      Eric Fuller
 * Author URI:  http://www.ericfuller.net
 * License:     GPL-3.0+
 * Text Domain: wp-todo
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Autoload class files.
 *
 * @since  1.0.0
 * @param  string $class_name Name of the class being requested.
 */
function wptodo_autoload_classes( $class_name ) {

	// Check to see if the namespace exists.
	if ( false === strpos( $class_name, 'WPTODO\\' ) ) {
		return;
	}

	// Set the path to the classes directory.
	$path = plugin_dir_path( __FILE__ ) . 'class/';

	// Set up our filename.
	$file_part = strtolower( str_replace( '_', '-', substr( $class_name, strlen( 'wptodo\\' ) ) ) );

	// Compose the filename.
	$filename = $path . 'class-' . $file_part . '.php';

	// Bail if the file doesn't exist.
	if ( ! file_exists( $filename ) ) {
		return;
	}

	// Include our file.
	require_once( $filename );
}
spl_autoload_register( 'wptodo_autoload_classes' );

/**
 * Bootstrap the plugin.
 *
 * @since 1.0.0
 */
function wptodo_engage() {

	// Kick things off.
	new \WPTODO\Bootstrap();
}

// Engage.
wptodo_engage();