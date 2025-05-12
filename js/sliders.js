$(document).ready(function(){
  $('.room-slider').slick({
    slidesToShow: 2,
    infinite: true,
    nextArrow: $('.room-swipe__arrow-btn'),
    prevArrow: null,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});


$('.connection-slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: $('.connection-nav__errow_right'),
  prevArrow: $('.connection-nav__errow_left'),
  responsive: [
    {
      breakpoint: 1200,
      settings: 'unslick'
    }
  ]
});





