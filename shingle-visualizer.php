<?php
/**
 * Plugin Name: Shingle Visualizer
 * Plugin URI: n/a
 * Description: Shows what a house looks like with shingles of various colors and shapes on its roof
 * Version: 1.0
 * Author: Kellen Mace
 * Author URI: https://twitter.com/KellenMace
 * License: http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */


// Initialize Plugin
function sv_insert_visualizer() {
	include_once( plugin_dir_path( __FILE__ ) . 'includes/sv-markup.php' );
}
add_shortcode('shingle_visualizer', 'sv_insert_visualizer');


// Enqueue scripts & styles
function sv_enqueue_scripts() {
	wp_enqueue_script( 'jquery' );
	wp_enqueue_script('sv-scripts', plugins_url( 'js/sv-scripts.js', __FILE__ ) );
	wp_localize_script( 'sv-scripts', 'sv_plugin_images_dir', plugins_url( 'images/', __FILE__ ) );
	wp_enqueue_style( 'sv-style', plugins_url('styles/sv-style.css', __FILE__ ) );
}
add_action( 'wp_enqueue_scripts', 'sv_enqueue_scripts' );

?>