$(document).ready(function() {
    $('#Toggle_Nav_Icon').click(function() {
        $('#Responsive_Nav_Wrapper').slideToggle(1500);
    });
    $('#Notification_Button').click(function() {
        $('#NT_Bar').slideUp(1500);
    });
    $('.your-class').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        arrows: true,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }, {
                breakpoint: 369,
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