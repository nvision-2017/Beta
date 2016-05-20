// Background slideshow

$(document).ready(function(){
 
 var imgArr = new Array( // relative paths of images
 'img/img-1.jpg',
 'img/img-2.jpg',
 'img/img-3.jpg',
 'img/img-4.jpg'
 );
 
 var preloadArr = new Array();
 var i;
 
 /* preload images */
 for(i=0; i < imgArr.length; i++){
 preloadArr[i] = new Image();
 preloadArr[i].src = imgArr[i];
 }
 
 var currImg = 1;
 var intID = setInterval(changeImg, 3000);
 
 /* image rotator */
 function changeImg(){
 $('.initial-div').animate({opacity: 0}, 1000, function(){
 $(this).css('background','url(' + preloadArr[currImg++%preloadArr.length].src +') top center no-repeat');
 }).animate({opacity: 1}, 1000);
 }
 
 });