jQuery(window).load(function() {
	$('.lightboxBg').fadeOut(200);
});

jQuery(document).ready(function($) {
	$(window).scroll(function(e) {

		// Enter scene #1
		if (!$('.explanation1').is(':visible') && 
			$(window).scrollTop()>$('.scene1').position().top && 
			$(window).scrollTop()<$('.scene1').position().top+100) {
			$('.explanation1').fadeIn(600);
		}

		// Enter scene #1 + reaching orange box #2
		if (!$('.explanation2').is(':visible') && 
			$(window).scrollTop()>$('.scene2').position().top && 
			$(window).scrollTop()<$('.scene2').position().top+100) {
			$('.explanation2').fadeIn(600);
		}

		// If reach scene #3, hide explanation #1 and #2
		if ($('.explanation1').is(':visible') &&
			$(window).scrollTop()>$('.scene3').position().top) {
			$('.explanation1,.explanation2').fadeOut(600);
		}

		// Show explanation #3
		if (!$('.explanation3').is(':visible') && 
			$(window).scrollTop()>$('.scene4').position().top+150) {
			$('.explanation3').fadeIn(600);
		}

		// Hide explanation #3
		if ($('.explanation3').is(':visible') && 
			($(window).scrollTop()>$('.scene4').position().top+1000 || $(window).scrollTop()<$('.scene3').position().top)) {
			$('.explanation3').hide();
		}

		// Move goods
		minMovement=$('.scene5').position().top;
		maxMovement=$('.scene5').position().top+280;

		if ($(window).scrollTop()>minMovement && $(window).scrollTop()<maxMovement) {
			if ($(window).scrollTop()<maxMovement && !$('.scene6Goods').is(':visible')) {
				$('.scene6Goods').show();
			}
			$('.scene6Goods').css('top', $(window).scrollTop()-$('.scene5').position().top+140);
		}

		// Move lorry
		minMovement=$('.scene6').position().top+260;
		maxMovement=$('.scene7').position().top-750;

		if ($(window).scrollTop()>minMovement && $(window).scrollTop()<maxMovement) {
			if ($(window).scrollTop()>minMovement && $('.scene6Goods').is(':visible')) {
				$('.scene6Goods').hide();
			}
			//$('.scene6Truck').css('top', $(window).scrollTop()-$('.scene6').position().top+100);
			$('.scene6Truck').css({
				position: 'fixed',
				left: '50.65%',
				top: 110
			});
		}

		if ($(window).scrollTop()<minMovement) {
			$('.scene6Truck').css('position', 'absolute').css('top', 370);
		}

		if ($(window).scrollTop()>maxMovement) {
			$('.scene6Truck').css('position', 'absolute').css('top', 4000);
		}




		// Show explanation #4
		if (!$('.explanation4').is(':visible') && $(window).scrollTop()>$('.scene6').position().top+250) {
			$('.explanation4').fadeIn(600);
		}

		// Hide explanation #4
		if ($('.explanation4').is(':visible') && 
			($(window).scrollTop()<$('.scene6').position().top+parseInt($('.explanation4').css('top'))-900 ||
			$(window).scrollTop()>$('.scene6').position().top+parseInt($('.explanation4').css('top'))+500)) {
			$('.explanation4').hide();
		}



		// Show explanation #5
		if (!$('.explanation5').is(':visible') && $(window).scrollTop()>$('.scene6').position().top+parseInt($('.explanation5').css('top'))-600) {
			$('.explanation5').fadeIn(600);
		}

		// Hide explanation #5
		if ($('.explanation5').is(':visible') && 
			($(window).scrollTop()<$('.scene6').position().top+parseInt($('.explanation5').css('top'))-900 ||
			$(window).scrollTop()>$('.scene7').position().top)) {
			$('.explanation5').hide();
		}

		// Show explanation #7
		if (!$('.explanation7').is(':visible') && $(window).scrollTop()>$('.scene6').position().top+parseInt($('.explanation7').css('top'))-600) {
			$('.explanation7').fadeIn(600);
		}

		// Hide explanation #5
		if ($('.explanation7').is(':visible') && 
			($(window).scrollTop()<$('.scene6').position().top+parseInt($('.explanation7').css('top'))-900 ||
			$(window).scrollTop()>$('.scene7').position().top)) {
			$('.explanation7').hide();
		}

		// Show Delivery Guy
		if (!$('.scene7DeliveryGuy').is(':visible') && $(window).scrollTop()>$('.scene7').position().top-200) {
			$('.scene7DeliveryGuy').fadeIn(600);
		}

		// Hide Delivery Guy
		if ($('.scene7DeliveryGuy').is(':visible') && $(window).scrollTop()<$('.scene7').position().top-600) {
			$('.scene7DeliveryGuy').hide();
		}
	});
});