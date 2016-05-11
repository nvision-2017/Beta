$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            if(callback) callback($(this));
        });
        return $(this);
    }
});

$(document).ready(function() {
  $(".nav-open").click(function(){
    $("nav").show().animateCss("fadeInRight");
  });
  $(".nav-close").click(function(){
    $("nav").animateCss("fadeOutRight", function(el) {el.hide();});
  });
  $("nav a").click(function(e) {
    e.preventDefault();
    var el = $(this);
    $('html, body').animate({
        scrollTop: $(el.attr("href")).offset().top
    }, 1000);
  });
});