<?php

$page = isset($_GET['page']) ? $_GET['page'] : 'home';
$path = "public/page/{$page}.php";

if($page != "home"){
	require 'inc/header.php';
	require 'inc/bread_crumb.php';
}

if (file_exists($path)) {
	require "{$path}";
} else {
	require "pages/404.php";
}

require 'inc/footer.php';
?>