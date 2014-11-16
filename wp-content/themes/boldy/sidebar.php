
<!-- Begin #colRight -->
		<aside>

		<?php if(is_page( 'contact' )) { ?>
		<div class="rightBox">
			<h2>Contactgegevens</h2>
			 <div id="contact-data">
                    <?php
                        if(of_get_option('boldy_contact_address')!="") {
                    ?>	<p>
                        <span class="contact-data-field"><?php _e("Adres", "site5framework"); ?>:</span>
                        <span class="contact-data-info"><?php echo of_get_option('boldy_contact_address'); ?></span>
                        </p>
                    <?php } ?>

                    <p>
                    <span class="contact-data-info">Ockenburg 7</span>
                    <span class="contact-data-info">3328TE, Dordrecht</span>
                    </p>

                    

                    <br />

                     <?php
                        if(of_get_option('boldy_contact_email')!="") {
                    ?>	<p>
                        <span class="contact-data-field"><?php _e("E", "site5framework"); ?>:</span>
                        <span class="contact-data-info"><?php echo of_get_option('boldy_contact_email'); ?></span>
                        </p>
                    <?php } ?>


                    <?php
                        if(of_get_option('boldy_contact_phone')!="") {
                    ?>  <p>
                        <span class="contact-data-field"><?php _e("T", "site5framework"); ?>:</span>
                        <span class="contact-data-info"><?php echo of_get_option('boldy_contact_phone'); ?></span>
                        </p>
                    <?php } ?>

                    <?php
                        if(of_get_option('boldy_contact_fax')!="") {
                    ?>	<p>
                        <span class="contact-data-field"><?php _e("Fax", "site5framework"); ?>:</span>
                        <span class="contact-data-info"><?php echo of_get_option('boldy_contact_fax'); ?></span>
                        </p>
                    <?php } ?>
            </div>
		</div>
		<?php }; ?>

		<?php if(is_page( 'diensten' )) { ?>
		<div class="rightBox">
			<h2>Basis diensten</h2>
			<ul class="services">
				<li class="realisatie">Technische realisatie</li>
				<li class="hosting">Domeinnaamregistratie en hosting</li>
				<li class="design">Uniek ontwerp op basis van huisstijl</li>
			</ul>
			<h2>Extra diensten</h2>
			<ul class="services">
				<li class="analyse">Analyse en optimalisatie</li>
				<li class="support">Support en onderhoud</li>
				<!-- <li class="email">Onbeperkt aantal e-mail adressen</li> -->
				<li class="cms">Zelf teksten en afbeeldingen beheren</li>
				<li class="seo">Zoekmachine optimalisatie</li>
				<li class="social-media">Social media integratie</li>
				<li class="responsive">Uniek ontwerp mobiel en tablet</li>
			</ul>

		</div>
		<?php }; ?>

		</aside>
<!-- End #colRight -->
		
