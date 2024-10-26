var hourBtn = document.getElementById('hour');
var minBtn = document.getElementById('min');
var secBtn = document.getElementById('sec');
var msecBtn = document.getElementById('msec');
var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;
var interval;

function timer(){
    msec++;
    msecBtn.innerHTML = msec;
    if(msec >=100){
        sec++;
        secBtn.innerHTML = sec;
        msec = 0
    }
    else if(sec >=60){
        min++;
        minBtn.innerHTML = min;
        sec = 0
    }
    else if(min >=60){
        hour++;
        hourBtn.innerHTML = hour;
        min = 0
    }
}

function start(){
    var btn = document.getElementById('startBtn');
    interval = setInterval(timer,10)
    btn.disabled = true
}

function pause(){
    var btn = document.getElementById('startBtn');
    clearInterval(interval)
    btn.disabled = false
}

function reset(){
     hour = 0;
     min = 0;
     sec = 0;
     msec = 0;
    hourBtn.innerHTML = hour;
    minBtn.innerHTML = min;
    secBtn.innerHTML = sec;
    msecBtn.innerHTML = msec;
    pause()
}



// ---------------------------------------------------------------------------------------