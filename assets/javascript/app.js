$(document).ready(function(){
    // Initialize collapse button
    $(".button-collapse").sideNav();
    function initialDisplay(){
        clearContent('#techContent','#devContent','#premedContent')
        $('#econBtn').removeClass('grey darken-4').addClass('deep-orange darken-3');
        $('#econContent').show();
    };
    initialDisplay();
    function removeBtnsActiveColor(){
        $('#econBtn').removeClass('deep-orange darken-3').addClass('grey darken-4')
        $('#techBtn').removeClass('deep-orange darken-3').addClass('grey darken-4')
        $('#devBtn').removeClass('deep-orange darken-3').addClass('grey darken-4')
        $('#premedBtn').removeClass('deep-orange darken-3').addClass('grey darken-4')
    }
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
        $(targetContentId).fadeIn(800);
    }
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
    // $('#techBtn').on('click', function(){
    //     $('#topic-title').empty()
    //     $('#topic-title').html('<h1>Technology</h1>')
    //     removeBtnsActiveColor();
    //     $('#techBtn').removeClass('blue darken-1').addClass('orange darken-3');
    //     //switch content
    //     clearContent('#econContent','#devContent','#premedContent');
    //     $('#techContent').fadeIn('slow');
    // });
})

