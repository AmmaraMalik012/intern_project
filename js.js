$(document).ready(function() {
    $('#Toggle_Nav_Icon').click(function() {
        $('#Responsive_Nav_Wrapper').slideToggle(1500);
    });
    $('#Notification_Button').click(function() {
        $('#NT_Bar').slideUp(1500);
    });
    $('.your-class').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
});
// Slick

// $('.Slider_Section').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     adaptiveHeight: true
// });