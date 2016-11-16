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
      $('#wrap').removeClass('navbar-fixed-top');
    }
  });
});
