var zfb = document.getElementById('zfb');
var wx = document.getElementById('wx');
var shows = document.querySelector('.shws');
var showd = document.querySelector('.shwd');
$(wx).click(function(){
  
  $(shows).fadeIn(260);
  $(showd).fadeOut(260);
});
$(zfb).click(function(){

  $(shows).fadeOut(260);
  $(showd).fadeIn(260);

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