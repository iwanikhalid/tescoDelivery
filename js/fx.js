jQuery(document).ready(function($) {

	// Twitter
	  $('.popup').click(function(event) {
		var width  = 575,
			height = 400,
			left   = ($(window).width()  - width)  / 2,
			top    = ($(window).height() - height) / 2,
			url    = this.href,
			opts   = 'status=1' +
					 ',width='  + width  +
					 ',height=' + height +
					 ',top='    + top    +
					 ',left='   + left;
		
		window.open(url, 'twitter', opts);
	 
		return false;
	  });

	$(function() {
		$(window).scroll(function() {
			if($(this).scrollTop() != 0) {
				$('#backtotop').fadeIn();	
			} else {
				$('#backtotop').fadeOut();
			}
		});
	 
		$('#backtotop').click(function() {
			$('body,html').animate({scrollTop:0},800);
		});	
		
		$("#notice").show();
			$("#notice a").click(function(){
		  $("#notice").hide();
		});	
		
	});

});