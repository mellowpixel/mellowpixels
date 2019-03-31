<?php

/*
Template Name: Contact Form Page
*/
	get_header("fixed_header");
	
?>
	<div class="content-wrapper">
		<main id="main" class="site-main" role="main">
			<div id="fullheight-page" class="entry-content">
		
				<section class="contacts-form-section">

					<div class="message-sent-wrapper">
						<em>M</em><em>e</em><em>s</em><em>s</em><em>a</em><em>g</em><em>e</em><em>&nbsp;</em><em>S</em><em>e</em><em>n</em><em>t</em><em>!</em>
					</div>
					<form id="mellowpxls-contact-form">
						<div class="input-wrapper inpA">
							<input type="text" name="name" placeholder="Name">
						</div>
						<div class="input-wrapper inpB">
							<input type="email" name="email" placeholder="Email">
						</div>
						<div class="textarea-wrapper">
							<textarea name="message" rows="15" cols="50" placeholder="Please leave your message."></textarea>
						</div>
						<div class="button-wrapper">
							<input type="hidden" name="action" value="processContactFormData">
							<input type="submit">
						</div>
					</form>

					<div class="contcts-page-posts-wrapper">
						<?php while ( have_posts() ) : the_post(); ?>
							<?php the_content(); ?>
						<?php endwhile; ?>
					</div>
				</section>
			</div><!-- .entry-content -->
		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>
