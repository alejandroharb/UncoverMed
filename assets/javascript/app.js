$(document).ready(function(){
    // Initialize collapse button
    $(".button-collapse").sideNav();
    function initialDisplay(){
        clearContent('#techContent','#devContent','#premedContent')
        $('#topic-title').html('<h1>Economics</h1>');
        $('#econBtn').removeClass('blue darken-1').addClass('orange darken-3');
        $('#econContent').show();
    };
    initialDisplay();
    function removeBtnsActiveColor(){
        $('#econBtn').removeClass('orange darken-3').addClass('blue darken-1')
        $('#techBtn').removeClass('orange darken-3').addClass('blue darken-1')
        $('#devBtn').removeClass('orange darken-3').addClass('blue darken-1')
        $('#premedBtn').removeClass('orange darken-3').addClass('blue darken-1')
    }
    function clearContent(content1, content2, content3){
        $(content1).hide();
        $(content2).hide();
        $(content3).hide();
    }
    $('#econBtn').on('click', function(){
        $('#topic-title').empty()
        $('#topic-title').html('<h1>Economics</h1>');
        removeBtnsActiveColor();
        $('#econBtn').removeClass('blue darken-1').addClass('orange darken-3');
    });
    function topicBtnClick(targetBtnId, targetContentId, title, otherId1, otherId2, otherId3){
        $('#topic-title').empty()
        $('#topic-title').html('<h1>'+title+'</h1>')
        removeBtnsActiveColor();
        $(targetBtnId).removeClass('blue darken-1').addClass('orange darken-3');
        //switch content
        clearContent(otherId1, otherId2, otherId3);
        $(targetContentId).fadeIn('slow');
    }
    $('#premedBtn').on('click', topicBtnClick('#premedBtn', '#premedContent', 'Pre-Med', '#techContent','#econContent','#devContent'));
    $('#devBtn').on('click', topicBtnClick('#devBtn', '#devContent', 'Improvement & Growth', '#techContent','#econContent','#premedContent'));
    $('#econBtn').on('click', topicBtnClick('#econBtn', '#econContent', 'Economics', '#techContent','#devContent','#premedContent'));
    $('#techBtn').on('click', topicBtnClick('#techBtn', '#techContent', 'Technology', '#econContent','#devContent','#premedContent'));
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

