setInterval(function(){
var randomNumber1 = Math.floor((Math.random() * 9001) + 1);
var randomNumber2 = Math.floor((Math.random() * 9001) + 1);
var x = document.createElement("IFRAME");
myPara.setAttribute("x", randomNumber1);
var y = document.getElementById("myFrame").src;
}, 100);
