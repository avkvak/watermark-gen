var imgDownload = (function () {

    $('.controllers-form').on('submit', function(e){
        e.preventDefault();

        var defObj,
            ajaxLoader = '<div id="ajaxloader"></div>';

        var markup = '<div id="alert" class="alert"><h4> Поздравляем! </h4> <p> Вы успешно наложили водяной знак на картинку! </p>';
            markup += '<p class="last"> В случае, если браузер не предложил Вам сохранить результат,';
            markup += ' Вы можете сохранить его, просто нажав правой кнопкой мышки по изображению слева';
            markup += ' и выбрав пункт "Сохранить как..."</p>';
            markup += ' <small>Спасибо за использование нашего сервиса =) </small></div>';

        var data = {
            'name': $('#input-image').val(),
            'image': $('#watermark__src-image').attr('src'),
            'watermark': $('#watermark__src-logo').attr('src'),
            'opacity': $('#opacity-control').val(),
            /*'normalX': $('#normalX').val(),
            'normalY': $('#normalY').val(),*/
            'positionsArray': PosMode.positions(), //Массив
            'positionsString': PosMode.positions().join(',') //Строка
        };

        defObj = $.ajax({
            url:"tmpl/watermark.php",
            data:data,
            type:'POST'
        })
        .always(function() {
            $('.workspase__uploud-image').replaceWith(ajaxLoader);
        })
        .success(function(response){
                    console.log('watermark created and downloaded');
                    result  = 'tmpl/download.php?file=' + response;
                    $('#ajaxloader').replaceWith('<img class="workspase__uploud-image" src="' + result +'"/>');
                    $('.controllers').append(markup);
                    $('.sidebar-social__like').fadeIn('slow');
                    $('#alert').fadeIn('slow', function() {
                        $('body').append('<iframe src="' + result + '" style="width:1px;height:1px;visibility:hidden"></iframe>');
                    });;
        });   
    });

}());

$(document).ready(function() {
    imgDownload;
});