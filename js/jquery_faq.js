$(document).ready(function() {
    $('#answers').click(function(event) {
        event.preventDefault();
        $('.invisible').toggleClass('visible');
    });
});

$(document).ready(function() {
    $('ul').each(function(){
        $(this).children('li').first().css('font-weight', 'bold');
    });
    $('#toggle1').click(function() {
        $('#1').slideToggle();
    });
    $('#toggle2').click(function() {
        $('#2').slideToggle();
    });
    $('#toggle3').click(function() {
        $('#3').slideToggle();
    });
    $('#toggle4').click(function() {
        $('#4').slideToggle();
    });
    $('#toggle5').click(function() {
        $('#5').slideToggle();
    });
    $('#toggle6').click(function() {
        $('#6').slideToggle();
    });
    $('#toggle7').click(function() {
        $('#7').slideToggle();
    });
    $('#toggle8').click(function() {
        $('#8').slideToggle();
    });
    $('#toggle9').click(function() {
        $('#9').slideToggle();
    });
    $('#toggle10').click(function() {
        $('#10').slideToggle();
    });

    $(".highlight-last-li-button").click(function () {
        $("ul").each(function(index) {
            $(this).children().last().toggleClass("highlight");
        })
    })

});

