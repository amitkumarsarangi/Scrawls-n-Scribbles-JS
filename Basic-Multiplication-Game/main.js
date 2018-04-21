var mainContainer = document.getElementById("mainContainer");
	var gameRules = document.getElementById("gameRules");
	var points = document.getElementById("points");
		var pointValue = document.getElementById("pointValue");
	var result = document.getElementById("result");
		var correct = document.getElementById("correct");
		var wrong = document.getElementById("wrong");
	var question = document.getElementById("question");
		var q1 = document.getElementById("q1");
		var q2 = document.getElementById("q2");
	var instruction = document.getElementById("instruction");
	var choices = document.getElementById("choices");
		var box1 = document.getElementById("box1");
		var box2 = document.getElementById("box2");
		var box3 = document.getElementById("box3");
		var box4 = document.getElementById("box4");
	var start = document.getElementById("start");
	var time = document.getElementById("time");
			var timeLeft = document.getElementById("timeLeft");
	var gameOver = document.getElementById("gameOver");
		var score = document.getElementById("score");
// Get all elements by ID above this line... ... ...
// All other variable declarations below this line... ... ...
var isStart = false;
var timeLeftValue;
var action; //used in startTimerFun...
var scoreValue = 0; //to store points scored...
var myArr = [];
//After clicking on #start (button) we do below...
start.onclick = function() {
	if (isStart==true) {
		location.reload(); //reload the page...
	} else {
		isStart = true; //game has started...
		pointValue.innerHTML = 0; //set score to zero...
		points.style.display = "block"; //show the points...
		gameOver.style.display = "none";
		start.innerHTML = "I Quit"; //set start button to restart...
		gameRules.style.display = "none"; //hide the game rules...
		time.style.display = "block"; //show the timer...
		instruction.style.display = "none"; //hide the instructions text...
		question.style.display = choices.style.display = "block"; //show the question and options...
		timeLeftValue = 100; //set the value for timer here...
		timeLeft.innerHTML = timeLeftValue; //put the value for timer...
		startTimerFun(); //start the timer... it is a function...
		getQuestionFun(); //get a question...
	}
}
for (var clickBox=1; clickBox<=4; clickBox++) {
	document.getElementById("box"+clickBox).onclick = function() {
		if (this.innerHTML == myArr[2]) {
			scoreValue+=1;
			pointValue.innerHTML=scoreValue;
			correct.style.display = "block"; //show +1...
			setTimeout(function() {
				correct.style.display = "none";
			}, 1000); //for 1 sec...
			getQuestionFun();
		} else {
			wrong.style.display = "block";
			setTimeout(function() {
				wrong.style.display = "none";
			}, 1000); //for 1 sec...
		}
	}
}
// All function definitions below this line... ... ...
function startTimerFun() { //start the timer function...
	action = setInterval(function() {
		timeLeftValue -= 1; //reduce by 1 after every 1sec...
		timeLeft.innerHTML = timeLeftValue; //put the value for timer...
		if (timeLeftValue===0) { //now game is over...
			stopTimerFun();
			gameOver.style.display = "block"; //show game is over...
			score.innerHTML = scoreValue;
			scoreValue = 0; //scoreValue back to 0...
			isStart = false;
			start.innerHTML = "Restart";
			question.style.display = choices.style.display = "none"; //hide the question and options...
		}
	}, 1000) //per 1000 ms...
}
function stopTimerFun() { //stop the timer function...
	clearInterval(action);
}
function getQuestionFun() { //generate a question function...
	myArr = [];
	myArr.push(Math.round(10*Math.random())); //myArr[0]
	myArr.push(Math.round(9*Math.random())); //myArr[1]
	q1.innerHTML = myArr[0];
	q2.innerHTML = myArr[1];
	myArr.push(myArr[0]*myArr[1]); //myArr[2] is the right answer...
	myArr.push(1+Math.round(3*Math.random())); //myArr[3] any number b/w 1-4...
	while (myArr.length<=6) { //generate 3 more numbers for wrong answers myArr[4], myArr[5], myArr[6]
		var x = (Math.round(9*Math.random()))*(Math.round(9*Math.random()));
		if (myArr.indexOf(x)<0) {myArr.push(x);} //wrong answers be different from each other and from the right answer...
	}
	if (myArr[3]===1) {
		box1.innerHTML=myArr[2];
		box2.innerHTML=myArr[6];
		box3.innerHTML=myArr[4];
		box4.innerHTML=myArr[5];
	}
	if (myArr[3]===2) {
		box2.innerHTML=myArr[2];
		box1.innerHTML=myArr[6];
		box3.innerHTML=myArr[4];
		box4.innerHTML=myArr[5];
	}
	if (myArr[3]===3) {
		box3.innerHTML=myArr[2];
		box1.innerHTML=myArr[6];
		box2.innerHTML=myArr[4];
		box4.innerHTML=myArr[5];
	}
	if (myArr[3]===4) {
		box4.innerHTML=myArr[2];
		box1.innerHTML=myArr[6];
		box2.innerHTML=myArr[4];
		box3.innerHTML=myArr[5];
	}
}