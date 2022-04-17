jQuery(document).ready(function(){

	/* Open lightbox on button click */
	$('.lightbox-toggle').click(function(){
		$('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
		$('.box').fadeIn();
	});

	/* Click to close lightbox */
	$('.close, .backdrop').click(function(){
		$('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
			$('.backdrop').css('display', 'none');
		});
		$('.box').fadeOut();
	});

});