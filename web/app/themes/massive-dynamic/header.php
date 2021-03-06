<?php
pixflow_decodeSetting();
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <?php
    pixflow_metaPageType();
    ?>
	<meta charset="<?php bloginfo('charset'); ?>" />
	<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1" />
    <meta name="format-detection" content="telephone=no">
    <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script>



	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />

	<!-- Theme Hook -->
    <?php
        wp_head();
    ?>
	<!-- Custom CSS -->
</head>

<body <?php body_class();?> >
    <?php do_action('pixflow_body_start'); ?>
<?php
    //notification center
    if(pixflow_get_theme_mod('notification_enable',PIXFLOW_NOTIFICATION_ENABLE)||pixflow_get_theme_mod('search_enable',PIXFLOW_SEARCH_ENABLE)||pixflow_get_theme_mod('shop_cart_enable',PIXFLOW_SHOP_CART_ENABLE)){
        get_template_part('templates/notification');
    }
?>
<div class="layout-container" id="layoutcontainer">
        <div class="color-overlay color-type"></div>
        <div class="color-overlay texture-type"></div>
        <div class="color-overlay image-type"></div>
        <div class="texture-overlay"></div>
        <div class="bg-image"></div>
    <?php


    if( pixflow_get_theme_mod('header_theme',PIXFLOW_HEADER_THEME) == 'gather') {
        get_template_part('templates/header-gather-overlay');
    }
    ?>

    <div class="layout">
        <?php
        do_action('pixflow_before_header');
        ?>
        <!--End Header-->