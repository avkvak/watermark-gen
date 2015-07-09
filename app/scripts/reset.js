var RESET = (function () {
    return {
        init: function () {
            // сброс
            $('.button-reset').on('click', function(){
                RESET.resetApp();
                INPUTFIELD.setInput();
                // сбрасывает свитч до моно
                SWITCH.setSwitch();
                // сбрасывает положение слайдбара до среднего положения (50%)
                SLIDER.setSlider();
                // вотермарк изменяется
                DRAGGABLE.setWatermark(true);
                DRAGGABLE.setOpacity();
                // метод для инпут файлов чтобы сбрасывал
                // ...
                // грид должен изменяться до первоначального значения
                PLACEGRID.setStyle();
                PLACEGRID.setClass();
                // watermark становится mono
                TILE.showHide();
                TILE.changeVerticalGutter();
                TILE.changeHorizontalGutter();

            });
        },
        resetApp: function () {
            model.coord.x = 0;
            model.coord.y = 0;
            model.gridType = 'mono';
            model.alpha = .5;
            model.margins.x = 0;
            model.margins.y = 0;
        }
    }
})();