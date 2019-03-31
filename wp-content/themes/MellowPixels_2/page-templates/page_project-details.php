<?php

/*
Template Name: Project Details Page
*/
	get_header("fixed_header");
	
?>
	<!-- <div class="content-wrapper"> -->
	<main id="main" class="site-main" role="main">
		<div id="fullheight-page" class="entry-content">
			<div class="centered-content-wrapper">
				<?php while ( have_posts() ) : the_post(); ?>
					<?php the_content(); ?>
				<?php endwhile; ?>
			</div>
		</div><!-- .entry-content -->
	</main><!-- #main -->

<?php get_footer(); ?>