var PRELOADER = (function () {
    var $preloader = $('.preloader');
    return {
        show: function () {
            $preloader.fadeIn(300);
        },
        hide: function () {
            $preloader.fadeOut(400);
        }
    }
})();