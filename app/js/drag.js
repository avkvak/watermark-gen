function dragNDrop () {
	var wm = $('.workspase_wotermark-wrap'),
		image = $('.workspase__wotermark-image'),
		watermarks = $('.workspase__wotermark-watermark'),
		pos = $('.position'),
		button = $('#grid').children().children(),
		offsetTop = image.offset().top,
		offsetLeft = image.offset().left,
		imgWidth = image.width(),
		imgHeight = image.height(),
		watermarkWidth = wm.width(),
		watermarkHeight = wm.height(),
		watermarksWidth = watermarks.width(),
		watermarksHeight = watermarks.height(),
		x1 = (offsetLeft + imgWidth) - watermarkWidth + watermarksWidth*3,
		y1 = -(watermarkHeight - (offsetTop + imgHeight)) + watermarksHeight*3,
		x2 = offsetLeft + watermarksWidth*2,
		y2 = offsetTop + watermarksHeight*2,
		arrayPosition;

		if (y1 > 0) y1 = !y1;

		arrayPosition = [x1, y1, x2, y2];

	if (!pos.hasClass('tile')){
		wm.draggable({
			containment: ".workspase__wotermark-image", 
			cursor: "move"});
	} else {
		wm.draggable({
			containment: arrayPosition,
			cursor: "move"});
	};


	wm.on('drag',function(){
		var currentX = wm.css('left'),
			currentXInt = parseInt(currentX, 10),
			currentY = wm.css('top'),
			currentYInt = parseInt(currentY, 10),
			inputX = $('.position__controller_X-input:first'),
			inputY = $('.position__controller_Y-input:first');

		button.removeClass('active');
		inputX.val(currentXInt);
		inputY.val(currentYInt);
	});

};