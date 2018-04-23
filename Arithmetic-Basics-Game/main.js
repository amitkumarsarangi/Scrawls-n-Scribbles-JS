var gameInstructions = document.getElementById("gameInstructions");
	var okInstructions = document.getElementById("okInstructions");

var gameChooseOperation = document.getElementById("gameChooseOperation");
	var goBackChooseOperation = document.getElementById("goBackChooseOperation");
	var add = document.getElementById("add");
	var subtract = document.getElementById("subtract");
	var multiply = document.getElementById("multiply");
	var divide = document.getElementById("divide");

var gameChooseDuration = document.getElementById("gameChooseDuration");
	var goBackChooseDuration = document.getElementById("goBackChooseDuration");
	var duration = document.getElementById("duration");
	var increaseDuration = document.getElementById("increaseDuration");
	var decreaseDuration = document.getElementById("decreaseDuration");
	var okChooseDuration = document.getElementById("okChooseDuration");

var gameScoreRules = document.getElementById("gameScoreRules");
	var okScoreRules = document.getElementById("okScoreRules");

var gameActual = document.getElementById("gameActual");
	var yourScore = document.getElementById("yourScore");
	var timeLeft = document.getElementById("timeLeft");
	var integerOne = document.getElementById("integerOne");
	var operation = document.getElementById("operation");
	var integerTwo = document.getElementById("integerTwo");
	var choiceOne = document.getElementById("choiceOne");
	var choiceTwo = document.getElementById("choiceTwo");
	var choiceThree = document.getElementById("choiceThree");
	var choiceFour = document.getElementById("choiceFour");
	var gameOver = document.getElementById("gameOver");

	var iQuit = document.getElementById("iQuit");

window.onload = function(){
	gameChooseOperation.style.display = 'none';
	gameScoreRules.style.display = 'none';
	gameChooseDuration.style.display = 'none';
	gameActual.style.display = 'none';
}

okInstructions.onclick = function(){
	gameInstructions.style.display = 'none';
	gameChooseOperation.style.display = 'block';
}

goBackChooseOperation.onclick = function(){
	gameChooseOperation.style.display = 'none';
	gameInstructions.style.display = 'block';
}

var operationIs = '';

add.onclick = function(){
	gameChooseOperation.style.display = 'none';
	gameChooseDuration.style.display = 'block';
	operationIs = 'add';
}

subtract.onclick = function(){
	gameChooseOperation.style.display = 'none';
	gameChooseDuration.style.display = 'block';
	operationIs = 'subtract';
}

multiply.onclick = function(){
	gameChooseOperation.style.display = 'none';
	gameChooseDuration.style.display = 'block';
	operationIs = 'multiply';
}

divide.onclick = function(){
	gameChooseOperation.style.display = 'none';
	gameChooseDuration.style.display = 'block';
	operationIs = 'divide';
}

goBackChooseDuration.onclick = function(){
	gameChooseDuration.style.display = 'none';
	gameChooseOperation.style.display = 'block';
}

var durationIs = 60;

increaseDuration.onclick = function(){
	durationIs += 1;
	duration.innerHTML = durationIs;
}

decreaseDuration.onclick = function(){
	durationIs -= 1;
	duration.innerHTML = durationIs;
}

okChooseDuration.onclick = function(){
	gameChooseDuration.style.display = 'none';
	gameScoreRules.style.display = 'block';
}

var scoreIs = 0;

okScoreRules.onclick = function(){
	yourScore.innerHTML = scoreIs;
	timeLeft.innerHTML = durationIs;
	callRelevantOperationFun();
	gameScoreRules.style.display = 'none';
	gameActual.style.display = 'block';
	gameTimerFun();
}

var rightAnswers = 0;
var wrongAnswers = 0;
choiceOne.onclick = function(){
	if(solutionInt == choiceOne.innerHTML) {
		scoreIs += 1;
		rightAnswers += 1;
	}else {
		scoreIs -= 1;
		wrongAnswers += 1;
	}
	yourScore.innerHTML = scoreIs;
	callRelevantOperationFun();
}

choiceTwo.onclick = function(){
	if(solutionInt == choiceTwo.innerHTML) {
		scoreIs += 1;
		rightAnswers += 1;
	}else {
		scoreIs -= 1;
		wrongAnswers += 1;
	}
	yourScore.innerHTML = scoreIs;
	callRelevantOperationFun();
}

choiceThree.onclick = function(){
	if(solutionInt == choiceThree.innerHTML) {
		scoreIs += 1;
		rightAnswers += 1;
	}else {
		scoreIs -= 1;
		wrongAnswers += 1;
	}
	yourScore.innerHTML = scoreIs;
	callRelevantOperationFun();
}

choiceFour.onclick = function(){
	if(solutionInt == choiceFour.innerHTML) {
		scoreIs += 1;
		rightAnswers += 1;
	}else {
		scoreIs -= 1;
		wrongAnswers += 1;
	}
	yourScore.innerHTML = scoreIs;
	callRelevantOperationFun();
}

var solutionInt = 0;

function addOperationFun() {
	var oneInt = Math.floor((Math.random() * 989)) + 10;
	var twoInt = Math.floor((Math.random() * 100)) + 10;
	solutionInt = oneInt + twoInt;
	var x = Math.floor(Math.random() * 4);
	var xArr = [0, 0, 0, 0];
	xArr[x] = solutionInt;
	var y = 0;
	var z = 0;
	while(y !== 2) {
		if(xArr[z] === 0) {
			solutionInt += 10;
			xArr[z] = solutionInt;
			y += 1;
		}
		z += 1;
	}
	y = 0;
	z = 0;
	solutionInt = oneInt + twoInt;
	while(y !== 1) {
		if(xArr[z] === 0) {
			solutionInt -= 10;
			xArr[z] = solutionInt;
			y += 1;
		}
		z += 1;
	}
	solutionInt = oneInt + twoInt;
	integerOne.innerHTML = oneInt;
	integerTwo.innerHTML = twoInt;
	choiceOne.innerHTML = xArr[0];
	choiceTwo.innerHTML = xArr[1];
	choiceThree.innerHTML = xArr[2];
	choiceFour.innerHTML = xArr[3];
}

function subtractOperationFun() {
	var oneInt = Math.floor((Math.random() * 789)) + 200;
	var twoInt = Math.floor((Math.random() * 100)) + 10;
	solutionInt = oneInt - twoInt;
	var x = Math.floor(Math.random() * 4);
	var xArr = [0, 0, 0, 0];
	xArr[x] = solutionInt;
	var y = 0;
	var z = 0;
	while(y !== 2) {
		if(xArr[z] === 0) {
			solutionInt += 10;
			xArr[z] = solutionInt;
			y += 1;
		}
		z += 1;
	}
	y = 0;
	z = 0;
	solutionInt = oneInt - twoInt;
	while(y !== 1) {
		if(xArr[z] === 0) {
			solutionInt -= 10;
			xArr[z] = solutionInt;
			y += 1;
		}
		z += 1;
	}
	solutionInt = oneInt - twoInt;
	integerOne.innerHTML = oneInt;
	integerTwo.innerHTML = twoInt;
	choiceOne.innerHTML = xArr[0];
	choiceTwo.innerHTML = xArr[1];
	choiceThree.innerHTML = xArr[2];
	choiceFour.innerHTML = xArr[3];
}

function multiplyOperationFun() {
	var oneInt = Math.floor((Math.random() * 26)) + 2;
	var twoInt = Math.floor((Math.random() * 10)) + 2;
	solutionInt = oneInt * twoInt;
	var x = Math.floor(Math.random() * 4);
	var xArr = [0, 0, 0, 0];
	xArr[x] = solutionInt;
	var y = 0;
	var z = 0;
	while(y !== 2) {
		if(xArr[z] === 0) {
			solutionInt += 10;
			xArr[z] = solutionInt;
			y += 1;
		}
		z += 1;
	}
	y = 0;
	z = 0;
	solutionInt = oneInt * twoInt;
	while(y !== 1) {
		if(xArr[z] === 0) {
			solutionInt -= 10;
			xArr[z] = Math.abs(solutionInt);
			y += 1;
		}
		z += 1;
	}
	solutionInt = oneInt * twoInt;
	integerOne.innerHTML = oneInt;
	integerTwo.innerHTML = twoInt;
	choiceOne.innerHTML = xArr[0];
	choiceTwo.innerHTML = xArr[1];
	choiceThree.innerHTML = xArr[2];
	choiceFour.innerHTML = xArr[3];
}

function divideOperationFun() {
	var oneInt = Math.floor((Math.random() * 26)) + 2;
	var twoInt = Math.floor((Math.random() * 10)) + 2;
	solutionInt = oneInt * twoInt;
	var temp = oneInt;
	oneInt = solutionInt;
	solutionInt = temp;
	var x = Math.floor(Math.random() * 4);
	var xArr = [0, 0, 0, 0];
	xArr[x] = solutionInt;
	var y = 0;
	var z = 0;
	while(y !== 2) {
		if(xArr[z] === 0) {
			solutionInt += 10;
			xArr[z] = solutionInt;
			y += 1;
		}
		z += 1;
	}
	y = 0;
	z = 0;
	solutionInt = temp;
	while(y !== 1) {
		if(xArr[z] === 0) {
			solutionInt -= 10;
			xArr[z] = Math.abs(solutionInt);
			y += 1;
		}
		z += 1;
	}
	solutionInt = temp;
	integerOne.innerHTML = oneInt;
	integerTwo.innerHTML = twoInt;
	choiceOne.innerHTML = xArr[0];
	choiceTwo.innerHTML = xArr[1];
	choiceThree.innerHTML = xArr[2];
	choiceFour.innerHTML = xArr[3];
}

function callRelevantOperationFun() {
	if (operationIs==='add') {
		operation.innerHTML = '+';
		addOperationFun();
	} else if (operationIs==='subtract') {
		operation.innerHTML = '-';
		subtractOperationFun();
	} else if (operationIs==='multiply') {
		operation.innerHTML = '&times;';
		multiplyOperationFun();
	} else if (operationIs==='divide') {
		operation.innerHTML = '&divide;';
		divideOperationFun();
	}
}

function gameTimerFun() {
	var countdown = setInterval(function(){
		durationIs -= 1;
		if(durationIs === 0) {
			gameOver.innerHTML = '<p>Game Over</p>' + '<p>Correct answers: ' + rightAnswers + '</p><p>Wrong answers: ' + wrongAnswers + '</p>' ;
			clearInterval(countdown);
			setTimeout(function(){
				location.reload();
			}, 20000);
		}
		timeLeft.innerHTML = durationIs;
	}, 1001);
}

iQuit.onclick = function(){
	location.reload();
}