$(document).ready(function() {
	console.log("logic is working");

	$(".header_links").click(function(e) {
	    e.preventDefault();
	    var aid = $(this).attr("href");
	    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
	});

	$('.carousel').carousel({
	  interval: 10000
	});

	$('.navbar-toggle').click(function() {
		console.log('click');
	});
	
})