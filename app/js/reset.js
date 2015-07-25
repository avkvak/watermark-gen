$(document).ready(function() {
$('.controllers-form').on('reset', function resetFunction2(){
    $('#watermark__src-image').attr({"src": "img/image.jpg"});
    $('#watermark__src-logo').attr({"src": "img/watermark.png"});
    $('.workspase__wotermark-watermark').css('opacity','1');
  
   
});
});