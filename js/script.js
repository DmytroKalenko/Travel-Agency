
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
          breakpoint: 200,
          settings: {
          slidesToShow: 1,
          arrows:false,
          dots:true,
          speed:1000,
          autoplay: false,
          autoplaySpeed: 1000,  
          centerMode: true,
          waitForAnimate: false,
          }
        }
      ],
        mobileFirst:true
    });
});