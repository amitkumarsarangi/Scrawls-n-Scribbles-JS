var playerSettings = document.getElementById('playerSettings');
	var playerOne = document.getElementById('playerOne');
	var playerTwo = document.getElementById('playerTwo');
	var submitNames = document.getElementById('submitNames');

var whosTurnFirst = document.getElementById('whosTurnFirst');
	var playerOneWill = document.getElementById('playerOneWill');
	var playerTwoWill = document.getElementById('playerTwoWill');

var scoreBoard = document.getElementById('scoreBoard');
	var lastWinner = document.getElementById('lastWinner');
	var firstPlayerName = document.getElementById('firstPlayerName');
	var secondPlayerName = document.getElementById('secondPlayerName');
	var firstPlayerScore = document.getElementById('firstPlayerScore');
	var secondPlayerScore = document.getElementById('secondPlayerScore');

var gameBoard = document.getElementById('gameBoard');
	var grid0 = document.getElementById('grid0');
	var grid1 = document.getElementById('grid1');
	var grid2 = document.getElementById('grid2');
	var grid3 = document.getElementById('grid3');
	var grid4 = document.getElementById('grid4');
	var grid5 = document.getElementById('grid5');
	var grid6 = document.getElementById('grid6');
	var grid7 = document.getElementById('grid7');
	var grid8 = document.getElementById('grid8');

var reloadGame = document.getElementById('reloadGame');
	var reloader = document.getElementById('reloader');

window.onload = function() {
	whosTurnFirst.style.display = 'none';
	scoreBoard.style.display = 'none';
	reloadGame.style.display = 'none';
	gameBoard.style.display = 'none';
}

submitNames.onclick = function() {
	if(playerOne.value === '' || playerTwo.value === '') {
		alert('You must enter the names for both players.');
	}else if(playerOne.value === playerTwo.value) {
		alert('You must enter different names for each player.');
	} else {
		playerOneWill.innerHTML = playerOne.value;
		playerTwoWill.innerHTML = playerTwo.value;
		firstPlayerName.innerHTML = playerOne.value;
		secondPlayerName.innerHTML = playerTwo.value;
		firstPlayerScore.innerHTML = 0;
		secondPlayerScore.innerHTML = 0;
		playerSettings.style.display = 'none';
		whosTurnFirst.style.display = 'block';
	}
}

var myMove = 'firstPlayer';
playerOneWill.onclick = function() {
	myMove = 'firstPlayer';
	whosTurnFirst.style.display = 'none';
	scoreBoard.style.display = 'block';
	setTimeout(function(){
		gameBoard.style.display = 'block';
		reloadGame.style.display = 'block';
	}, 500);
	lastWinner.innerHTML = playerOne.value + "'s Turn";
}

playerTwoWill.onclick = function() {
	myMove = 'secondPlayer';
	whosTurnFirst.style.display = 'none';
	scoreBoard.style.display = 'block';
	setTimeout(function(){
		gameBoard.style.display = 'block';
		reloadGame.style.display = 'block';
	}, 500);
	lastWinner.innerHTML = playerTwo.value + "'s Turn";
}

grid0.onclick = function() {
	makeMoveFun(this, 0);
}
grid1.onclick = function() {
	makeMoveFun(this, 1);
}
grid2.onclick = function() {
	makeMoveFun(this, 2);
}
grid3.onclick = function() {
	makeMoveFun(this, 3);
}
grid4.onclick = function() {
	makeMoveFun(this, 4);
}
grid5.onclick = function() {
	makeMoveFun(this, 5);
}
grid6.onclick = function() {
	makeMoveFun(this, 6);
}
grid7.onclick = function() {
	makeMoveFun(this, 7);
}
grid8.onclick = function() {
	makeMoveFun(this, 8);
}

var totalMoves = 0;
var markedArr = ['', '', '',
				'', '', '',
				'', '', ''];
function makeMoveFun(arg, idx) {
	if(myMove === 'firstPlayer' && markedArr[idx]==='') {
		markedArr[idx] = 'X';
		arg.innerHTML = 'X';
		myMove = 'secondPlayer';
		lastWinner.innerHTML = playerTwo.value + "'s Turn";
	} else if(myMove === 'secondPlayer' && markedArr[idx]==='') {
		markedArr[idx] = 'O';
		arg.innerHTML = 'O';
		myMove = 'firstPlayer';
		lastWinner.innerHTML = playerOne.value + "'s Turn";
	}
	totalMoves += 1;
	checkResultFun();
}

function checkResultFun() {
	if(totalMoves >= 5) {
		if(markedArr[0]==='X'&&markedArr[1]==='X'&&markedArr[2]==='X') {
			resetGridsFun();
			resetPlayerOneTurnsFun();
		} else if(markedArr[0]==='O'&&markedArr[1]==='O'&&markedArr[2]==='O') {
			resetGridsFun();
			resetPlayerTwoTurnsFun();
		} else if(markedArr[3]==='X'&&markedArr[4]==='X'&&markedArr[5]==='X') {
			resetGridsFun();
			resetPlayerOneTurnsFun();
		} else if(markedArr[3]==='O'&&markedArr[4]==='O'&&markedArr[5]==='O') {
			resetGridsFun();
			resetPlayerTwoTurnsFun();
		} else if(markedArr[6]==='X'&&markedArr[7]==='X'&&markedArr[8]==='X') {
			resetGridsFun();
			resetPlayerOneTurnsFun();
		} else if(markedArr[6]==='O'&&markedArr[7]==='O'&&markedArr[8]==='O') {
			resetGridsFun();
			resetPlayerTwoTurnsFun();
		} else if(markedArr[0]==='X'&&markedArr[3]==='X'&&markedArr[6]==='X') {
			resetGridsFun();
			resetPlayerOneTurnsFun();
		} else if(markedArr[0]==='O'&&markedArr[3]==='O'&&markedArr[6]==='O') {
			resetGridsFun();
			resetPlayerTwoTurnsFun();
		} else if(markedArr[1]==='X'&&markedArr[4]==='X'&&markedArr[7]==='X') {
			resetGridsFun();
			resetPlayerOneTurnsFun();
		} else if(markedArr[1]==='O'&&markedArr[4]==='O'&&markedArr[7]==='O') {
			resetGridsFun();
			resetPlayerTwoTurnsFun();
		} else if(markedArr[2]==='X'&&markedArr[5]==='X'&&markedArr[8]==='X') {
			resetGridsFun();
			resetPlayerOneTurnsFun();
		} else if(markedArr[2]==='O'&&markedArr[5]==='O'&&markedArr[8]==='O') {
			resetGridsFun();
			resetPlayerTwoTurnsFun();
		} else if(markedArr[0]==='X'&&markedArr[4]==='X'&&markedArr[8]==='X') {
			resetGridsFun();
			resetPlayerOneTurnsFun();
		} else if(markedArr[0]==='O'&&markedArr[4]==='O'&&markedArr[8]==='O') {
			resetGridsFun();
			resetPlayerTwoTurnsFun();
		} else if(markedArr[2]==='X'&&markedArr[4]==='X'&&markedArr[6]==='X') {
			resetGridsFun();
			resetPlayerOneTurnsFun();
		} else if(markedArr[2]==='O'&&markedArr[4]==='O'&&markedArr[6]==='O') {
			resetGridsFun();
			resetPlayerTwoTurnsFun();
		} else if(markedArr[0]!==''&&markedArr[1]!==''&&markedArr[2]!==''&&markedArr[3]!==''&&markedArr[4]!==''&&markedArr[5]!==''&&markedArr[6]!==''&&markedArr[7]!==''&&markedArr[8]!=='') {
			resetGridsFun();
			resetBothPlayerTurnsFun();
		}
	}
}

function resetGridsFun() {
	grid0.innerHTML = '&nbsp;';
	grid1.innerHTML = '&nbsp;';
	grid2.innerHTML = '&nbsp;';
	grid3.innerHTML = '&nbsp;';
	grid4.innerHTML = '&nbsp;';
	grid5.innerHTML = '&nbsp;';
	grid6.innerHTML = '&nbsp;';
	grid7.innerHTML = '&nbsp;';
	grid8.innerHTML = '&nbsp;';
	totalMoves = 0;
	markedArr = ['', '', '',
				'', '', '',
				'', '', ''];
}

function resetPlayerOneTurnsFun() {
	lastWinner.innerHTML = playerOne.value + ' Won';
	firstPlayerScore.innerHTML = parseInt(firstPlayerScore.innerHTML) + 1;
	myMove = 'firstPlayer';
	setTimeout(function(){
		lastWinner.innerHTML = playerOne.value + "'s Turn";
	}, 1500);
}

function resetPlayerTwoTurnsFun() {
	lastWinner.innerHTML = playerTwo.value + ' Won';
	secondPlayerScore.innerHTML = parseInt(secondPlayerScore.innerHTML) + 1;
	myMove = 'secondPlayer';
	setTimeout(function(){
		lastWinner.innerHTML = playerTwo.value + "'s Turn";
	}, 1500);
}

function resetBothPlayerTurnsFun() {
	lastWinner.innerHTML = "It's a Draw";
	gameBoard.style.display = 'none';
	reloadGame.style.display = 'none';
	whosTurnFirst.style.display = 'block';
}

reloader.onclick = function() {
	location.reload();
}