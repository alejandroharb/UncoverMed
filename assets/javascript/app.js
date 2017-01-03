$(document).ready(function(){
    // Initialize collapse button

    // =======HOME PAGE=======
    $(".button-collapse").sideNav();
    //executes to display economics content
    function initialDisplay(){
        clearContent('#techContent','#devContent','#premedContent')
        $('#econBtn').removeClass('grey darken-4').addClass('deep-orange darken-3');
        $('#econContent').show();
    };
    //execute when page loads
    initialDisplay();
    //resets all button colors to inactive, initial color
    function removeBtnsActiveColor(){
        $('#econBtn').removeClass('deep-orange darken-3').addClass('grey darken-4')
        $('#techBtn').removeClass('deep-orange darken-3').addClass('grey darken-4')
        $('#devBtn').removeClass('deep-orange darken-3').addClass('grey darken-4')
        $('#premedBtn').removeClass('deep-orange darken-3').addClass('grey darken-4')
    }
    //hides topic content for the three other topics, expressed in parameters
    function clearContent(content1, content2, content3){
        $(content1).hide();
        $(content2).hide();
        $(content3).hide();
    }
    //click  event function: replaces title, changes button color, replaces article content
    function topicBtnClick(targetBtnId, targetContentId, otherId1, otherId2, otherId3){
        //resets all buttons to original color
        removeBtnsActiveColor();
        //adds new 'active' color to button clicked
        $(targetBtnId).removeClass('grey darken-4').addClass('deep-orange darken-3');
        //hides article content for other topics
        clearContent(otherId1, otherId2, otherId3);
        //displays content for topic clicked
        $(targetContentId).fadeIn('slow');
    }
    //click events for topic buttons
    $('#premedBtn').on('click', function(){
    	topicBtnClick('#premedBtn', '#premedContent', '#techContent','#econContent','#devContent')
    });
    $('#devBtn').on('click', function(){
    	 topicBtnClick('#devBtn', '#devContent','#techContent','#econContent','#premedContent')
    });
    $('#econBtn').on('click', function(){
    	topicBtnClick('#econBtn', '#econContent','#techContent','#devContent','#premedContent')
    });
    $('#techBtn').on('click', function(){
    	topicBtnClick('#techBtn', '#techContent', '#econContent','#devContent','#premedContent')
    });
    // =======PUBLISH PAGE=======

    //article table of contents section
    $('.scrollspy').scrollSpy();
    //removes the table of contents when user scrolls to citation section
    function removePanel (id) {
        $(window).scroll(function(){
        	var citationHeight = $('.citation').offset().top;
          if ($(window).scrollTop() > citationHeight){
            $(id).addClass('hide');
          }
          if ($(window).scrollTop() < citationHeight){
            $(id).removeClass('hide')
          }
        });
      };
      //calling function for specific article
      removePanel(".panel-ama");
      removePanel(".panel-identity");
      removePanel(".panel-illusions");
      removePanel(".panel-algorithms");
    //at page height, table of contents becomes fixed and moves down page as user scrolls
    $(window).scroll(function () {
        if($(window).scrollTop() > 336){
        	$('nav .brand-logo').css('color','#000');
        	$('nav ul a').css('color', '#000');
        }
        if($(window).scrollTop() < 336){
        	$('nav .brand-logo').css('color','#fff');
        	$('nav ul a').css('color', '#fff');
        }
        if ($(window).scrollTop() > 640){
          $('#info').addClass('panel-fixed');
        }
        if ($(window).scrollTop() < 640){
          $('#info').removeClass('panel-fixed')
        }
      });
    //when user scrolls to height of each 'chapter', table of contents is highlighted
    //===========condense into function!!========= 
    $(window).scroll(function(){
          if ( $(window).scrollTop() > $("#ch1").offset().top) {
          	//adds highlight class when scrolling past chapter
            $('#index1').addClass('highlight');
          }
          if ( $(window).scrollTop() < $("#ch1").offset().top) {
          	//removes highlight from table of content index when scrolling above chapter
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
});

