/* Global $, alert, console*/
$(function () {
  'use strict';

  // Addjust Header height

var myHeader = $('.header'),
    mySlider = $('.bxslider');
  myHeader.height($(window).height());
      $(window).resize(function () {
          myHeader.height($(window).height());

          //ADJUST BXSLIDER LIST ITEM center
              mySlider.each(function () {
                  $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2 );
                });

      });
//Links Add Active class
      $('.links li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
      });
      //ADJUST BXSLIDER LIST ITEM center
          mySlider.each(function () {
              $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2 );
            });
      // Trigger the Bx Slider
       mySlider.bxSlider({

        pager: false

       });
//Smooth scroll to div

$('.links li a').click(function () {
    $('html, body').animate({
      scrollTop: $('#' + $(this).data('value')).offset().top
    }, 1000);
    console.log($(this).data('value'));
});

//our auto slider code
(function autoSlider() {
  $('.slider .active').each(function () {
    if(!$(this).is(':last-child'))
    {
      $(this).delay(3000).fadeOut(1000, function () {
        $(this).removeClass('active').next().addClass('active').fadeIn(1000);
        autoSlider();
      });
    }else{
      $(this).delay(3000).fadeOut(1000, function () {
        $(this).removeClass('active');
        $('.slider div').eq(0).addClass('active').fadeIn();
        autoSlider();
      });
    }
  });
})();

});
