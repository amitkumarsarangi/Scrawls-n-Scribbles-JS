var controls = document.getElementsByClassName("controls");
var digits = document.getElementsByClassName("digits");
var btn_this = document.getElementsByClassName("btn-this");

var alarm = new Audio('alarm.wav');

var setSeconds = 0;
var setMinutes = 0;
var setHours = 0;

var tempSeconds = setSeconds;
var tempMinutes = setMinutes;
var tempHours = setHours;

var timerInterval = null;
var alarmInterval = null;

var isTimerRunning = false;

controls[2].onclick = function() { // increase seconds...
	if(isTimerRunning===false) {
		if(setSeconds===59) {
			setSeconds = 0;
		} else {
			setSeconds += 1;
		}

		if(setSeconds<10) {
			digits[2].innerHTML = '0'+setSeconds;
		} else {
			digits[2].innerHTML = setSeconds;
		}

		tempSeconds = setSeconds;
	}
}
controls[5].onclick = function() { // decrease seconds...
	if(isTimerRunning===false) {
		if(setSeconds===0) {
			setSeconds = 59;
		} else {
			setSeconds -= 1;
		}

		if(setSeconds<10) {
			digits[2].innerHTML = '0'+setSeconds;
		} else {
			digits[2].innerHTML = setSeconds;
		}

		tempSeconds = setSeconds;
	}
}

controls[1].onclick = function() { // increase minutes...
	if(isTimerRunning===false) {
		if(setMinutes===59) {
			setMinutes = 0;
		} else {
			setMinutes += 1;
		}

		if(setMinutes<10) {
			digits[1].innerHTML = '0'+setMinutes;
		} else {
			digits[1].innerHTML = setMinutes;
		}

		tempMinutes = setMinutes;
	}
}
controls[4].onclick = function() { // decrease minutes...
	if(isTimerRunning===false) {
		if(setMinutes===0) {
			setMinutes = 59;
		} else {
			setMinutes -= 1;
		}

		if(setMinutes<10) {
			digits[1].innerHTML = '0'+setMinutes;
		} else {
			digits[1].innerHTML = setMinutes;
		}

		tempMinutes = setMinutes;
	}
}

controls[0].onclick = function() { // increase hours...
	if(isTimerRunning===false) {
		if(setHours===23) {
			setHours = 0;
		} else {
			setHours += 1;
		}

		if(setHours<10) {
			digits[0].innerHTML = '0'+setHours;
		} else {
			digits[0].innerHTML = setHours;
		}

		tempHours = setHours;
	}
}
controls[3].onclick = function() { // decrease hours...
	if(isTimerRunning===false) {
		if(setHours===0) {
			setHours = 23;
		} else {
			setHours -= 1;
		}

		if(setHours<10) {
			digits[0].innerHTML = '0'+setHours;
		} else {
			digits[0].innerHTML = setHours;
		}

		tempHours = setHours;
	}
}

btn_this[0].onclick = function() { // start button...
	if(setHours===0 && setMinutes===0 && setSeconds===0) {
		for(var i=0; i<3; i++) {
			digits[i].style.color = '#fff';
		}
		setTimeout(function(){
			for(var i=0; i<3; i++) {
				digits[i].style.color = '#f23118';
			}
		}, 100);
	} else {
		if(setHours===0) {
			digits[0].innerHTML = '0'+setHours;
		}
		if(setMinutes===0) {
			digits[1].innerHTML = '0'+setMinutes;
		}
		if(setSeconds===0) {
			digits[2].innerHTML = '0'+setSeconds;
		}

		if(isTimerRunning===false) {
			timerInterval = setInterval(function(){
				runTimerFun();
			}, 1000);
		}

		isTimerRunning = true;
	}
}

btn_this[1].onclick = function() { //pause button...
	pauseTimerFun();
}

btn_this[2].onclick = function() { //stop button...
	pauseTimerFun();

	setSeconds = tempSeconds;
	setMinutes = tempMinutes;
	setHours = tempHours;

	if(setSeconds<10) {
		digits[2].innerHTML = '0'+setSeconds;
	} else {
		digits[2].innerHTML = setSeconds;
	}

	if(setMinutes<10) {
		digits[1].innerHTML = '0'+setMinutes;
	} else {
		digits[1].innerHTML = setMinutes;
	}

	if(setHours<10) {
		digits[0].innerHTML = '0'+setHours;
	} else {
		digits[0].innerHTML = setHours;
	}
}

// All function declarations below this line...
function runTimerFun() {
	if(setHours===0 && setMinutes===0 && setSeconds===0) {
		clearInterval(timerInterval);
		alarm = new Audio('alarm.wav');
		alarm.play();
		alarmInterval = setInterval(function(){
			alarm.play();
		}, 7000);
	} else {
		if(setSeconds===0) {
			setSeconds = 59;
			if(setMinutes===0) {
				setMinutes = 59;
				setHours -= 1;
			} else {
				setMinutes -= 1;
			}
		} else {
			setSeconds -= 1;
		}

		if(setSeconds<10) {
			digits[2].innerHTML = '0'+setSeconds;
		} else {
			digits[2].innerHTML = setSeconds;
		}

		if(setMinutes<10) {
			digits[1].innerHTML = '0'+setMinutes;
		} else {
			digits[1].innerHTML = setMinutes;
		}

		if(setHours<10) {
			digits[0].innerHTML = '0'+setHours;
		} else {
			digits[0].innerHTML = setHours;
		}
	}
}

function pauseTimerFun() {
	clearInterval(timerInterval);
	clearInterval(alarmInterval);
	alarm.pause();
	isTimerRunning = false;
}