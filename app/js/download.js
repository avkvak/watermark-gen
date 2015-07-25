var imgDownload = (function () {

    $('.controllers-form').on('submit', function(e){
        e.preventDefault();

        var data = {
            'name': $('#input-image').val(),
            'image': $('#watermark__src-image').attr('src'),
            'watermark': $('#watermark__src-logo').attr('src'),
            'opacity': $('#opacity-control').val(),
            'normalX': $('#normalX').val(),
            'normalY': $('#normalY').val()
        };

        $.ajax({
            url:"tmpl/watermark.php",
            data:data,
            type:'POST',
            success:function(response){
                    console.log('watermark created and downloaded');
                    window.location  = 'http://wg.dev/app/tmpl/download.php?file=' + response;
            }
        });

    });

}());

$(document).ready(function() {
    imgDownload;
});