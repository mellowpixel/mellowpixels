<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package Sydney
 */
?>
			
		</div>
	</div><!-- #content -->

	<?php if ( is_active_sidebar( 'footer-1' ) ) : ?>
		<?php get_sidebar('footer'); ?>
	<?php endif; ?>

    <a class="go-top"><i class="fa fa-angle-up"></i></a>

	<footer id="colophon" class="site-footer" role="contentinfo">
		<img class="decor-top-imp" src="<?php echo get_template_directory_uri() . '/images/footer_decor.svg'; ?>">
		
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
