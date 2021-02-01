
$(document).ready(function(){
    $(".slider").slick({
        slidesToShow:7,   
     speed:1200,
     autoplay: true,
     autoplaySpeed: 1000,  
     centerMode: true,
     focusOnSelect: true, 
     waitForAnimate: false,



     responsive: [
        {
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
          breakpoint: 411,
          settings: {
            slidesToShow: 1,
         
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
      mobileFirst:true


    });
});