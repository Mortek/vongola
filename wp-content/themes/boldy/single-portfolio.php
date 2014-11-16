<?php get_header(); ?>
			
			<div id="colFull">
					<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
					<article class="portfolio-single">
						<header>
							<h1 class="single-portfolio-title"><?php the_title(); ?></h1> 


							<a href="/projecten"><button type="button" class="btn btn-primary back-button">Terug naar het projectenoverzicht</button></a>
						</header>
					
						<section class="post_content clearfix" itemprop="articleBody">
							<div class="portfolio-content">
								<?php the_content(); ?>
							</div>

							<div class="portfolio-contact">
								<h2>Contactpersoon voor dit project</h2>
								<img class="contact-person" src="<?php bloginfo('template_directory'); ?>/images/maurice.jpg" alt="projectmanager" />
								<ul class="info">
									<li class="name">Maurice Moret</li>
									<li class="function">Webdeveloper</li>
									<li class="e-mail"><a href="mailto:maurice@vongola.nl">maurice@vongola.nl</a></li>
								</ul>
							</div>

					       <div class="clear"></div>
						</section> <!-- end article section -->
                        </article>
											
					<?php endwhile; ?>		
					
					<?php else : ?>
					
					<article id="post-not-found">
					    <header>
					    	<h1><?php _e("No Posts Yet", "site5framework"); ?></h1>
					    </header>
					    <section class="post_content">
					    	<p><?php _e("Sorry, What you were looking for is not here.", "site5framework"); ?></p>
					    </section>
					</article>
					
					<?php endif; ?>
			
				
    
			</div> 
<script> 
		$(document).ready(function(){ 
					showOverlay();
				});
		</script>
<?php get_footer(); ?>