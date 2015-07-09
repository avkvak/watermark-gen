var DRAGGABLE = (function () {
  var
       watermark = $('.generator-picture__watermark');

  return {
    init: function () {
      // хендлер для окна с возможностью драгабл
      $('.generator-picture__watermark').on('drag', function (e, ui) {
          // изменяет модель
          DRAGGABLE.updateModel(ui);
          // инпуты изменяются
          INPUTFIELD.setInput();
          // грид изменяется
          PLACEGRID.setClass();
      });

        $('.generator-picture__tile').on('drag', function (e, ui) {
            // изменяет модель при перетаскивании сетки 'замостить'
            DRAGGABLE.updateModel(ui);
        });
    },
    updateModel: function (ui) {
      if (typeof ui != "undefined") {
        model.coord.x = parseInt((ui.position.left).toFixed(0));
        model.coord.y = parseInt((ui.position.top).toFixed(0));
      }
    },

    // изменяет положение
    setWatermark: function (animation) {
      if (animation) {
        watermark.animate({top: model.coord.y, left: model.coord.x}, {duration: 500, queue: false});
      } else {
        watermark.css({top: model.coord.y, left: model.coord.x});
      }
    },
    // изменяет опасити
    setOpacity: function () {
      watermark.css('opacity', model.alpha);
    },

    disable: function () {
      $('.generator-picture__watermark').off('drag');
    }
  }
})();