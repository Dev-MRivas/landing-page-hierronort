$(document).ready(function () {
    $(".promociones-carousel").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1026,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
  
    // Actualiza AOS cada vez que cambie el slide
    $('.promociones-carousel').on('afterChange', function(event, slick, currentSlide) {
        AOS.refresh(); // Refresca las animaciones
    });
  
    // Inicializa AOS
    AOS.init({
        offset: 120,
        delay: 0,
        duration: 700,
        easing: 'ease',
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom',
    });
  });
  