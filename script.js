
var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    var img = new Image(); 
var div = document.getElementById('countdown'); 
 
img.onload = function() { 
  div.appendChild(img); 
}; 
 
img.src = 'https://play-lh.googleusercontent.com/a7YluB66GFPbHavYrNaZ7AtvIXJ3A3aikxWPEzp_IRTlrFI0FK4-NsKYGTPcc2dNbDk'
    
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);