var allTags = document.querySelectorAll("*");
for(var i=0; i < allTags.length; i++) {
    allTags[i].style.margin = '0';
    allTags[i].style.padding = '0';
    allTags[i].style.border = '0';
}
document.body.style.backgoundColor = 'transparent';
var mainTag = document.querySelectorAll("main");
mainTag[0].style.position = "relative";
var clock = document.getElementById("clock");
    var clockCenter = document.getElementById("clockCenter");
    var hourHand = document.getElementById("hourHand");
    var minuteHand = document.getElementById("minuteHand");
    var secondHand = document.getElementById("secondHand");
    var horLine = document.getElementById("horLine");
    var verLine = document.getElementById("verLine");
//all get elements variables above this line...
var currentTime = new Date(); //get the current date and time...
var hours = currentTime.getHours(); //get the hour...
var minutes = currentTime.getMinutes(); //get the minutes...
var seconds = currentTime.getSeconds(); //get the seconds...
var clockTick = new Audio("clockTick.mp3");
//all global variables above this line...

clock.style.margin = "auto";
clock.style.marginTop = "100px";
clock.style.width = "300px";
clock.style.height = "300px";
clock.style.backgroundColor = "#eeeeee";
clock.style.border = "12px solid gold";
clock.style.borderRadius = "50%";
clock.style.boxShadow = "inset 0 0 70px #555555, 5px 10px 25px #222222";
clock.style.position = "relative";

clockCenter.style.width = "50px";
clockCenter.style.height = "50px";
clockCenter.style.backgroundColor = "crimson";
clockCenter.style.borderRadius = "50%";
clockCenter.style.boxShadow = "0 0 30px #000000";
clockCenter.style.position = "absolute";
clockCenter.style.top = "50%";
clockCenter.style.left = "50%";
clockCenter.style.transform = "translate(-50%, -50%)";
clockCenter.style.webkitTransform = "translate(-50%, -50%)";
clockCenter.style.zIndex = 100;

hourHand.style.width = "2px";
hourHand.style.backgroundColor = "#000000";
hourHand.style.position = "absolute";
hourHand.style.top = "50%";
hourHand.style.left = "50%";
hourHand.style.transform = "translate(-50%, -100%)";
hourHand.style.webkitTransform = "translate(-50%, -100%)";
hourHand.style.transformOrigin = "50% 0";
hourHand.style.webkitTransformOrigin = "50% 0";
hourHand.style.width = "9px";
hourHand.style.height = "90px";
hourHand.style.backgroundColor = "crimson";
hourHand.style.boxShadow = "0 0 2px crimson";
hourHand.style.borderRadius = "3px";

minuteHand.style.width = "2px";
minuteHand.style.backgroundColor = "#000000";
minuteHand.style.position = "absolute";
minuteHand.style.top = "50%";
minuteHand.style.left = "50%";
minuteHand.style.transform = "translate(-50%, -100%)";
minuteHand.style.webkitTransform = "translate(-50%, -100%)";
minuteHand.style.transformOrigin = "50% 0";
minuteHand.style.webkitTransformOrigin = "50% 0";
minuteHand.style.width = "5px";
minuteHand.style.height = "120px";
minuteHand.style.backgroundColor = "crimson";
minuteHand.style.boxShadow = "0 0 2px crimson";
minuteHand.style.borderRadius = "3px";

secondHand.style.width = "2px";
secondHand.style.backgroundColor = "#000000";
secondHand.style.position = "absolute";
secondHand.style.top = "50%";
secondHand.style.left = "50%";
secondHand.style.transform = "translate(-50%, -100%)";
secondHand.style.webkitTransform = "translate(-50%, -100%)";
secondHand.style.transformOrigin = "50% 0";
secondHand.style.webkitTransformOrigin = "50% 0";
secondHand.style.height = "135px";
secondHand.style.backgroundColor = "black";
secondHand.style.boxShadow = "0 0 2px black";

// horLine.style.height = "400px";
// horLine.style.borderLeft = "1px solid #ff0000";
// horLine.style.position = "absolute";
// horLine.style.left = "50%";

// verLine.style.width = "400px";
// verLine.style.borderTop = "1px solid #ff0000";
// verLine.style.position = "absolute";
// verLine.style.top = "50%";
// all styling above this line...

// console.log(hours, minutes, seconds);

getClockHandsPositionFun();
setInterval(getClockHandsPositionFun, 1000);

//all function declarations below this line...
function getClockHandsPositionFun() {
	getCurrentTimeFun();

	//get the degree values for hand rotations...
	const degSecond = 180 + ((seconds / 60) * 360);
    const degMinute = (180 + ((minutes / 60) * 360)) + ((seconds/60)*6);
    const degHour = (180 + ((hours / 12) * 360)) + ((minutes/60)*30);

    //set style transform property to rotate hands...
    secondHand.style.transform = `rotate(${degSecond}deg)`;
    minuteHand.style.transform = `rotate(${degMinute}deg)`;
    hourHand.style.transform = `rotate(${degHour}deg)`;

    secondHand.style.webkitTransform = `rotate(${degSecond}deg)`;
    minuteHand.style.webkitTransform = `rotate(${degMinute}deg)`;
    hourHand.style.webkitTransform = `rotate(${degHour}deg)`;
}

function getCurrentTimeFun() {
	currentTime = new Date();
	hours = currentTime.getHours();
	minutes = currentTime.getMinutes();
	seconds = currentTime.getSeconds();

	clockTick.play();
}