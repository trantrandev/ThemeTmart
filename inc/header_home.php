<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- link style -->
	<link rel="stylesheet" href="public/reset.css">
	<link rel="stylesheet" href="public/style.css">
	<link rel="stylesheet" href="public/responsive.css">
	<!-- link font -->
	<!-- <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500&display=swap" rel="stylesheet">
	-->
	<!-- link font-awesome -->
	<link rel="stylesheet" href="public/font/font-awesome-4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="public/font/font_icon_create/style.css">
	<!-- link awe carousel -->
	<link rel="stylesheet" href="public/css/carousel/owl.carousel.min.css">
	<link rel="stylesheet" href="public/css/carousel/owl.theme.default.min.css">
	<script type="text/javascript" src="public/js/jquery-3.5.1.min.js"></script>
	<script type="text/javascript" src="public/js/carousel/owl.carousel.min.js"></script>
	<script type="text/javascript" src="public/js/home-slider.js"></script>
	<!-- link style home -->
	<script type="text/javascript" src="public/js/main.js"></script>

	<title>Website cửa hàng điện máy EMart</title>
</head>
<body>
	<div id="wrapper">
		<div id="header">
			<div class="opacity-menu"></div>
			<div id="top-bar">
				<div class="container">
					<a href="tel:0336313347">Chăm sóc khách hàng: 
						<span>0336 313 347</span>
					</a>
				</div>
			</div>
			<div id="top-header">
				<div class="container d-flex align-items-center justify-content-between">
					<a class="logo d-block" href="?page=home">
						<img src="public/img/logo/logo(2).png" alt="logo">
					</a>

					<!-- responsive-menu -->
					<button type="button" class="nav-toggle">
						<i class="fa fa-bars" aria-hidden="true"></i>
					</button>

					<form class="form-search" autocomplete="off" action="" method="get" accept-charset="utf-8">
						<input type="text" name="query" placeholder="Bạn cần tìm gì hôm nay?">	
						<button type="submit">
							<i class="fa fa-search" aria-hidden="true"></i>
						</button>
					</form>

					<ul class="list-info d-flex justify-content-between">
						<li class="hotline">
							<div class="hotline-icon icon"><i class="fa fa-phone" aria-hidden="true"></i>
							</div>
							<div class="hotline-content content">
								<a href="tel:0123456789">0123456789</a>
								<span>Tổng đài miễn phí</span>
							</div>
						</li>
						<li class="account">
							<div class="account-icon icon"><i class="fa fa-user" aria-hidden="true"></i>
							</div>
							<div class="account-content content">
								<a href="#">Tài khoản</a>
								<span>Xin chào</span>
								<ul class="login">
									<li class="login"><a href="#">Đăng nhập</a></li>
									<li class="register"><a href="#">Đăng ký</a></li>
								</ul>
							</div>
						</li>
						<li class="cart">
							<div class="cart-icon icon">
								<a href="?page=cart" title="Giỏ hàng">
									<i class="fa fa-shopping-bag" aria-hidden="true"></i>
								</a>
							</div>
							<span class="num-item">0</span>
						</li>
					</ul>
				</div>
			</div>
			<!-- End top-header -->

			<?php require 'main_navigation.php'; ?>
		</div>
		<!-- End header -->