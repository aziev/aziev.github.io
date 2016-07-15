;$(document).ready(function(){

	$mainnav = $('.mainnav');
	$logo = $('.logo-right');

	$('.burger-button').on('click', function(e){
		e.preventDefault();

		$mainnav.toggleClass('opened');
		$logo.toggleClass('hided');
	});

});