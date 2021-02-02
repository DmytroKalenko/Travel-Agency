$(document).ready(function(){
    $(".slider2").slick({
     slidesToShow:2,  
     speed:2000,
     autoplay: true,
     autoplaySpeed: 1200, 
     varibleWidth: true,
    responsive:[
        {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              arrows:false,
              dots:true,
            }
          },
    ]
    });
});