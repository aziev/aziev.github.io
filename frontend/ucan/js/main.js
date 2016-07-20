;$(document).ready(function(){

	$mainnav = $('.mainnav');
	$logo = $('.logo-right');

	$('.burger-button').on('click', function(e){
		e.preventDefault();

		$mainnav.toggleClass('opened');
		$logo.toggleClass('hided');
	});

	$('.dash-form select').styler();

	$('.progress-items-list li').on('click', function(){
		if ($(this).hasClass('opened'))
		{
			$(this).removeClass('opened');
			$(this).find('.progress-loaders').slideUp();
		}
		else
		{
			$(this).addClass('opened');
			$(this).find('.progress-loaders').slideDown();
		}
	});

	$('.progress-items-list li.opened .progress-loaders').slideDown(0);

	$('.popup-container').on('click', function(e){
		if (e.target == this)
		{
			$(this).removeClass('opened');
		}
	});

});