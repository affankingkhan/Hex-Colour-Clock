var clock = document.getElementById('clock');
var hexColour = document.getElementById('hex-colour');

function hexClock(){

    var time = new Date();
    var hours = (time.getHours() % 12).toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
// have to make sure we get 6 digits for the hex values. Below ensures this 

    if(hours.length < 2){
        hours = '0' + hours;
    }
    if(minutes.length < 2){
        minutes = '0' + minutes;
    }
    if(seconds.length < 2){
        seconds = '0' + seconds;
    }

    var clockStr = hours + ' : ' + minutes + ' : ' + seconds;

    var hexColourStr = '#' + hours + minutes + seconds; //hexvalue
    
    clock.textContent = clockStr;
    hexColour.textContent = hexColourStr;

    document.body.style.backgroundColor = hexColourStr; //update background colour to hex value

}

hexClock(); // run it once before setInterval so that it isnt 1 sec behind
setInterval(hexClock, 1000);