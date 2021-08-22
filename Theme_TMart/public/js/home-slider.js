$(document).ready(function(){
	// home-slider
	$('.home-slider').owlCarousel({
		// loop:true,
		margin:2,
		autoplay: true,
		autoplayTimeout: 10000,
		responsive:{
			0:{
				items:1,
				dots:false
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

	// selling-product
	$('.slider-product.slider-selling').owlCarousel({
		// loop:true,
		margin:15,
		dots: false,
		autoplayHoverPause: true,	
		nav: true,
		autoplay: true,
		autoplayTimeout: 10000,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:6
			}
		}
	});

	// slide product
	$('.slider-product').owlCarousel({
		// loop:true,
		margin:15,
		autoplay: true,
		autoplayTimeout: 10000,
		nav:true,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	});

	// banner
	$('.banner').owlCarousel({
		margin:15,
		autoplay: true,
		autoplayTimeout: 10000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});

// ============== DETAIL PRODUCT ============
	// slider list-thumb 
	$('#detail_product #list-thumb').owlCarousel({
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:4
			},
			768:{
				items:4
			},
			1000:{
				items:4
			}
		}
	});

	// same product
	$('.slider-same-product').owlCarousel({
		margin:15,
		autoplay: true,
		nav:true,
		autoplayTimeout: 10000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:4
			}
		}
	});

});