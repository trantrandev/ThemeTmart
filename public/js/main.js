$(document).ready(function() {
	/**
	 *
	 * Tạo icon sổ xuống khi có menu con
	 * 1. Truy cập vô thẻ li
	 * 2. Xác định có menu con: thêm vào class có chứa icon
	..
	*/
	$('#menu ul li').children('.mega-menu').prev(this).addClass('has-icon').css('position', 'relative');

	// tab	
	$('.tab-wrapper').each(function() {
		// Tieu de cai nao dc active thi to mau
		$(this).find('ul.tab-title li').first().addClass('active');
		$(this).find('.tab-content').first().addClass('active').show();

		$(this).find('ul.tab-title li').on('click', function(){
			var tabNavIndex = $(this).index();
			var contentIndex = $(this).parents('.tab-wrapper').find('.tab-content').eq(tabNavIndex);

			$(this).addClass('active').siblings().removeClass('active');
			contentIndex.addClass('active').siblings('.tab-content').removeClass('active');
			return false;
		});
	});

	// back-top
	$(window).scroll(function(){
		var last_scroll = 200;
		if($(this).scrollTop() >= last_scroll){
			$('#foot-bot #back-to-top').stop().fadeIn(250);
		}
		else {
			$('#foot-bot #back-to-top').stop().fadeOut(250);	
		}		
	});
	$("#footer #back-to-top").click(function(){
		$('body, html').stop().animate({scrollTop : 0},800);
	});

	// menu responsive
	$(".nav-toggle").click(function(event) {
		$("#wp-responsive").stop().animate({left: 0});
		$(".opacity-menu").show();
		$(".opacity-menu").click(function(event) {
			$("#wp-responsive").stop().animate({left:'-375px'});
			$(".opacity-menu").css('display', 'none');
		});
	});

	// ZOOM PRODUCT DETAIL
	$("#zoom").elevateZoom({gallery: 'list-thumb', cursor: 'pointer',scrollZoom:true,
		galleryActiveClass: 'active', imageCrossfade: true,
		loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif'});

	// CHOOSE NUMBER ORDER
	var value = parseInt($('#num-order').attr('value'));
	$('#plus').click(function () {
		value++;
		$('#num-order').attr('value', value);
		update_href(value);
	});
	$('#minus').click(function () {
		if (value > 1) {
			value--;
			$('#num-order').attr('value', value);
		}
		update_href(value);
	});
});