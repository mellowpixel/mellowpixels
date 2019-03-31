<?php

/*

Template Name: All Other Pages

*/
	get_header("fixed_header");
?>
	<div class="content-wrapper">
		<main id="main" class="site-main" role="main">
			<div id="fullheight-page" class="entry-content">
				<?php while ( have_posts() ) : the_post(); ?>
					<?php the_content(); ?>
				<?php endwhile; ?>
			</div><!-- .entry-content -->
		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>

