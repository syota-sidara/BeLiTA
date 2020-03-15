// スティキーヘッダー
$(function () {
  var $win = $(window),
    $fv = $('.fv'),
    $header = $('.header'),
    fvHeight = $fv.outerHeight();
  fixedClass = 'fixed';
  $win.on('load scroll', function () {
    var value = $(this).scrollTop();
    if ($win.width() > 768) {
      if (value > fvHeight) {
        $header.addClass(fixedClass);
      } else {
        $header.removeClass(fiexdClass);
      }
    }
  });
});


// スライダー
$(document).ready(function () {
  $('.slider').slick({
    autoplay: true, //自動再生
    autoplaySpeed: 2000,
    fade: true,
    speed: 1000,
    cssEase: 'linear'
  });
});


// ハンバーガーメニュー
$('.burger-btn').on('click', function () {
  $('.header-nav').fadeToggle(300);
  $(this).toggleClass('cross');
  $('body').toggleClass('noscroll');
});





// $('.burger-btn').on('click', function () {//.btn_triggerをクリックすると
//   $('.burger-btn').toggleClass('close');//.btn_triggerにcloseクラスを付与(ボタンのアニメーション)
//   $('.nav-wrapper').fadeToggle(500);//.nav-wrapperが0.5秒でフェードイン(メニューのフェードイン)
//   $('body').toggleClass('noscroll');//bodyにnoscrollクラスを付与(スクロールを固定)
// });

// if ($(window).width() < 768) {//デバイスの幅が768以下のとき
//   $('.nav-item>a').on('click', function () {//.nav-item>aをクリックすると
//     $('.nav-wrapper').fadeOut(500);//.nav-wrapperが0.5秒でフェードアウト(メニューのフェードアウト)
//     $('.burger-btn').removeClass('close');//.btn_triggerのcloseクラスを削除
//     $('body').removeClass('noscroll');//bodyのnoscrollクラスを削除
//   });
