elem = $('#page-header,.v-item');

$(window).on('load resize', function(){
  //switch
  var w = $(window).width();
  var x = 768;
  if (x < w) {
    $('body').removeClass('sp');
  } else if(w <= x){
    $('body').addClass('sp');
  }
});
$(window).on('load', function(){
  visibleelm();
});

/**/
$(window).on('load', function(){
  if($('#loading').hasClass('top')){
    $("body").addClass("load");
    $('#wrapper').delay(1200).queue(function(){
      $(this).addClass('on');
    });
  } else {
    $('#wrapper').addClass('on');
  }
});


//scroll
$(function(){
  $('a[href^="#"]').click(function(){
    var adjust = 200;
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });

  startPos = 0;
  $(window).on('scroll',function(){
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= startPos) {
      if(winScrollTop >= 50){
        $('header').addClass('hidden');
      }
    } else {
      $('header').removeClass('hidden');
    }
    startPos = winScrollTop;
    visibleelm();
  });
  $(window).on('scroll', function(){
    var footer_h = $("footer").innerHeight() / 2;
    var docHeight = $(document).innerHeight(),
        windowHeight = $(window).innerHeight(),
        pageBottom = docHeight - windowHeight;
    if(pageBottom <= $(window).scrollTop() + footer_h) {
      var w = $(window).width();
      var x = 768;
      if (x < w) {
        $("header").removeClass('hidden');
      }
    }
  });
});

//hambergerMenu
$(function(){
  var htmlElm = $('html');
  //body fix
  var bodyElm = $('body');
  var scrollPosi;
  function bodyFix() {
    scrollPosi = $(window).scrollTop();
    bodyElm.css({
      'position': 'fixed',
      'width': '100%',
      'z-index': '1',
      'top': -scrollPosi
    });
  }
  //reset body fix
  function bodyFixReset() {
    bodyElm.css({
      'position': 'unset',
      'width': 'auto',
      'top':'auto'
    });
    //adjust scroll pos
    $("html, body").scrollTop(scrollPosi);
  }
  function menuclosedelay(){
    setTimeout(function(){
      $('.g-menu').removeClass('off');
      $('html,body').removeClass('menu-open');
    }, 0);
  }
  $('.sp-menu-trg').click(function() {
    var w = $(window).width();
    var x = 768;
    if (x < w) {
      //pc
    } else if(w <= x){
      if($('.sp-menu-trg').hasClass('on')){
        $('.sp-menu-trg').removeClass('on');
        $('.g-menu').addClass('off');
        menuclosedelay();
        bodyFixReset();
      } else {
        $('.sp-menu-trg').addClass('on');
        $('html,body').addClass('menu-open');
        bodyFix();
      }
    }
  });

});


function visibleelm(){
  ww = $(window).width();
  var isAnimate = 'visible';
  var wl = 3;
  if(ww < 768){
    wl = 3;
  }
  elem.each(function () {
    var elemOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();
    if(scrollPos > elemOffset - wh + (wh / wl) ){
      $(this).addClass(isAnimate);
    }
  });
}

//accordion
$(function(){
  $(".js-accordion-title").on('click', function () {
    //$(".js-accordion-title").not(this).removeClass("open");
    //$(".js-accordion-title").not(this).next().slideUp(300);
    $(this).toggleClass("open");
    $(this).next().slideToggle(300);
  });
})







