
// Background slideshow

$(document).ready(function(){

 var imgArr = new Array( // relative paths of images
 'img/bg.jpg'
 );

 var preloadArr = new Array();
 var i;

 /* preload images */
 for(i=0; i < imgArr.length; i++){
 preloadArr[i] = new Image();
 preloadArr[i].src = imgArr[i];
 }

 //var currImg = 1;
 //var intID = setInterval(changeImg, 3000);

 /* image rotator */
  //function changeImg(){
   $('.initial-div .bg').animate({opacity: 0}, 1000, function(){
   $(this).css('background','url(' + preloadArr[0].src +') top center no-repeat').css('background-size','cover');
   }).animate({opacity: 1}, 1000);

   /*$('.initial-div .bg').animate({backgroundColor: "white"}, "fast", function(){
   $(this).css('background','url(' + preloadArr[currImg++%preloadArr.length].src +') top center no-repeat');
   });*/
  //}


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

  $(window).resize(function() {
    $('figure.team-member > .image img').css('height', $('figure.team-member > .image img').width()+'px');
  });
  $("*").on("scroll", function() {
    $('figure.team-member > .image img').css('height', $('figure.team-member > .image img').width()+'px');
  });
});
