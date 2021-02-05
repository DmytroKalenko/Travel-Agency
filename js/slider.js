$(document).ready(function(){
    $(".slider2").slick({
     slidesToShow:3,  
     speed:2000,
     autoplay: true,
     autoplaySpeed: 1200, 
     varibleWidth: true,
    responsive:[
        {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              arrows:false,
              dots:true,
            }
          },

          {
            breakpoint: 967,
            settings: {
              slidesToShow: 2,
              arrows:false,
              dots:true,
            }
          },

          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
              arrows:false,
              dots:true,
            }
          },

          {
            breakpoint: 1441,
            settings: {
              slidesToShow: 4,
              arrows:false,
              dots:true,
            }
          },

    ]
    });
});