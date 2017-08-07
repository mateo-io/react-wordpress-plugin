<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              mateom.io
 * @since             1.0.0
 * @package           React
 *
 * @wordpress-plugin
 * Plugin Name:       last-five
 * Plugin URI:        react-manager
 * Description:       Manage your last 5 posts using React
 * Version:           1.2.0
 * Author:            Mateo Mejia
 * Author URI:        mateom.io
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       react
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-react-activator.php
 */
function activate_react() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-react-activator.php';
	React_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-react-deactivator.php
 */
function deactivate_react() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-react-deactivator.php';
	React_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_react' );
register_deactivation_hook( __FILE__, 'deactivate_react' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-react.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_react() {

	$plugin = new React();
	$plugin->run();

}
run_react();
