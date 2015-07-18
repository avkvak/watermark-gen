  $(function () {
        $("#watermark-opacity").draggable({
            opacity: 0.5
        });
        $("#slider").slider({
            range: "min",
            value: 0.5,
            min: 0.1,
            max: 1,
            step: 0.01,
            slide: function (event, ui) {
               // $("#info").html("dragging opacity : " + ui.value);
                $("#watermark-opacity").draggable("option", "opacity", ui.value);
            }
        });
    });