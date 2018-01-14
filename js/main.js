$(document).ready(function() {

    var $body = $('html, body');
    var $header = $('.header');

	$('.item').on('click', function() {});

    $(document).on('scroll', function() {
        if ($body.scrollTop() < $(window).height()) {
            var scrolledPercents = $body.scrollTop() * 100 / $(window).height();
            var opacity = (100 - scrolledPercents) / 100;
            $header.css('opacity', opacity);
        }
    });
});
