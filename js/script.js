$(document).ready(function(){

   $('.initial-div .bg').animate({opacity: 0}, 1000, function(){
   $(this).css('background','url(' + 'img/bg.jpg' +') top center no-repeat').css('background-size','cover');
   }).animate({opacity: 1}, 1000);

   $('.MatModal').click(function(e){
        e.preventDefault();
        $('#MatModal-container').show(0,function(){
            $(this).addClass('show-MatModal');
            setTimeout(function(){
                $('#MatModal-container').addClass('seeModal');
            },250);
        });
    });
    $('#close-MatModal').click(function(e){
        e.preventDefault();
        closeMatModal();
    });
    function closeMatModal(){
        $('#MatModal-container').removeClass('seeModal show-MatModal');
        setTimeout(function(){
            $('#MatModal-container').hide(150);
        },550);
    };

    // Load
    $("img[data-src]").each(function() {
        var s = $(this).attr("data-src");
        $(this).attr("src", s);
    });
});
