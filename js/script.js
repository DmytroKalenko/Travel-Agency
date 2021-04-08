$(document).ready(function() {
    $(".slider").slick({
        slidesToShow: 7,
        centerMode: true,
        focusOnSelect: true,
        waitForAnimate: true,
        responsive: [{
                breakpoint: 2500,
                settings: {
                    slidesToShow: 7,
                }
            },

            {
                breakpoint: 1439,
                settings: {
                    slidesToShow: 5,
                }
            },

            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 200,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                    speed: 1000,
                    autoplay: false,
                    autoplaySpeed: 1000,
                    centerMode: true,
                    waitForAnimate: false,
                }
            }
        ],
        mobileFirst: true
    });
});




var mixer = mixitup('.slots', {
    animation: {
        effects: 'fade scale(0.7)'
    },
});

///Add__Button__UP
var UPbtn = $('.up-botton')
$(window).on("scroll", function() {
    if ($(this).scrollTop() >= 20) {
        UPbtn.fadeIn();
    } else {
        UPbtn.fadeOut();
    }
});
UPbtn.click(function() {
    $("html, body").animate({ scrollTop: 0 }, 100)
});


///Add_backgroundcolot_to_top_nav


const TopMenu = $('.header2');
const screenWidth = window.screen.width;
$(window).on("scroll", function() {
    if ($(this).scrollTop() >= 20 && screenWidth < 688) {
        TopMenu.fadeIn();
    } else {
        TopMenu.fadeOut();
    }
});

//add_noScrool__when_open_burger_menu

// const BurgerMenu = document.querySelector('.header__burger');