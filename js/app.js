$(document).ready(function() {
	//$(".pinned").pin();
	$('.nav li').on('click', function() {
		$(this).parent().find('.active').removeClass('active');
		$(this).addClass('active').css('font-weight', 'bold');
	});

	$('#course item').on('click', function() {
		alert();
	});
});

