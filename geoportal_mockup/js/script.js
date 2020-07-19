$(document).ready(function(){
    var scrolling = $(".navigate, .content");
    $(window).scroll(function(){
      if ( $(this).scrollTop() >= 150 && scrolling.hasClass("loading") ){
        scrolling.removeClass("loading").addClass("scrolling");
      } else if($(this).scrollTop() <= 150 && scrolling.hasClass("scrolling")) {
        scrolling.removeClass("scrolling").addClass("loading");
      }
    });
  });