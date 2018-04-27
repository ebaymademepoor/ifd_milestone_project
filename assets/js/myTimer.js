// Timer Function

var timeLeft = 0;

function repeat(){
    timer(timeLeft);
}

function timer(countFrom){
    timeLeft = countFrom;
    console.log(timeLeft);
    if(timeLeft < 1){
        clearTimeout(timeLeft);
    } else {
    timeLeft--;
    setTimeout(repeat,1000);
    }
}

