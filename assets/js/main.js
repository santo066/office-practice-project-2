//tab section 
$(document).ready(function () {
    $('.clickme a').click(function () {
        $('.clickme a').removeClass('activelink');
        $(this).addClass('activelink');
        var tagid = $(this).data('tag');
        $('.list').removeClass('active').addClass('hide');
        $('#' + tagid).addClass('active').removeClass('hide');
    });
});
//popup
$('.view').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
});

//progress
$('.circlechart').circlechart();

//counter
jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

