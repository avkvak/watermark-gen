$(document).ready(function() {
	var wm = $('#blah2'),
		pos = $('.position');

	if (!pos.hasClass('tile')){
		wm.draggable({containment: "#blah", cursor: "move"});
	} else {
		wm.draggable({cursor: "move"});
	};

	wm.on('drag',function(){
		var currentX = wm.css('left'),
			currentXInt = parseInt(currentX, 10),
			currentY = wm.css('top'),
			currentYInt = parseInt(currentY, 10),
			inputX = $('.position__controller_X-input'),
			inputY = $('.position__controller_Y-input');

		inputX.val(currentXInt);
		inputY.val(currentYInt);
	});

});