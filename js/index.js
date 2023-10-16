var zfb = document.getElementById('zfb');
var wx = document.getElementById('wx');
var shows = document.querySelector('.shows');
var showd = document.querySelector('.showd');
wx.addEventListener('click', function(){
  setTimeout(function(){
  shows.style.display = 'block';
  showd.style.display = 'none';
  }, 300);
});

zfb.addEventListener('click', function(){
  setTimeout(function(){
  shows.style.display = 'none';
  showd.style.display = 'block';
  },300);
});