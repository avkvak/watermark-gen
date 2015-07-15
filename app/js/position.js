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

	function _goToNormal () {
		console.log('Обычный режим позиционирования');
		tile.removeClass(tileActive);
		normal.addClass(normalActive);
		contX.text('X').css('font-family', 'Roboto-Light');
		contY.text('Y').css('font-family', 'Roboto-Light');
		block.removeClass('tile');
	} // Тут описываем все действия по переходу в нормальный режим и запускаем функцию нормального режима

	function _goToTile () {
		console.log('Режим позиционирования "Замостить"');
		normal.removeClass(normalActive);
		tile.addClass(tileActive);
		contX.text('↕').css('font-family', 'colibri');
		contY.text('↔').css('font-family', 'colibri');
		block.addClass('tile');
	} // Тут описываем все действия по переходу в режим замостить и запускаем функцию режима.


    return {
	    
	    init : function() {
			console.log('PosMode initiated');
			_setUpListeners();
			_goToNormal(); //Как только мы загрузились, мы сразу же в нормальном режиме.
	    }
	}

}());




$(document).ready(function() {
	PosMode.init();
});