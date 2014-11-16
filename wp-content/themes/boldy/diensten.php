<?php

/*
Template Name: Diensten
*/
get_header(); ?>


	<section>

		<h1><?php the_title(); ?></h1>	
		<p>
			Hieronder vindt u een volledige beschrijving van de diensten die wij leveren. Voor meer informatie kunt u klikken op een dienst in het menu aan de rechterzijde. Staat de dienst die u graag verleend wilt hebben er niet tussen? Of heeft u er vragen over? Dan kunt u altijd <a href="/contact">contact</a> met ons opnemen, dan kijken wij hoe we u van dienst kunnen zijn.
		</p>

		<hr>

		<div class="content">
			<?php 
				$url = 'http://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI']; 
				if(strpos($url,'realisatie') || strpos($url,'hosting') || strpos($url,'analyse'))
				{
					
				}
				else 
				{

			?>
				<h2>Technische realisatie</h2>

				<p>Voordat we aan de technische realisatie beginnen, hebben we een kennismakingsgesprek om erachter te komen wat uw wensen zijn. Deze wensen zullen wij vertalen in een concept en eventueel een interactie- en/of visueel ontwerp.</p>

				<img class="service-image" src="<?php bloginfo('template_directory'); ?>/images/technische-realisatie.png" alt="technische realisatie" />

				<br /><br />

				<p>Na het afronden van de concept- en eventuele ontwerpfase, volgt de technische realisatie. Dit houdt in dat wij voor u het concept zullen uitwerken tot een gebruiksvriendelijke website.</p>

				<h3>Onderdelen van technische realisatie</h3>
				
				<ul class="realisatie">
					<li>De realisatie van uw website</li>
					<li>Interactie of interface ontwerp (optioneel)</li>
					<li>Visueel ontwerp en implementatie (optioneel)</li>
				</ul>

			<?php } // end else ?>
		</div>

		<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
			
		<?php endwhile; else: ?>

		<p><?php _e('Sorry, no posts matched your criteria.'); ?></p>

		<?php endif; ?>

	</section>

<?php get_sidebar(); ?>	

<?php get_footer(); ?>