var imgUpload = (function () {
    var url = 'uploads/';
    $('#input-upload-img').fileupload({
        url: url,
        dataType: 'json',
        done: function (e, data) {
            $.each(data.result.files, function (index, file) {
                $('#watermark__src-image').attr('src', 'uploads/files/' + file.name);
                $('#input-image').attr('value', file.name);
            });
        }
    });
    $('#input-upload-watermark').fileupload({
        url: url,
        dataType: 'json',
        done: function (e, data) {
            $.each(data.result.files, function (index, file) {
                $('#watermark__src-logo').attr('src', 'uploads/files/' + file.name);
                $('#input-watermark').attr('value', file.name);
            });
        }
    });

}());

$(document).ready(function() {
    imgUpload;
});