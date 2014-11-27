$(document).ready(function() {
	//$(".pinned").pin();
	$('.nav li').on('click', function() {
		$(this).parent().find('.active').removeClass('active');
		$(this).addClass('active').css('font-weight', 'bold');
	});

	$('#course item').on('click', function() {});

	//$('#note').mouseenter(function() {
	//	$('#note #contact').removeClass("hidden");
	//	$("#note #contact ").show();
	//}).mouseleave(function() {
	//	$('#note #contact ').hide("slow",function(){});
	//});

	$('#openvideo-btn, .big_play').on('click', function(event) {
		event.preventDefault();
		blueimp.Gallery([{
			title: '天津德艺美总校开学演出',
			href: 'http://deyimei-art.qiniudn.com/video/天津德艺美总校开学演出-small.mp4',
			type: 'video/mp4',
			poster: '../img/news/open-video.jpg'
		}], $('#blueimp-gallery').data());
	});


	$('#demo1').videoUI({
		'autoHide': true,
		'volumeMedia': 3,
		'playMedia': true,
		'progressMedia': true,
		'timerMedia': true,
		'fullscreenMedia': true

	});

});

