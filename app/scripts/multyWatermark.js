var TILE = (function () {
    // инициализируем глобальные переменные
    var tile = $('.generator-picture__tile'),
        watermark,
        image,
        watermarkWidth = 0,
        watermarkHeight,
        watermarkSrc,
        imageWidth = 0,
        imageHeight;

    return {
        initImage: function () {
            // получаем основную картинку и её размеры
            image = $('.generator-picture__img'),
            imageWidth = image.width();
            imageHeight = image.height();
            TILE.initTile()


        },
        initWatermark: function() {
            // получаем марку и её размеры
            watermark = $('.generator-picture__watermark'),
            watermarkWidth = watermark.width();
            watermarkHeight = watermark.height();
            watermarkSrc = watermark.attr('src');
            TILE.initTile()
        },
        initTile: function() {
            var $tile__image = $('.tile__image');
            // удаляем предыдущий мост и создаем новую сетку 'замостить'
            $('.generator-picture__tile-row').remove();
            $tile__image.remove();

            if (watermarkWidth > 0 && imageWidth > 0) {
                var itemInRow = Math.floor(imageWidth / watermarkWidth) + 1,
                    rows = Math.floor(imageHeight / watermarkHeight) + 1;
                for (var i = 0; i < rows+2; i++) {
                    tile.append("<div class='generator-picture__tile-row'>");
                }
                for (i = 0; i < itemInRow+2; i++) {
                    $('.generator-picture__tile-row').append("<img src='" + watermarkSrc + "' class='tile__image' width='"+ watermarkWidth +"' height='"+ watermarkHeight +"'>");
                }
            }
        },
        // скрываем/показываем сетку замости
        showHide: function () {
            if (model.gridType === 'multi') {
                watermark.hide();
                tile.show();

            }
            else {
                watermark.show();
                tile.hide();
            }
        },
        // изменяем прозрачность
        changeOpacity: function () {
            tile.css('opacity', model.alpha);
        },
        // изменяем вертикальный отступ
        changeVerticalGutter: function () {
            var tileRow = $('.generator-picture__tile-row');
            tileRow.css({marginBottom: model.margins.x});
        },
        // изменяем горизонтальный отстпуп
        changeHorizontalGutter: function () {
            var tileImage = $('.tile__image');
            tileImage.css({marginRight: model.margins.y});
        }
    }
})();