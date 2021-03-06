var imgUpload = (function () {
    var url = 'uploads/';
    var uploadImg = $('#input-upload-img');
    var uploadWatermark = $('#input-upload-watermark');

    uploadImg.fileupload({
        url: url,
        dataType: 'json',
        done: function (e, data) {
            $.each(data.result.files, function (index, file) {
                $('#watermark__src-image').attr('src', 'uploads/files/' + file.name);
                $('#input-image').attr('value', file.name);
            });
            PosMode.init(); // Перекидываем в обычный режим, иначе жесть
            uploadWatermark.removeAttr('disabled')
        }
    });
    uploadWatermark.fileupload({
        url: url,
        dataType: 'json',
        done: function (e, data) {
            $.each(data.result.files, function (index, file) {

                $('#watermark__src-logo').attr('src', 'uploads/files/' + file.name);
                $('#input-watermark').attr('value', file.name);

                function realImgDimension(img) {
                    var i = new Image();
                    i.src = img.src;
                    return {
                        naturalWidth: i.width,
                        naturalHeight: i.height
                    };
                }
                var myImage = document.getElementById('watermark__src-logo');
                myImage.addEventListener('load', function() {
                    var realSize = realImgDimension(this);
                    $('.workspase_wotermark-wrap').width(realSize.naturalWidth).height(realSize.naturalHeight);
                });

            });
            PosMode.init(); // Перекидываем в обычный режим, иначе жесть
        }
    });

}());

$(document).ready(function() {
    imgUpload;
});