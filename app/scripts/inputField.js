var INPUTFIELD = (function () {
    var
        inputWindow = $('.crd-window__num'),
        windowX = $('.crd-window__num--x'),
        windowY = $('.crd-window__num--y'),
        variant = 'coord',

    // проверяет чтобы ввод при мульти-режиме
    // было >= 0
        validInput = function (val, field) {

          var
            // рассчеты для максимального значения
            backImage = $('.generator-picture__img'),
            wattermark = $('.generator-picture__watermark'),
            wattermarkWidth = wattermark.width(),
            wattermarkHeight = wattermark.height(),
            backImageWidth = backImage.width(),
            backImageHeight = backImage.height(),
            rightMax = parseInt((backImageWidth - wattermarkWidth).toFixed(0)),
            bottomMax = parseInt((backImageHeight - wattermarkHeight).toFixed(0)),

            // значение координат за которые не должен заходить вотермарк
            testValueMax = {
              'x': rightMax,
              'y': bottomMax
            };

            if (isNaN(val)) {
                return 0;
            }

            if (val < 0) {
                return 0;
            }
            if (val > testValueMax[field]) {
                return testValueMax[field];
            }
            return val;

        },

    // изменяем координаты или величину марджина?
        checkVariant = function () {
            if (model.gridType === 'mono') {
                variant = 'coord';
            } else {
                variant = 'margins';
            }
        };

    return {
        init: function () {
            inputWindow.each(function () {
                $(this).removeAttr('disabled');
            });

            windowX.val(model[variant]['x']);
            windowY.val(model[variant]['y']);

            inputWindow.on('keydown', function (e) {
                var
                    key = e.keyCode;

                if (key === 38) {
                    INPUTFIELD.keyUpdateModel($(this), 1);
                } else if (key === 40) {
                    INPUTFIELD.keyUpdateModel($(this), -1);
                }
                INPUTFIELD.setInput();
                PLACEGRID.setStyle();
                PLACEGRID.setClass();
                DRAGGABLE.setWatermark();
                // изменяем отступы в сетки 'замостить'
                TILE.changeHorizontalGutter();
                TILE.changeVerticalGutter();
            });

            // хендлер для ввода с клавиатуры прямо в инпуты
            inputWindow.on('input', function () {
                // изменяем модель
                INPUTFIELD.updateModel($(this));
                // обновляем инпут
                INPUTFIELD.setInput();
                // обновляем грид
                PLACEGRID.setStyle();
                PLACEGRID.setClass();
                // обновляем вотермарк
                DRAGGABLE.setWatermark(true);
            });

        },
        setInput: function () {
            checkVariant();
            windowX.val(model[variant]['x']);
            windowY.val(model[variant]['y']);
        },
        updateModel: function () {
            checkVariant();
            model[variant]['x'] = validInput(parseInt(windowX.val()), 'x');
            model[variant]['y'] = validInput(parseInt(windowY.val()), 'y');
        },
        keyUpdateModel: function (inpWin, direction) {
            checkVariant();
            var
                coordination = inpWin.hasClass('crd-window__num--x') ? 'x' : 'y';

            model[variant][coordination] = validInput((model[variant][coordination] += direction), coordination);
        },
        deactivate: function () {
            inputWindow.each(function () {
                $(this).attr('disabled', true);
            });
            windowX.val('');
            windowY.val('');
        }
    }
})();