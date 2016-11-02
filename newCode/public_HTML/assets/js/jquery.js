$(document).ready(function() {

  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the
      //nav bar to stick.
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 551) {
      $('#wrap').addClass('navbar-fixed-top');
    }
    if ($(window).scrollTop() < 551) {
      $('#nav_bar').removeClass('navbar-fixed-top');
    }
  });
});
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the
      //nav bar to stick.
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 325) {
      $('#navbar').removeClass('navbar-transparent');
      $('#navbar').addClass('navbar-solid');
    }
    if ($(window).scrollTop() < 325) {
      $('#navbar').removeClass('navbar-solid');
    }
  });