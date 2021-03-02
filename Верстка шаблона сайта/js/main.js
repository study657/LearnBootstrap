$(function(){
	$(window).on('load', function(){
        $('.preloader').delay(500).fadeOut('slow', function(){
        	$(this).attr('style', 'display: none !important');
        });
    });

	$(window).scroll(function(){
		if ($(this).scrollTop() > 500) {
			$('.arrow-up').fadeIn();
		} else {
			$('.arrow-up').fadeOut();
		}
	});

	$('.arrow-up').click(function(){
		$('html, body').animate({scrollTop : 0}, 800);
		return false;
	});

	baguetteBox.run('.galary');
});