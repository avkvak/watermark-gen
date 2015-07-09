var SLIDER = (function () {
  return {
    init: function () {
      // хендлер для слайдера
      $('.generator-transparency__slider').on('slide', function (e, ui) {
          // обновляет модель когда перемещается
          SLIDER.updateModel(ui);
          // дергает обновление вотермарка
          DRAGGABLE.setOpacity();
          // изменяем прозрачность сетки 'замостить'
          TILE.changeOpacity();
      });
      $('.generator-transparency__slider').slider({
        min: 0,
        max: 100,
        value: model.alpha * 100,
        range: 'min',
        disabled: false
      });
      $('.ui-slider-handle').addClass('ui-slider-handle--hover');
    },
    updateModel: function (ui) {
      model.alpha = ui.value/100;
    },
    // слайдер обновляется за счет модели
    setSlider: function() {
      $('.generator-transparency__slider').slider('value', model.alpha * 100);
    },
    deactivate: function () {
      $('.generator-transparency__slider').slider({
        min: 0,
        max: 100,
        value: model.alpha * 100,
        range: 'min',
        disabled: true
      });

      $('.ui-slider-handle').removeClass('ui-slider-handle--hover');
    }
  }
})();