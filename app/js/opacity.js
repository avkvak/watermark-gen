$(document).ready(function() {
    $('#opacity-control').change(function() {
        var opasityw = $('#opacity-control').val();
        var watermark = $('.workspase__wotermark-watermark').css({
            'opacity': +($('#opacity-control').val())
        });
    });
});
