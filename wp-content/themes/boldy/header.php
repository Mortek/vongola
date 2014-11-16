<?php
/**
 * @package WordPress
 * @subpackage Site5 framework
 */
?><!DOCTYPE html>
    <!-- html -->
    <html <?php language_attributes(); ?>>

    <!-- head -->
	<head>

	<!-- title -->
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
    <title><?php wp_title( '|', true, 'right' ); ?> <?php bloginfo('name'); ?></title>

    <!-- meta -->
    <meta name ="viewport" content="width = 1020" />
    <meta name="generator" content="www.site5.com" />
    <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
    <script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>

     <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0-rc1/css/bootstrap.min.css">
     <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0-rc1/js/bootstrap.min.js"></script>

    <meta name="description" content="Vongola, een nieuwe en jonge onderneming voor de ontwikkeling van gebruiksvriendelijke websites door middel van open source technieken en content management systemen." />
    <link rel="shortcut icon" type="image/x-icon" href="<?php bloginfo('template_directory'); ?>/images/favicon-logo.ico">
    <meta name="keywords" content="Vongola, websites, webdesign, webdevelop, goedkoop, gebruiksvriendelijk, technische realisatie, domeinnaamregistratie, hosting, CMS, social media" />

    <?php if ( of_get_option('boldy_enablerobot')== '1') { ?>
    <meta name="robots" content="<?php echo of_get_option('boldy_metabots')  ?>" />
    <meta name="googlebot" content="<?php echo of_get_option('boldy_metagooglebot')  ?>" />
    <?php } ?>
    

	<link rel="profile" href="http://gmpg.org/xfn/11" />
	
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
    
    <link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
    <link href='http://fonts.googleapis.com/css?family=Expletus+Sans' rel='stylesheet' type='text/css'>
    
    <?php wp_head(); ?>
    
    <?php if(of_get_option('boldy_css_code') != '') { ?>   
        <?php load_template( get_template_directory() . '/custom.css.php' );?>
    <?php } ?>
    
    <?php if(of_get_option('boldy_customtypography') == '1') { ?>        
        <?php if(of_get_option('boldy_heading_font_link') != '') { ?>
        <?php echo of_get_option('boldy_heading_font_link');?>
        <?php } ?>
    
        <?php load_template( get_template_directory() . '/custom.typography.css.php' );?>
    <?php } ?> 

    <script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/js/services.js"></script>

    <script type="text/javascript">

      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-42975499-1']);
      _gaq.push(['_trackPageview']);

      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();

    </script>

</head>

<body <?php body_class(); ?> <?php if(is_home()){
				echo 'id="home"';
			}elseif(is_page_template('portfolio.php')){
				echo 'id="portfolio"';
			}elseif(is_single() and get_post_type()=='portfolio'){
				echo 'id="portfolio"';
			}?>>

<!-- BEGINN MAINWRAPPER -->
<div id="mainWrapper">
	<!-- BEGIN WRAPPER -->
    <div id="wrapper">
		<!-- BEGIN HEADER -->
        <header>
            <div id="logo">
                <a href="<?php echo home_url( '/' ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
                <?php if ( !of_get_option('boldy_clogo')== '') { ?>
					<img src="<?php echo of_get_option('boldy_clogo'); ?>" alt="<?php echo bloginfo( 'name' ) ?>" />
				<?php } elseif( !of_get_option('boldy_clogo_text')== '') {
				        echo of_get_option('boldy_clogo_text'); 
                    } else {
					bloginfo( 'name' );
				    }?>
                </a>
                <span><?php bloginfo('description'); ?></span>
                </div>
			<!-- BEGIN MAIN MENU -->
            <nav id="mainMenu" class="ddsmoothmenu">            
			<?php wp_nav_menu( array( 'theme_location' => 'main_nav', 'container'=>'false', 'fallback_cb'=>'primarymenu') );?>
            </nav>            
            <!-- END MAIN MENU -->

			<!-- BEGIN TOP SOCIAL LINKS -->
			<div id="topSocial">
				<ul>
                    
					<?php if(of_get_option('boldy_linkedin_link')!=""){ ?>
					<li><a target="_blank" href="<?php echo of_get_option('boldy_linkedin_link'); ?>" class="linkedin" title="<?php _e("Join us on LinkedIn!", "site5framework"); ?>"><img src="<?php bloginfo('template_directory'); ?>/images/ico_linkedin.png" alt="<?php _e("LinkedIn", "site5framework"); ?>" /></a></li>
					<?php }?>
                    <?php if(of_get_option('boldy_twitter_user')!=""){ ?>
					<li><a target="_blank" href="http://www.twitter.com/<?php echo of_get_option('boldy_twitter_user'); ?>" class="twitter" title="<?php _e("Follow Us on Twitter!", "site5framework"); ?>"><img src="<?php bloginfo('template_directory'); ?>/images/ico_twitter.png" alt="<?php _e("Follow Us on Twitter!", "site5framework"); ?>" /></a></li>
					<?php }?>
					<?php if(of_get_option('boldy_facebook_link')!=""){ ?>
					<li><a target="_blank" href="<?php echo of_get_option('boldy_facebook_link'); ?>" class="twitter" title="Like ons op Facebook!"><img src="<?php bloginfo('template_directory'); ?>/images/ico_facebook.png" alt="Join Us on Facebook!" /></a></li>
					<?php }?>
				</ul>
			</div>	
			<!-- END TOP SOCIAL LINKS -->
        </header>
        <!-- END HEADER -->
		
		<!-- BEGIN CONTENT -->
		<div id="content">