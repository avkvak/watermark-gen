var imgDownload = (function () {

    $('#buttons-submit').click(function(e){
        e.preventDefault();

        var data = {
            'name': $('#input-image').val(),
            'image': $('#watermark__src-image').attr('src'),
            'watermark': $('#watermark__src-logo').attr('src'),
            'opacity': $('#opacity-control').val()
        };

        $.ajax({
            url:"tmpl/watermark.php",
            data:data,
            type:'POST',
            success:function(data){
                if( data ) {
                    console.log(data);
                }
            }
        });

    });

}());

$(document).ready(function() {
    imgDownload;
});