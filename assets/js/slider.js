
$('.slider-for').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    asNavFor: '.slider-for',
    arrows: false,
    autoplay: true,
    centerMode: true,
    infinite: true,
    dots: true,
    rows: 0,
    slidesToShow: 3,
    vertical: true,
    verticalSwiping: true,
    responsive: [
    {
        breakpoint: 992,
        settings: {
          vertical: false,
        }
    },
    {
      breakpoint: 768,
      settings: {
        vertical: false,
      }
    },
    {
      breakpoint: 580,
      settings: {
        vertical: false,
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 380,
      settings: {
        vertical: false,
        slidesToShow: 2,
      }
    }
    ]
});

// Slick Scroll
jQuery(function () {
    const slider = jQuery(".slider-nav");
    slider;
  
    slider.on("wheel", function (e) {
      e.preventDefault();
  
      if (e.originalEvent.deltaY < 0) {
        jQuery(this).slick("slickNext");
      } else {
        jQuery(this).slick("slickPrev");
      }
    });
  });

  
$('.slider-wrapper').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
});
$('.insight-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    autoplay: true,
  });