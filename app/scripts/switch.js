var SWITCH = (function () {

  return {
    init: function () {
      // хендлер для переключения режимов мульти/моно
      $('.switch').on('click', function () {
          // изменяем модель
          SWITCH.changeSwitchInModel($(this));
          // изменяет свой вид
          SWITCH.changeStyle($(this));
          // инпут должен обновиться
          INPUTFIELD.setInput();
          // грид должен обновиться
          PLACEGRID.setStyle();
          //показываем/скрываем сетку 'замостить'
          TILE.showHide();
      });
      $('.switch__mono').addClass('switch--active switch__mono--hover');
      $('.switch__multi').addClass('switch__multi--hover');

    },
    // изменяет значение gridType
    changeSwitchInModel: function (switchPosition) {
      if (switchPosition.hasClass('switch__mono')) {
        model.gridType = 'mono';
      } else {
        model.gridType = 'multi';
      }
    },
    // по клику меняет класс активности
    changeStyle: function (switchUnderClick) {
      $('.switch--active').removeClass('switch--active');
      switchUnderClick.addClass('switch--active');
    },
    // изменяет класс по обращению к модели
    setSwitch: function () {
      $('.switch--active').removeClass('switch--active');
      if (model.gridType === 'mono') {
        $('.switch__mono').addClass('switch--active');
      } else {
        $('.switch__multi').addClass('switch--active');
      }
    },
    disable: function () {
      $('.switch').each(function () {
        $(this).removeClass('switch__multi--hover switch__mono--hover switch--active');
      });
      $('.switch').off('click');
    }

  };
})();