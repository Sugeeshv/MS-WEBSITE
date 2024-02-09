
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
    autoplay: false,
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

  $(document).ready(function() {
    var $slider = $('.insight-slider');
    var $progressBar = $('.progress');
    var $progressBarLabel = $( '.slider__label' );
    
    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
      var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
      
      $progressBar
        .css('background-size', calc + '% 100%')
        .attr('aria-valuenow', calc );
      
      $progressBarLabel.text( calc + '% completed' );
    });
    
    $slider.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 400,
      arrows: true,
      autoplay: true,
      infinite: true,
      responsive: [
      {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            vertical: false,
          }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
        }
      },
      {
        breakpoint: 580,
        settings: {
          vertical: false,
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          slidesToShow: 2,
        }
      }
      ]
    });  
  });



  