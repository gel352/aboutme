$(function() {
  //微信支付
  $('#wx').click(function() {
    var wm = new Audio('mp3/Wm.mp3');
    wm.play();
    
    setTimeout(function () {
      var sk = new Audio('mp3/shake.mp3');
    sk.play();
    },1000);
    
    $('.wxzf').animate({
      top: 50,
      opacity: 1,
    }, 1600);
    $('.zfbzf,.qqzf').animate({
      top: -420,
      opacity: 0,
    }, 1500);
  });
  //支付宝支付
  $('#zfb').click(function() {
    var wm = new Audio('mp3/Wm.mp3');
    wm.play();
    
    setTimeout(function () {
      var sk = new Audio('mp3/shake.mp3');
    sk.play();
    },1000);
    
    $('.zfbzf').animate({
      top: 50,
      opacity: 1,
    }, 1600);
    $('.wxzf,.qqzf').animate({
      top: -420,
      opacity: 0,
    }, 1500);
  });
  //QQ支付
  $('#qq').click(function() {
    var wm = new Audio('mp3/Wm.mp3');
    wm.play();
    setTimeout(function () {
      var sk = new Audio('mp3/shake.mp3');
    sk.play();
    },1000);
    $('.qqzf').animate({
      top: 50,
      opacity: 1,
    }, 1600);
    $('.wxzf, .zfbzf').animate({
      top: -420,
      opacity: 0,
    }, 1500);
  });
  //收款码弹窗
  $('#souk').click(function(){
    $('#toolk').fadeIn(400);
    var ck = new Audio('mp3/ck.ogg');
    ck.play();
  });
  //收款码关闭
  $('#ou').click(function(){
    $('#toolk').fadeOut(400);
    var ck = new Audio('mp3/playend.mp3');
    ck.play();
  });
  
});