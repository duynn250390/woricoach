const $ = window.$;
function haft_div(num) {
    return num / 2;
}
$(window).scroll(function () {
var main_header = $('.main_header').height();
    var windowScroll = $(window).scrollTop();
    if (windowScroll >= main_header) {
        $('.main_header').addClass('fix_menu_header');
        $('.hide_logo').show();
        $('.bulet_menu i').css('color', '#8e6e7b');
        $('.show_logo').hide();
    } else {
        $('.main_header').removeClass('fix_menu_header');
        $('.hide_logo').hide();
        $('.show_logo').show();
        $('.bulet_menu i').css('color', '#fff');
    }
});

$(document).ready(function () {
    menu_respontive();
    $('.slide_items').slick({
        prevArrow: '<div class="slick-prev slick-arrow"></div>',
        nextArrow: '<div class="slick-next slick-arrow"></div>',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(window).resize(function () {
        menu_respontive();
    });
});

function menu_respontive() {
    var win_screen = $(window).width();
    var HTML_main_menu = $('.main_menu').html();
    var bulet_menu = $('.bulet_menu');
    var menu_re = $('.menu_re');
    if (win_screen < 980) {
        $('.box_menu').html(HTML_main_menu);
        bulet_menu.click(function () {
            $('.menu_re').css('left', 0);
            $('.ovelay_menu').css({ "left": '0', "opacity": 1, "visibility": "visible" });
        });
    } else {
        $('.ovelay_menu').css({ "left": 0, "opacity": 0, "visibility": "hidden" });
        $('.menu_re').css('left', '-270px');
    }
    $('.ovelay_menu').click(function () {
        $('.ovelay_menu').css({ "left": 0, "opacity": 0, "visibility": "hidden" });
        $('.menu_re').css('left', '-270px');
    });
}