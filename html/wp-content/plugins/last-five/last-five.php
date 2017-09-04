<?php

/**
 * Plugin Name: Last Five
 * Description: Beautiful interface to edit your last 5 posts
 * WordPress plugins and themes
 * Author: Mateo Mejia
*/

include dirname( __FILE__ ) . '/widget.php';

class Last_Five {

	static function widgets_init() {
		register_widget( 'React_Demo_Widget' );
	}

	static function enqueue_scripts() {
		wp_enqueue_script( 'wp-react-boilerplate', plugins_url( 'build/widget.js', __FILE__ ), array(), 'v0.0.1', true );
		wp_enqueue_style( 'wp-react-boilerplate', plugins_url( 'build/widget.css', __FILE__ ), array(), 'v0.0.1');
	}


	static function admin_enqueue_scripts() {
		wp_enqueue_script( 'wp-react-boilerplate-admin', plugins_url( 'build/admin.js', __FILE__ ), array(), 'v0.0.1', true );
		wp_enqueue_style( 'wp-react-boilerplate-admin', plugins_url( 'build/admin.css', __FILE__ ), array(), 'v0.0.1');

	}

	static function add_admin_page() {
		add_menu_page(
			'WP React Component Library',
			'Last Five React',
			'manage_options',
			'wp-react-component-library',
			array( 'Last_Five', 'render_component_library' )
		);
	}

	static function render_component_library() {
		echo '<div id="wp-react-component-library" class="wrap"></div>';
	}

}

add_action( 'widgets_init', array( 'Last_Five', 'widgets_init' ) );
add_action( 'wp_enqueue_scripts', array( 'Last_Five', 'enqueue_scripts' ) );
add_action( 'admin_enqueue_scripts', array( 'Last_Five', 'admin_enqueue_scripts' ) );
add_action( 'admin_menu', array( 'Last_Five', 'add_admin_page' ) );
