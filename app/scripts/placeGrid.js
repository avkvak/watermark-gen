var PLACEGRID = (function () {
    var
    // состоянии, которое не позволяет делать дом манипуляции если нажать на свитч, который
    // и так выбран
        state = '',

    // линия на гриде
        gridLines = $('.multi-line'),

    // квадрат на гриде
        squareOfGrid = $('.square-td'),

    // стрелки или буквы возле полей инпута
        inputLabels = $('.crd-axis'),

    // изменяет ширину линий грида
        changeLineWidth = function () {
            var
                gridSide = 101,
                lineWidthVertical = model.margins.y,
                lineWidthHorizontal = model.margins.x,
            // вычисляем центр
                leftPosition = (gridSide - lineWidthVertical) / 2,
                topPosition = (gridSide - lineWidthHorizontal) / 2;

            $('.multi-line.position-vertical').css({width: lineWidthVertical, left: leftPosition});
            $('.multi-line.position-horizontal').css({height: lineWidthHorizontal, top: topPosition});
        },

    // меняет квадраты на линии
        squareToLine = function () {
            // показываем линии
            gridLines.each(function () {
                $(this).show();
            });
            // отключаем возможности показа активного квадрата
            $('.square-td--active').removeClass('square-td--active');
            // выключаем ховер
            squareOfGrid.each(function () {
                $(this).removeClass('square-td--hover-enable');
            });
            // отключаем возможность выбора положения активного квадрата
            squareOfGrid.off('click');
        },

    // меняет линии на квадраты
        lineToSquare = function () {
            // подключаем ховер по квадратам
            squareOfGrid.each(function () {
                $(this).addClass('square-td--hover-enable');
            });
            // прячем линии
            gridLines.each(function () {
                $(this).hide();
            });


        },

    // меняет названия полей ввода с букв на стрелки
        changeLabels = function (mode) {
            if (mode === 'mono') {
                inputLabels.each(function () {
                    inputLabels.addClass('crd-axis--letter');
                    inputLabels.removeClass('crd-axis--arrow');
                })
            } else {
                inputLabels.each(function () {
                    inputLabels.addClass('crd-axis--arrow');
                    inputLabels.removeClass('crd-axis--letter');
                })
            }
        },
        
        // находит порядковый номер окна, на основании модели
        getActiveGridClass = function () {
          // достает величины
          var
              x = model.coord.x,
              y = model.coord.y,
              classNum = 0,

              watermark = $('.generator-picture__watermark'),
              images = $('.generator-picture__image'),
              imagesWidth = images.width(),
              imageHalfWidth = imagesWidth / 2,
              watermarkWidth = watermark.width(),
              watermarkHalfWidth = watermarkWidth/ 2,
              imageHeight = images.height(),
              imageHalfHeight = imageHeight / 2,
              watermarkHeight = watermark.height(),
              watermarkHalfHeight = watermarkHeight/ 2,
              centerX = imageHalfWidth-watermarkHalfWidth,
              centerY = imageHalfHeight-watermarkHalfHeight,
              gridPosArr = [
                  [0, 0],
                  [0, centerX],
                  [0, imagesWidth-watermarkWidth],
                  [centerY, 0],
                  [centerY, centerX],
                  [centerY, imagesWidth-watermarkWidth],
                  [imageHeight-watermarkHeight, 0],
                  [imageHeight-watermarkHeight, centerX],
                  [imageHeight-watermarkHeight, imagesWidth-watermarkWidth]
              ];

          // уровень по высоте
          if (y < centerY) {
            classNum += 0;
          } else if ((y >= centerY) && (y < (imageHeight - watermarkHeight))) {
            classNum += 3;
          } else {
            classNum += 6;
          }

          // уровень по горизонтали
          if (x < centerX) {
            classNum += 0;
          } else if ((x >= centerX) && (x < (imagesWidth - watermarkWidth))) {
            classNum += 1;
          } else {
            classNum += 2;
          }

          return classNum;

        },

        setClass = function () {
          // ставит активность на класс
          // на основании модели
          if (model.gridType === 'mono') {
            $('.square-td--active').removeClass('square-td--active');
            squareOfGrid.eq(getActiveGridClass()).addClass('square-td--active');
          }
        },

        changeGrid = function (mode) {
            if (mode === 'mono') {
                // запускает функцию из линии в квадрат
                lineToSquare();
                // подставить класс на правильный квадрат
                // в соответствии с моделью
                setClass();
            } else {
                // запускает функцию из квадрата в линии
                squareToLine();
            }
        };

    return {
        init: function () {
            state = 'mono';
            lineToSquare();
            setClass();

            // хендлер для грида
            $('.generator-position__square').on('click', '.square-td', function () {
              // изменяет модель
              // только если моно режим
              if (model.gridType === 'mono') {
                 PLACEGRID.updateModel($(this));
              }
              // ставит класс
              PLACEGRID.setClass();
              // заставляет обновиться инпут
              INPUTFIELD.setInput();
              // заставляет обновиться уотермарк
              DRAGGABLE.setWatermark(true);
            });

        },

        // устанавливает активный класс, сообразно модели
        setClass: setClass,

        // меняет стиль с мульти на моно и наоборот
        setStyle: function () {
            var
                mode = model.gridType;
            // не запускать, если нажали по активной кнопке свитча
            if (mode !== state) {
                state = mode;
                changeLabels(mode);
                changeGrid(mode);
            }
            if (state === 'multi') {
                // обновлять стиль только в районе толщины линий
                changeLineWidth();
            }
        },
        updateModel: function (square) {
            var
            // Размеры элементов
                watermark = $('.generator-picture__watermark'),
                images = $('.generator-picture__image'),
                imagesWidth = images.width(),
                imageHalfWidth = imagesWidth / 2,
                watermarkWidth = watermark.width(),
                watermarkHalfWidth = watermarkWidth/ 2,
                imageHeight = images.height(),
                imageHalfHeight = imageHeight / 2,
                watermarkHeight = watermark.height(),
                watermarkHalfHeight = watermarkHeight/ 2,
                centerX = imageHalfWidth-watermarkHalfWidth,
                centerY = imageHalfHeight-watermarkHalfHeight,
                gridPosArr = [
                    [0, 0],
                    [0, centerX],
                    [0, imagesWidth-watermarkWidth],
                    [centerY, 0],
                    [centerY, centerX],
                    [centerY, imagesWidth-watermarkWidth],
                    [imageHeight-watermarkHeight, 0],
                    [imageHeight-watermarkHeight, centerX],
                    [imageHeight-watermarkHeight, imagesWidth-watermarkWidth]
                ],

                index = $('.square-td').index(square);
            // toFixed чтобы не было значения в полпикселя
            model.coord.x = parseInt(gridPosArr[index][1].toFixed(0));
            model.coord.y = parseInt(gridPosArr[index][0].toFixed(0));
        },
        deactivate: function () {
          lineToSquare();
          $('.square-td--active').removeClass('square-td--active');
          $('.square-td').each(function () {
            $(this).removeClass('square-td--hover-enable');
          });
          $('.generator-position__square').off('click');
        }
    }
})();