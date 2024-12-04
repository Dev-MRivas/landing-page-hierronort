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
  });