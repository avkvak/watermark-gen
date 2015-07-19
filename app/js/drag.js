function dragNDrop () {
	var wm = $('.workspase_wotermark-wrap'),
		pos = $('.position');

	if (!pos.hasClass('tile')){
		wm.draggable({containment: ".workspase__wotermark-image", cursor: "move"});
		console.log(1);
	} else {
		wm.draggable({containment: false ,cursor: "move"});

		console.log(2);
	};

	wm.on('drag',function(){
		var currentX = wm.css('left'),
			currentXInt = parseInt(currentX, 10),
			currentY = wm.css('top'),
			currentYInt = parseInt(currentY, 10),
			inputX = $('.position__controller_X-input:first'),
			inputY = $('.position__controller_Y-input:first');

		inputX.val(currentXInt);
		inputY.val(currentYInt);
	});

};