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
    if ($(window).scrollTop() > 640){
      $('#info').addClass('panel-fixed');
    }
    if ($(window).scrollTop() < 640){
      $('#info').removeClass('panel-fixed')
    }
  });
  $(window).scroll(function(){
    if ($(window).scrollTop() > 325){
      $('#navlinks').addClass('navlinks-display');
    }
    if ($(window).scrollTop() < 325){
      $('#navlinks').removeClass('navlinks-display')
    }
  });
  function removePanel (id,height) {
    $(window).scroll(function(){
      if ($(window).scrollTop() > height){
        $(id).addClass('remove-panel');
      }
      if ($(window).scrollTop() < height){
        $(id).removeClass('remove-panel')
      }
    });
  }
  removePanel(".panel-ama", 9380);
  removePanel(".panel-identity",6200);
  removePanel(".panel-illusions",5800);
  removePanel(".panel-algorithms",4815);


  $(window).scroll(function(){
      if ( $(window).scrollTop() > $("#ch1").offset().top) {
        $('#index1').addClass('highlight');
      }
      if ( $(window).scrollTop() < $("#ch1").offset().top) {
        $('#index1').removeClass('highlight');
      }
      if ( $(window).scrollTop() > $("#ch2").offset().top) {
        $('#index2').addClass('highlight');
      }
      if ( $(window).scrollTop() < $("#ch2").offset().top) {
        $('#index2').removeClass('highlight');
      }
      if ( $(window).scrollTop() > $("#ch3").offset().top) {
        $('#index3').addClass('highlight');
      }
      if ( $(window).scrollTop() < $("#ch3").offset().top) {
        $('#index3').removeClass('highlight');
      }
      if ( $(window).scrollTop() > $("#ch4").offset().top) {
        $('#index4').addClass('highlight');
      }
      if ( $(window).scrollTop() < $("#ch4").offset().top) {
        $('#index4').removeClass('highlight');
      }
      if ( $(window).scrollTop() > $("#ch5").offset().top) {
        $('#index5').addClass('highlight');
      }
      if ( $(window).scrollTop() < $("#ch5").offset().top) {
        $('#index5').removeClass('highlight');
      }
      if ( $(window).scrollTop() > $("#ch6").offset().top) {
        $('#index6').addClass('highlight');
      }
      if ( $(window).scrollTop() < $("#ch6").offset().top) {
        $('#index6').removeClass('highlight');
      }
      if ( $(window).scrollTop() > $("#ch7").offset().top) {
        $('#index7').addClass('highlight');
      }
      if ( $(window).scrollTop() < $("#ch6").offset().top) {
        $('#index7').removeClass('highlight');
      }
      if ( $(window).scrollTop() > $("#ch8").offset().top) {
        $('#index8').addClass('highlight');
      }
      if ( $(window).scrollTop() < $("#ch8").offset().top) {
        $('#index8').removeClass('highlight');
      }
      if ( $(window).scrollTop() > $("#ch9").offset().top) {
        $('#index9').addClass('highlight');
      }
      if ( $(window).scrollTop() < $("#ch9").offset().top) {
        $('#index9').removeClass('highlight');
      }
      if ( $(window).scrollTop() > $("#ch10").offset().top) {
        $('#index10').addClass('highlight');
      }
      if ( $(window).scrollTop() < $("#ch10").offset().top) {
        $('#index10').removeClass('highlight');
      }
      if ( $(window).scrollTop() > $("#ch11").offset().top) {
        $('#index11').addClass('highlight');
      }
      if ( $(window).scrollTop() < $("#ch11").offset().top) {
        $('#index11').removeClass('highlight');
      }
  });