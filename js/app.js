$(document).ready(function() {
	//$(".pinned").pin();
	$('.nav li').on('click', function() {
		$(this).parent().find('.active').removeClass('active');
		$(this).addClass('active').css('font-weight', 'bold');
	});

	$('#course item').on('click', function() {
	});

	//$('#note').mouseenter(function() {
	//	$('#note #contact').removeClass("hidden");
	//	$("#note #contact ").show();
	//}).mouseleave(function() {
	//	$('#note #contact ').hide("slow",function(){});
	//});
    

	$('#openvideo-btn').on('click', function(event) {
		event.preventDefault();
		blueimp.Gallery([{
			title: '天津德艺美总校开学演出',
			href: 'http://nb.baidupcs.com/file/0c0f1f966b037b5499568d17e16f1eab?bkt=p2-nb-103&fid=84089768-250528-263848910196733&time=1416803490&sign=FDTAXERLB-DCb740ccc5511e5e8fedcff06b081203-DTaX%2F9FEasxlOOwsKZUCxx03eoE%3D&to=nbb&fm=Nin,B,G,t&newver=1&newfm=1&flow_ver=3&sl=81723486&expires=8h&rt=pr&r=379012699&mlogid=1178245569&vuk=84089768&vbdid=598461757&fin=%E5%A4%A9%E6%B4%A5%E5%BE%B7%E8%89%BA%E7%BE%8E%E6%80%BB%E6%A0%A1%E5%BC%80%E5%AD%A6%E6%BC%94%E5%87%BA.mp4&fn=%E5%A4%A9%E6%B4%A5%E5%BE%B7%E8%89%BA%E7%BE%8E%E6%80%BB%E6%A0%A1%E5%BC%80%E5%AD%A6%E6%BC%94%E5%87%BA.mp4',
			href: 'https://archive.org/download/Sintel/sintel-2048-surround_512kb.mp4',
			type: 'video/mp4',
			poster: '../img/news/open-video.jpg'
		}], $('#blueimp-gallery').data());
	});

});

