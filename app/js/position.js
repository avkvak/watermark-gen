var PosMode = (function () {
	var 
		button = $('.position__type-button'),
		normal = $('.position__type-button_normal'),
		tile = $('.position__type-button_tile'),
		normalActive = 'position__type-button_normal-active',
		tileActive = 'position__type-button_tile-active',
		contX = $('.position__controller_X-description'),
		contY = $('.position__controller_Y-description'),
		block = $('.position');

	function _setUpListeners () {
		normal.on('click', _goToNormal);
		tile.on('click', _goToTile);
	} // Прослушка

	function _goToNormal (event) {
		tile.removeClass(tileActive);
		normal.addClass(normalActive);
		contX.text('X').css('font-family', 'Roboto-Light');
		contY.text('Y').css('font-family', 'Roboto-Light');
		block.removeClass('tile');
		NormalMode.init();
		return false;
	} // Тут описываем все действия по переходу в нормальный режим и запускаем функцию нормального режима

	function _goToTile (event) {
		normal.removeClass(normalActive);
		tile.addClass(tileActive);
		contX.text('↕').css('font-family', 'colibri');
		contY.text('↔').css('font-family', 'colibri');
		block.addClass('tile');
		TileMode.init();
		return false;
	} // Тут описываем все действия по переходу в режим замостить и запускаем функцию режима.


    return {
	    
	    init : function() {
			console.log('PosMode initiated');
			_setUpListeners();
			_goToNormal(); //Как только мы загрузились, мы сразу же в нормальном режиме.
	    }
	}

}());


var NormalMode = (function () {
	var
		grid = $('#grid'),
		buttons = grid.children().children(),
		image = $('.workspase__wotermark-image'),
		watermark = $('.workspase_wotermark-wrap'),
		xInput = $('.position__controller_X-input'),
		yInput = $('.position__controller_Y-input'),
		arrows = $('.position').find('a:not(.position__type-button)');

		function _setUpListeners () {
			buttons.on('click', _positionItFromGrid);
			xInput.on('keyup change', _positionItFromInputX);
			yInput.on('keyup change', _positionItFromInputY);
			arrows.on('click', _positionItFromArrows);
		}

		function _positionItFromGrid (event) {
			var $this = $(this);

			var 
				imageWidth = image.outerWidth(),
				imageHeight = image.outerHeight(),
				watermarkWidth = watermark.outerWidth(),
				watermarkHeight = watermark.outerHeight();

			var 
				className = event.target.className.split(' ')[0],
				parentClassName = $(this).parent('div')[0].className;
				posLeft = 0, posTop = 0;

			buttons.removeClass('active');
			$this.addClass('active'); //Подсвечиваем нажатую кнопку красным

			switch (className) {
				case 'left':
					posLeft = 0;
					break
				case 'center':
					posLeft = (imageWidth - watermarkWidth) / 2;
					break
				case 'right':
					posLeft = imageWidth-watermarkWidth;
					break
			}

			switch (parentClassName) {
				case 'top-row':
					posTop = 0;
					break
				case 'middle-row':
					posTop = (imageHeight - watermarkHeight) / 2;
					break
				case 'bottom-row':
					posTop = imageHeight - watermarkHeight;
					break
			}

			posLeft = Math.round(posLeft);
			posTop = Math.round(posTop);

			watermark.css({
				'left' : posLeft,
				'top' : posTop
			}); //Выстраиваем вотермарк на картинке
			xInput.val(posLeft);
			yInput.val(posTop); //Передаем значения в инпуты
		}

		function _positionItFromInputX (event) {
			buttons.removeClass('active');//С сетки скинуть подветку, если заполняются инпуты

			var 
				$this = $(this);
			var 
				imageWidth = image.outerWidth(),
				watermarkWidth = watermark.outerWidth();

			_letterCheck($this);

			if ($this.val() > (imageWidth - watermarkWidth)) {
				$this.val(imageWidth - watermarkWidth);
			} // Если ввели больше, чем следует, то меняем на максимально допустимое

			watermark.css({
				'left' : $this.val() + 'px'
			})
		} //Позиционирование по X

		function _positionItFromInputY (event) {
			buttons.removeClass('active');//С сетки скинуть подветку, если заполняются инпуты

			var 
				$this = $(this);
			var 
				imageHeight = image.outerHeight(),
				watermarkHeight = watermark.outerHeight();


			_letterCheck($this);

			if ($this.val() > (imageHeight - watermarkHeight)) {
				$this.val(imageHeight - watermarkHeight);
			} // Если ввели больше, чем следует, то меняем на максимально допустимое

			watermark.css({
				'top' : $this.val() + 'px'
			})
		} //Позиционирование по У

		function _letterCheck (input) {
			var 
				value = input.val(),
		    	rep = /[-\.;":'a-zA-Zа-яА-Я]/; 

		    if (rep.test(value)) { 
		    	console.log('1')
		        input.val(value.replace(rep, ''));  
		        input.value = value; 
		    } 
		} // Удаляем буквы, которые вводит пользователь

		function _positionItFromArrows (event) {
			event.preventDefault();

			var
				$this = $(this),
				className = event.target.className.split(' ')[0],
				currentPosX = watermark.css('left'),
				currentPosXint = parseInt(currentPosX, 10),
				currentPosY = watermark.css('top'),
				currentPosYint = parseInt(currentPosY, 10),
				currentWidth = watermark.css('width'),
				currentHeight = watermark.css('height'),
				xInput = $('.position__controller_X-input'),
				yInput = $('.position__controller_Y-input'),
				step = 10;
				console.log(currentPosXint);


			if (className.indexOf('up') + 1) {

				if (className.indexOf('position__controller_X') + 1) {

					watermark.css('left', currentPosXint + step);
					xInput.val(+currentPosXint + step);
					//Кнопка up x
				} else if (className.indexOf('position__controller_Y') + 1) {
					
					watermark.css('top', currentPosYint + step);
					yInput.val(+currentPosYint + step);
					//Кнопка up y
				}

			} else if (className.indexOf('down') + 1) {

				if (className.indexOf('position__controller_X') + 1) {
					
					watermark.css('left', currentPosXint - step);
					xInput.val(+currentPosXint - step);
					//Кнопка down x
				} else if (className.indexOf('position__controller_Y') + 1) {
					
					watermark.css('top', currentPosYint - step);
					yInput.val(+currentPosYint - step);
					//Кнопка down y
				}
			}

			watermark.css({
				'height' : currentHeight,
				'width' : currentWidth
			})

			buttons.removeClass('active'); //и убираем подсветку кнопки

		}

		return {

			init: function() {
				console.log('Обычный режим позиционирования инициирован');
				_setUpListeners();
				xInput.show();
				yInput.show(); //Показываем инпуты X Y
				$('.dynamic').remove(); //Удалили все динамично созданное для замощения

				watermark.css({
					'height' : 'auto',
					'width' : 'auto',
					'margin-top' : 0,
					'margin-left' : 0
				})

			}
		}
})();



var TileMode = (function () {
	var mt, mr; 

	var
		grid = $('#grid'),
		buttons = grid.children().children(),
		image = $('.workspase__wotermark-image'),
		watermark = $('.workspase_wotermark-wrap'),
		xInput = $('.position__controller_X-input'),
		yInput = $('.position__controller_Y-input'),
		arrows = $('.position').find('a:not(.position__type-button)');

	var 
		inputMb, inputMr, gridMb, gridMr;

	function _setUpListeners () {
		$('#mb').on('change', _marginBottomIt);
		$('#mr').on('change', _marginRightIt);
		//arrows.on('click', _positionItFromArrows);
	}

	function _showHideBlocks () {
		var 
			inputMbMarkup = '<input type="text" value="00" class="position__controller_X-input dynamic" id="mb"/>',
			inputMrMarkup = '<input type="text" value="00" class="position__controller_Y-input dynamic" id="mr"/>',
			gridMbMarkup = '<div id="gridMb" class="gridMb dynamic"></div>',
			gridMrMarkup = '<div id="gridMr" class="gridMr dynamic"></div>';

		$('.dynamic').detach();

		inputMb = xInput.after(inputMbMarkup);
		inputMr = yInput.after(inputMrMarkup);

		gridMb = grid.append(gridMbMarkup);
		gridMr = grid.append(gridMrMarkup); 
		//Создали динамически все что нужно


		xInput.hide();
		yInput.hide(); //Приячем Инпуты Х У

		_tileIt();
	}


	function _tileIt () {
		var 
			clone = watermark.html();
			
			console.log(clone.length);

		var 
			imageWidth = image.outerWidth(),
			imageHeight = image.outerHeight(),
			watermarkWidth = watermark.children().outerWidth(),
			watermarkHeight = watermark.children().outerHeight();

		var 
			cols = Math.ceil(+imageWidth / +watermarkWidth),
			rows = Math.ceil(+imageHeight / +watermarkHeight),
			clonesToAddCount = (cols+2)*(rows+2);

		watermark.css({
			'height' : watermarkWidth*(rows+2)+150,
			'width' :  watermarkWidth*(cols+2)+150,
			'margin-top' : -(watermarkHeight),
			'margin-left' : -(watermarkWidth),
			'left' : 0,
			'top' : 0,
		});

		mt = +watermark.css('margin-top').replace('px','');
		ml = +watermark.css('margin-left').replace('px','');

		for (var i = 0;  i <= clonesToAddCount; i++) {
			watermark.append(clone);
			if (i>400) break;
		};


		$.each($('.workspase__wotermark-watermark:not(:first)'), function(index, val) {
			 $(this).addClass('dynamic');
		});

		console.log('Произведено ' + (+clonesToAddCount+1)  + ' клонирований(я) вотермарка для замощения');

		_setUpListeners();
	}

	function _marginBottomIt (event) {
		var 
			$this = $(this),
			watermarks = $('.workspase__wotermark-watermark');

		watermarks.css({
			'margin-bottom' : $this.val() + 'px'
		})

		watermark.css({
			'margin-top' : (mt - $this.val()) + 'px' 
		})
	}	

	function _marginRightIt (event) {
		var 
			$this = $(this),
			watermarks = $('.workspase__wotermark-watermark');

		watermarks.css({
			'margin-right' : $this.val() + 'px'
		})

		watermark.css({
			'margin-left' : (ml - $this.val()) + 'px'
		})
	}


	return {

		init: function() {
			console.log('Режим позиционирования "Замостить" инициирован');

			buttons.off('click');
			xInput.off('keyup change');
			yInput.off('keyup change');
			arrows.off('click'); // Убиваем события кнопок. Другой режим - другие события
			buttons.removeClass('active'); //и убираем подсветку кнопки
			_showHideBlocks();
			
			
		}
	}
})();




$(document).ready(function() {
	PosMode.init();
});