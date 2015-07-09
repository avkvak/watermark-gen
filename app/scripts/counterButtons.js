var COUNTERBTN = (function () {
  var
      arrowsButtons = $('.crd-arrow-list__item'),
      step = 1;
  return {
    init: function () {
      // хендлер для стрелок
      arrowsButtons.on('mousedown', function () {
          var _this = $(this);
              counterTimeout = setInterval(function () {
                  // функция в модуле стрелок, она изменяет модель
                  COUNTERBTN.counterBtnModelChange(_this);
                  // метод модуля инпутов, он сравнивает себя с моделью и обновляется
                  INPUTFIELD.setInput();
                  // метод модуля уотермарк, он сравнивает себя с остальным
                  DRAGGABLE.setWatermark();
                  // метод модуля грид, он сравнивается сам с моделью
                  PLACEGRID.setStyle();
                  PLACEGRID.setClass();
                  // изменяем отступы в сетки 'замостить'
                  TILE.changeHorizontalGutter();
                  TILE.changeVerticalGutter();
              }, 70);

          $(this).on('mouseup', function () {
              clearInterval(counterTimeout);
          });
          $(this).on('mouseout', function () {
              clearInterval(counterTimeout);
          });
      });
      arrowsButtons.each(function () {
        $(this).removeClass('crd-arrow-list__item--up-no-hover crd-arrow-list__item--down-no-hover');
      });
    },
    // изменяет модель при нажатии на кнопку
    counterBtnModelChange: function (btn) {
      var
          axis = btn.hasClass('crd-arrow-list__item--x') ? 'x' : 'y',
          // для проверки что значения не уйдут ниже единицы
          testValueMin = 0,
          // для рассчетов точек за которые вотермарк не должен заходить
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
          },

          testValue = 0;
      

      if (model.gridType === 'mono') {
        testValue = model.coord[axis] + (btn.hasClass('crd-arrow-list__item--up') ? step : -step);
        if ((testValue >= testValueMin) && (testValue <= testValueMax[axis])) {
          model.coord[axis] = testValue;
        }
      } else {
        // скидываем значение в переменную чтобы проверить ее величину перед обновлением модели
        testValue = model.margins[axis] + (btn.hasClass('crd-arrow-list__item--up') ? step : -step);
        if ((testValue >= testValueMin) && (testValue <= testValueMax[axis])) {
          model.margins[axis] = testValue;
        }
      }
    },
    deactivate: function () {
      arrowsButtons.off('mousedown');
      $('.crd-arrow-list__item--up').each(function () {
        $(this).addClass('crd-arrow-list__item--up-no-hover');
      });
      $('.crd-arrow-list__item--down').each(function () {
        $(this).addClass('crd-arrow-list__item--down-no-hover');
      });
    }
  }
})();