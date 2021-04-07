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

var mixer = mixitup('.slots');

///Add__Button__UP
var UPbtn = $('.up-botton')
$(window).on("scroll", function() {
    if ($(this).scrollTop() >= 20) {
        UPbtn.fadeIn();
    } else {
        UPbtn.fadeOut();
    }
})
UPbtn.click(function() {
    $("html, body").animate({ scrollTop: 0 }, 100)
});