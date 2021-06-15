var min = 0;
var sec = 0;
var msec = 0;


var minheading = document.getElementById("min");
var secheading = document.getElementById("sec");
var msecHead = document.getElementById('msec');
var interval;



function timer() {
    msec++
    msecHead.innerHTML = msec;
    if (msec >= 60) {
        sec++
        msec = 0;
        secheading.innerHTML = sec
    }
    else if (sec >= 10) {
        min++
        minheading.innerHTML = min;
        sec = 0;
    }


}
function start() {
    interval = setInterval(timer, 16.666666666666666666666666666666666666666666);
    document.getElementById('startbtn').disabled = 1;
    document.getElementById('startbtn').innerHTML = "Restart"
    
}

function stop() {
    clearInterval(interval)
    document.getElementById('startbtn').disabled = 0;


}

function reset() {
    min = 0;
    sec = 0;
    msec = 0;
    minheading.innerHTML = min;
    secheading.innerHTML = sec;
    msecHead.innerHTML = msec;
    stop();


}





