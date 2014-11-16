$( document ).ready(function() {

	

	// Swaps the contact image on hover on the homepage
	jQuery(function(){
	 $('#img-swap').hover(
	      function(){this.src = this.src.replace('_off','_on');},
	      function(){this.src = this.src.replace('_on','_off');
	 });

	// Functions to check which link has been used via the homepage
	function realisatie()
	{   
	    $('.content').fadeOut(700, function(){
	    	$('.content').empty().html('<h2>Technische realisatie</h2><p>Voordat we aan de technische realisatie beginnen, hebben we een kennismakingsgesprek om erachter te komen wat uw wensen zijn. Deze wensen zullen wij vertalen in een concept en eventueel een interactie- en/of visueel ontwerp.</p><img class="service-image" src="../wp-content/themes/boldy/images/technische-realisatie.png" alt="technische realisatie" /><br /><br /><p>Na het afronden van de concept- en eventuele ontwerpfase, volgt de technische realisatie. Dit houdt in dat wij voor u het concept zullen uitwerken tot een gebruiksvriendelijke website.</p><h3>Onderdelen van technische realisatie</h3><ul class="realisatie"><li>De realisatie van uw website</li><li>Interactie of interface ontwerp (optioneel)</li><li>Visueel ontwerp en implementatie (optioneel)</li></ul>').fadeIn("slow");
		});
	}

	function hosting()
	{   
	   $('.content').fadeOut(700, function(){
	   		$('.content').empty().html('<h2>Domeinnaamregistratie en hosting</h2><p>Nadat u geheel tevreden bent met uw website zullen wij samen met u voor u een snelle en betrouwbare webhosting zorgen.</p><img class="service-image" src="../wp-content/themes/boldy/images/hosting-beheer.png" alt="hosting en beheer" /><br /><br /><p>De webhosting bieden wij in twee soorten pakketten aan, Basic en Unlimited. Het Basic pakket kunt u voor een kleine tot middelgrote website het best kiezen, dit is daarom het pakket wat wij meestal zullen aanraden.</p><h3>Basic <span class="price">&rarr; &euro; 4,95 p/m</span></h3><ul class="hosting"><li>3 GB opslagruimte</li><li>60 GB dataverkeer</li><li>Gratis domeinnaam</li><li>25 e-mailadressen</li></ul><h3>Unlimited <span class="price">&rarr; &euro; 9,95 p/m</span></h3><ul class="hosting"><li>Onbeperkt opslagruimte</li><li>Onbeperkt dataverkeer</li><li>Gratis domeinnaam</li><li>Onbeperkt e-mailadressen</li></ul>').fadeIn("slow");
		});
	}

	function analyse()
	{   
	    $('.content').fadeOut(700, function(){
	    	$('.content').empty().html('<h2>Analyse en optimalisatie</h2><p>Door het gedrag van de bezoeker te analyseren kunnen wij een gebruiksvriendelijke website garanderen. We optimaliseren de website zodanig dat de gebruiker hier makkelijk mee overweg kan.</p><img class="service-image" src="../wp-content/themes/boldy/images/analyse-optimalisatie.png" alt="Analyse en optimalisatie" /><br /><br /><p>Dit doen wij door de doelgroep te betrekken bij het proces, wij kijken naar de interactie tussen mens en computer om erachter te komen of het product gebruiksvriendelijk en bruikbaar is.</p><h3>Voordelen van analyse en optimalisatie</h3><ul class="analyse"><li>Verminderen van gebruikersfouten</li><li>Vergemakkelijken van gebruik en leerbaarheid</li><li>Verhogen van gebruikersproductiviteit en tevredenheid</li><li>De gebruiker meer vertrouwen geven in het systeem</li><li>Hoeveelheid verkochte producten, omzet, marktaandeel verhogen</li><li>Verhogen van het verkeer (en transacties)</li><li>Meer klanten trekken en behouden</li></ul>').fadeIn("slow");
		});
	}

	function support()
	{   
	    $('.content').fadeOut(700, function(){
	    	$('.content').empty().html('<h2>Support en onderhoud</h2><p>Bij de oplevering van uw website heeft u een volledig functioneel product waar u tevreden mee kunt zijn. Echter veranderd het web alsmaar door browser- en beveiligingsupdates. Om het juist functioneren van uw website voor een langere termijn te waarborgen, bieden wij een onderhoudscontract aan.</p><img class="service-image" src="../wp-content/themes/boldy/images/support-onderhoud.png" alt="Support en onderhoud" /><br /><br /><p>Vanzelfsprekend zijn wij dagelijks beschikbaar voor uw vragen en problemen, u kunt altijd contact met ons opnemen via het contactformulier op de <a href="/contact">contact pagina</a> of ons <a href="/contact">telefonisch</a> benaderen.</p><h3>Voordelen van support en onderhoud</h3><ul class="support"><li>Aanpassingen in geval van bugs</li><li>Aanpassingen in geval van browserupdates</li><li>Aanpassingen in geval van beveiligingsupdates</li></ul>').fadeIn("slow");
		});
	}

	// function email() 
	// {
	//     $('.content').empty();
	//     $('.content').html('<h2>Onbeperkt aantal e-mail adressen</h2><p>...</p><img class="service-image" src="../wp-content/themes/boldy/images/onbeperkte-emailadressen.png" alt="Onbeperkte emailadressen" /><br /><br />');
	// }

	function design()
	{
	    $('.content').fadeOut(700, function(){
	    	$('.content').empty().html('<h2>Uniek ontwerp op basis van huisstijl</h2><p>Voordat de realisatie van de website plaatsvindt zullen er tijdens het kennismakinggesprek veel dingen naar boven komen van zowel uw kant als ons advies. U zal daarom altijd in staat zijn mee te denken over het ontwerp.</p><img class="service-image" src="../wp-content/themes/boldy/images/eigen-huisstijl.png" alt="Eigen huisstijl" /><br /><br /><p>Wij proberen een ontwerp aan de hand van uw wensen samen te stellen waarbij uw eigen huisstijl wordt meegenomen in het design. Heeft u nog geen huisstijl of logo? Dan kunnen wij u hier ook mee van dienst zijn.</p><h3>Voordelen van een uniek ontwerp</h3><ul class="design"><li>Website sluit aan bij uw imago en representatie van uw bedrijf</li><li>Klanten zijn gecharmeerd van uniek ontwerp</li><li>Herkenbaarheid bij klanten</li><li>Klanten voelen zich meer vertrouwd op de website</li></ul>').fadeIn("slow");
		});
	}

	function cms()
	{
	    $('.content').fadeOut(700, function(){
	    	$('.content').empty().html('<h2>Zelf teksten en afbeeldingen beheren</h2><p>Wilt u de mogelijkheid hebben om projecten, teksten en afbeeldingen zelfstandig te beheren? Dan kan dat ook! Als u een Content Management Systeem (CMS) bij uw website wilt hebben dan kan dat uiteraard geregeld worden.</p><img class="service-image" src="../wp-content/themes/boldy/images/cms.png" alt="CMS" /><br /><br /><p>Wij zorgen ervoor dat u gemakkelijk uw bestaande gegevens op uw website kunt veranderen, verwijderen en aanmaken. Door de dynamische structuur van het CMS zijn uw gegevens eenvoudig te beheren en te structureren.</p><h3>Voordelen van een CMS</h3><ul class="cms"><li>Geen kosten voor kleine aanpassingen en uiteindelijk kosten besparen</li><li>Gemakkelijk kleine wijzigingen doorvoeren zonder technische kennis van programmeren</li><li>Het publiceren van gegevens en documenten kost weinig tijd</li></ul>').fadeIn("slow");
		});
	}

	function seo() 
	{
	    $('.content').fadeOut(700, function(){
	    	$('.content').empty().html('<h2>Zoekmachine optimalisatie</h2><p>Wilt u graag gevonden op het web en hoger in de zoekresultaten komen? Dan regelen wij dat voor u!</p><img class="service-image" src="../wp-content/themes/boldy/images/seo.png" alt="SEO" /><br /><br /><p>Zoekmachine optimalisatie is over het algemeen op langere termijn een veel effectievere en goedkopere manier om waardevolle bezoekers te bereiken dan traditionele toepassingen. Dit komt tevens omdat internetgebruikers die op uw site terecht komen via een zoekmachine veel gerichter hebben gezocht naar uw diensten of producten.</p><h3>Voordelen van zoekmachine optimalisatie</h3><ul class="seo"><li>Naamsbekendheid</li><li>Meer bezoekers en potenti&euml;le klanten</li></ul><h3>Een paar feitjes</h3><ul class="seo"><li>De meeste internetgebruikers kijken alleen naar de top 30 van de zoekresultaten</li><li>85% van de internetgebruikers beschouwt een merk met een toppositie in de zoekresultaten als topmerk</li><li>Gemiddeld 85% van de internetgebruikers komt op uw website terecht via een zoekmachine</li></ul>').fadeIn("slow");
		});
	}

	function socialmedia()
	{
	    $('.content').fadeOut(700, function(){
	    	$('.content').empty().html('<h2>Social media integratie</h2><p>Social media marketing is één van de meest effectieve manieren om een bedrijf te promoten op het internet. Of je nu een online bedrijf of een traditioneel bedrijf hebt, social media marketing kan een waardevolle aanwinst zijn!</p><img class="service-image" src="../wp-content/themes/boldy/images/social-media.png" alt="Social Media" /><br /><br /><p>Het is een simpele vorm van reclame, contact, promotie en professionaliteit. Heeft u een bedrijf, met of zonder website, en geen social media? Dan is dit het moment om over te stappen om uw bereikbaarheid te verbreden!</p><h3>Voordelen van social media marketing</h3><ul class="socialmedia"><li>Online promotie</li><li>Klanten informeren</li><li>Betere zoekresultaten</li><li>Verkrijgen van vertrouwen bij uw klant</li><li>Toename van het aantal bezoekers en eventueel winst</li><li>Een handig instrument voor marktonderzoek en inzicht</li></ul>').fadeIn("slow");
		});
	}

	function responsive()
	{	
		$('.content').fadeOut(700, function(){
			$('.content').empty().html('<h2>Uniek ontwerp mobiel en tablet</h2><p>Tegenwoordig zitten bezoekers niet alleen op computers, ze maken steeds meer gebruik van een tablet of mobiel om het internet te bereiken.</p><img class="service-image" src="../wp-content/themes/boldy/images/responsive.png" alt="Responsive" /><br /><br /><p>Uiteraard zal een mobile en tablet versie van een website niet geschikt zijn voor elke onderneming. Het grote voordeel is wel dat u zich aanpast aan de klant. Bezoekers gaan tenslotte steeds vaker online op kleine beeldschermen. Sommige websites zijn erg ontoegankelijk voor kleine apparaten, waardoor u mogelijk klanten misloopt, en dat wilt u als bedrijf uiteraard niet!</p>').fadeIn("slow");
		});
		
	}

	// Check if the url contains the words of the clicked items on the homepage
	if( window.location.href.indexOf('realisatie') > -1 )
	{
	    realisatie();
	}
	if( window.location.href.indexOf('hosting') > -1 )
	{
	    hosting();
	}
	if( window.location.href.indexOf('analyse') > -1 )
	{
	    analyse();
	}
	
	$(".content").hide(0).fadeIn(700);

	// ALL OF THE FUNCTIONS FOR THE SERVICE PAGE
	$('.realisatie').click(function()   {  realisatie();	});
	$('.hosting').click(function()      {     hosting();    });
	$('.analyse').click(function()      {     analyse();    });
	$('.support').click(function()      {     support();    });
	// $('.email').click(function()        {       email();    });
	$('.design').click(function()       {      design();    });
	$('.cms').click(function()          {         cms();    });
	$('.seo').click(function()          {         seo();    });
	$('.social-media').click(function() { socialmedia();    });
	$('.responsive').click(function()   {  responsive();    });

	});
});