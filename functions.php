<?php
function my_theme_enqueue_styles() {

    $parent_style = 'twentyseventeen'; // This is 'twentyseventeen-style' for the Twenty seventeen theme.

    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/assets/css/main.css',
        wp_get_theme()->get('Version')
    );

    wp_enqueue_script('main-js', get_stylesheet_directory_uri() . '/assets/js/bundle.js', array('jquery'), '',true);
}
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
?>