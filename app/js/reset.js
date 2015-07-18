$(document).ready(function() {
$('.controllers-form').on('reset', function resetFunction2(){
    var resetWatermark = $('#watermark__src-image').removeAttr("src");
    var resetPicture = $('#watermark__src-logo').removeAttr("src");
    PosMode._goToNormal();
});
}); 