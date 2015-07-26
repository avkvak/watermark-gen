$(document).ready(function() {
	$('.controllers-form').on('reset', function (){

	    $('#watermark__src-image').attr({"src": "img/image.jpg"});
	    $('#watermark__src-logo').attr({"src": "img/watermark.png"});
	    $('.workspase__wotermark-watermark').css('opacity','1');
	    $('#input-image').attr('value', 'Загрузите изображение');
	    $('#input-watermark').attr('value', 'Загрузите водяной знак');
	  	PosMode.init();

	});
});