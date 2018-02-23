<?php

namespace WPTODO;

class Helpers {

	public static function view( $file ) {
		$filepath = dirname( dirname( __FILE__ ) ) . '/wp-todo.php';
		return plugin_dir_path( $filepath ) . 'views/' . $file . '.php';
	}
}