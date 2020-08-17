$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.menu__body').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


$(document).ready(function() {
    $('.slider__body').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});

function ibg() {

    $.each($('.ibg'), function(index, val) {
        if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
        }
    });
}

ibg();

var $page = $('html, body');
$('a[href*="#content"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

jQuery("document").ready(function($){
 
    var nav = $('.header');
 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 136) {
            nav.addClass("header__active");
        } else {
            nav.removeClass("header__active");
        }
    });
 
});

