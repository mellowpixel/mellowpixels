<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package Sydney
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?> ng-app="mpixelsApp">
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<?php if ( ! function_exists( 'has_site_icon' ) || ! has_site_icon() ) : ?>
	<?php if ( get_theme_mod('site_favicon') ) : ?>
		<link rel="shortcut icon" href="<?php echo esc_url(get_theme_mod('site_favicon')); ?>" />
	<?php endif; ?>
<?php endif; ?>

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<div id="page" class="hfeed site" ng-controller="animationController">
	<a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'sydney' ); ?></a>

	<header id="masthead" class="site-header" role="banner">
		<div class="header-wrap">
            <div class="container">
                <div class="row">
					<div class="col-md-4 col-sm-8 col-xs-10">
						<a class="small-logo-typo" href="/">{ MELLOW PIXELS }</a>
			        	<!-- <img class="small-logo" src="<?php echo get_template_directory_uri() . '/images/logo_typo_inline.svg' ?>"> -->
					</div>
					<div class="col-md-8 col-sm-4 col-xs-2">
						<div class="btn-menu"></div>
						<nav class="mainnav large-screen"  role="navigation">
							<?php wp_nav_menu( array( 'theme_location' => 'primary', 'fallback_cb' => 'sydney_menu_fallback' ) ); ?>
						</nav><!-- #site-navigation -->	
					</div>
				</div>
				<div class="row">
					<nav id="mainnav" class="mainnav small-screen col-md-4 col-sm-6 col-xs-12"  role="navigation">
						<?php wp_nav_menu( array( 'theme_location' => 'primary', 'fallback_cb' => 'sydney_menu_fallback' ) ); ?>
					</nav><!-- #site-navigation -->
				</div>
			</div>
		</div>
	</header><!-- #masthead -->
	<!-- <?php sydney_slider_template(); ?> -->
	<div id="fulscreen-wrapper" >
		<!-- <h1>{{whatever_text}}</h1> -->
		<div id="central-logo-wrapper">
			<img id="front-screen-logo" src="<?php echo get_template_directory_uri() . '/images/logo_red.svg' ?>">
		</div>
		<div id="centrall-navigation">
			<?php wp_nav_menu( array( 'theme_location' => 'primary', 'fallback_cb' => 'sydney_menu_fallback' ) ); ?>
		</div>
	</div>
	<section class="showreel-section">
		<iframe class='intro-animation-frame' src='' ></iframe>
	</section>
	<div id="content" class="page-wrap">
		<div class="content-wrapper">
			