<?php
/**
 * The Header template for our theme
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage school
 * @since school 1.0
 */
 $tdu = get_template_directory_uri(); 
?>
<!DOCTYPE html>
<html>
	<head>
		<script src="<?php echo $tdu ?>/js/jquery-1.10.2.js"></script>
		<script src="<?php echo $tdu ?>/js/main.js"></script>
  		<link rel="stylesheet" href="<?php bloginfo( 'stylesheet_url' );?>"></link>
		<meta charset="utf-8">
	</head>
	<body>