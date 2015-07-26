var Share = (function() {

    var
        purl = "http://av.kvak.tmweb.ru/",
        title = document.title,
        text = document.querySelector('meta[name="description"]').content,
        img = purl + $('.workspase__uploud-image').attr('src');

    function addEventListener() {
        $('#fb').on('click', fb);
        $('#tw').on('click', tw);
        $('#vk').on('click', vk);      
    }

    function fb(e) {
        e.preventDefault();
        var url = 'http://www.facebook.com/sharer.php?s=100';
        url += '&p[title]=' + encodeURIComponent(title);
        url += '&p[summary]=' + encodeURIComponent(text);
        url += '&p[url]=' + encodeURIComponent(purl);
        url += '&p[images][0]=' + encodeURIComponent(img);
        popup(url);
    }
    function tw(e) {
        e.preventDefault();
        var url = 'http://twitter.com/share?';
        url += 'text=' + encodeURIComponent(title);
        url += '&url=' + encodeURIComponent(purl);
        url += '&counturl=' + encodeURIComponent(url);
        popup(url);
    }
      
    function vk(e) {
        e.preventDefault();
        var url = 'http://vk.com/share.php?';
        url += 'url=' + encodeURIComponent(purl);
        url += '&title=' + encodeURIComponent(title);
        url += '&description=' + encodeURIComponent(text);
        url += '&image=' + encodeURIComponent(img);
        url += '&noparse=true';
        popup(url);
    }
      
    function popup(url) {
        var shareWindowWidth = 650,
            shareWindowHeight = 500,
            marginLeft = screen.availWidth / 2 - shareWindowWidth / 2,
            marginTop = screen.availHeight / 2 - shareWindowHeight / 2;
        window.open(url, '_blank', 'toolbar=0,status=0,width=650,height=500,left=' + marginLeft + ', top=' + marginTop);
    }

    return {
        init: function() {
            addEventListener();
        }
    };
}());


$(document).ready(function() {
    Share.init();   
});