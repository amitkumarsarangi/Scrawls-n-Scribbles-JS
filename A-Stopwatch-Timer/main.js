hourDisplay = document.getElementById('hourDisplay');
minuteDisplay = document.getElementById('minuteDisplay');
secDisplay = document.getElementById('secDisplay');
msecDisplay = document.getElementById('msecDisplay');
startStopTimer = document.getElementById('startStopTimer');
resetTimer = document.getElementById('resetTimer');

var beep = new Audio('beep.wav');
var timerRunning = false;

var getmsec = 0;
var getsec = 0;
var getminute = 0;
var gethour = 0;

var runTimerInterval = null;

startStopTimer.onclick = function() {
	if(!timerRunning) {
		runTimerInterval = setInterval(function(){
			runTimerFun();
		}, 10);

		startStopTimer.innerHTML = '<i class="fa fa-pause-circle-o"></i>';

		timerRunning = true;
	} else {
		clearInterval(runTimerInterval); // stop/pause timer...

		startStopTimer.innerHTML = '<i class="fa fa-clock-o"></i>';

		timerRunning = false;
	}

	beep.play();
}
resetTimer.onclick = function() {
	clearInterval(runTimerInterval); // stop timer...

	getmsec = 0;
	getsec = 0;
	getminute = 0;
	gethour = 0;

	hourDisplay.innerHTML = '00';
	minuteDisplay.innerHTML = '00';
	secDisplay.innerHTML = '00';
	msecDisplay.innerHTML = '00';

	startStopTimer.innerHTML = '<i class="fa fa-clock-o"></i>';

	timerRunning = false;

	beep.play();
}

// All function declarations below this line...
function runTimerFun() {
	if(getmsec===99) {
		getmsec = 0;
		if(getsec===59) {
			getsec = 0;
			if(getminute===59) {
				getminute = 0;
				gethour += 1;
			}else {
				getminute += 1;
			}
		}else {
			getsec += 1;
		}
	}else {
		getmsec +=1;
	}

	if(getmsec<10) {
		msecDisplay.innerHTML = '0' + getmsec;
	}else {
		msecDisplay.innerHTML = getmsec;
	}

	if(getsec<10) {
		secDisplay.innerHTML = '0' + getsec;
	}else {
		secDisplay.innerHTML = getsec;
	}

	if(getminute<10) {
		minuteDisplay.innerHTML = '0' + getminute;
	}else {
		minuteDisplay.innerHTML = getminute;
	}

	if(gethour<10) {
		hourDisplay.innerHTML = '0' + gethour;
	}else {
		hourDisplay.innerHTML = gethour;
	}
}