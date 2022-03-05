"use strict";

$(document).ready(function() {

  $('.menu-toggle').click(function() {
    $(this).toggleClass('active');
    $('.global-nav').toggleClass('panel');
  });
  $('.global-nav ul li a').click(function() {
    $('.menu-toggle').removeClass('active');
    $('.global-nav').removeClass('panel');
  });

  $(window).scroll(function() {
    if(this.scrollY > 100) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  });

  $('.scroll--up-btn').click(function() {
    ('html').animate({scrollTop: 0})
  });

  $('.bxslider').bxSlider({
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
    pager: true,
    slideWidth: 980
  });

});
