var zfb = document.getElementById('zfb');
var wx = document.getElementById('wx');
var qq = document.getElementById('qq');
var shows = document.querySelector('.shws');
var showd = document.querySelector('.shwd');
var showa = document.querySelector('.shwa');
$(wx).click(function(){
  
  $(shows).fadeIn(260);
  $(showd).fadeOut(260);
  $(showa).fadeOut(260);
});
$(zfb).click(function(){
  $(showa).fadeOut(260);
  $(shows).fadeOut(260);
  $(showd).fadeIn(260);
});
$(qq).click(function(){
  $(showd).fadeOut(260);
  $(shows).fadeOut(260);
  $(showa).fadeIn(260);
});
var out = document.getElementById('ou');
$(out).click(function(){
  $('.toolk').fadeOut(160);
})
var sou = document.getElementById('souk');
$(sou).click(function(){
  setTimeout(function(){
  $('.toolk').fadeIn(160);
  },200);
});