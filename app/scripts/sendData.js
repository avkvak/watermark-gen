var SENDDATA = (function ($) {
    var validateData = function () {
        if ($.trim(model.files.image).length === 0 || $.trim(model.files.watermark).length === 0) {
            return false;
        }
        return true;
    };

    return {
        send: function () {
            if (validateData()) {
                model.tmpW = $('.generator-picture__img').width();
                model.tmpH = $('.generator-picture__img').height();
                PRELOADER.show();
                $("iframe").attr("src",'/?download=1&data=' + JSON.stringify(model)).ready(function () {
                    PRELOADER.hide();
                });
            } else {
                alert('Ошибка при отправке данных');
            }
        }
    };
})(jQuery);