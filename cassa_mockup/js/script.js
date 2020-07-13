jQuery(window).on('load resize orientationchange', function() {
  if ($(window).width() < 842) {
    $('.flex-container').addClass('slideshow-container');
    $('.flex-item').addClass('mySlides fade'); 
    $('.flex-item').css('display', 'none'); 
    $('.dots, .prev, .next, .show, #pineapple').css('display', 'block');
} else {
  $('.flex-container').removeClass('slideshow-container');
  $('.flex-item').removeClass('mySlides fade');
  $('.flex-item').css('display', 'block');
  $('.dots, .prev, .next').css('display', 'none');
}
});
