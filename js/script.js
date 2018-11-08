$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000, 
      smartSpeed: 1000,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false
    });
});

function slowScroll(id) {
  var offset = 0;
  $("html, body").animate({
    scrollTop: $(id).offset ().top - offset
  }, 500);
  return false;
};
