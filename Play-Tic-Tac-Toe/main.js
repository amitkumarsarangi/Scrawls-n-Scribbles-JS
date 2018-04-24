var selectMark = document.getElementById("selectMark");
	var markX = document.getElementById("markX");
	var markO = document.getElementById("markO");

var gameBoard = document.getElementById("gameBoard");
	var grid0 = document.getElementById("grid0");
	var grid1 = document.getElementById("grid1");
	var grid2 = document.getElementById("grid2");
	var grid3 = document.getElementById("grid3");
	var grid4 = document.getElementById("grid4");
	var grid5 = document.getElementById("grid5");
	var grid6 = document.getElementById("grid6");
	var grid7 = document.getElementById("grid7");
	var grid8 = document.getElementById("grid8");

var info = document.getElementById("info");
	var won = document.getElementById("won");
	var lost = document.getElementById("lost");
	var draw = document.getElementById("draw");
	var restart = document.getElementById("restart");

var playerMark = 'X';
var computerMark = 'O';

var valuesGrid = [
					['', '', ''],
					['', '', ''],
					['', '', '']
				];

window.onload = function() {
	selectMark.style.display = 'block';
	gameBoard.style.display = 'none';
	info.style.display = 'none';
}

var canRestart = true;
restart.onclick = function() {
	if (canRestart) {
		location.reload();
	}
}

markX.onclick = function() {
	playerMark = 'X';
	computerMark = 'O';
	selectMark.style.display = 'none';
	gameBoard.style.display = 'block';
	info.style.display = 'block';
}

markO.onclick = function() {
	playerMark = 'O';
	computerMark = 'X';
	selectMark.style.display = 'none';
	gameBoard.style.display = 'block';
	info.style.display = 'block';
}

var canPlayerPlay = true;
grid0.onclick = function() {
	if (canPlayerPlay && this.innerHTML === '&nbsp;') {
		playerEnmarkFun(this);
	}
}
grid1.onclick = function() {
	if (canPlayerPlay && this.innerHTML === '&nbsp;') {
		playerEnmarkFun(this);
	}
}
grid2.onclick = function() {
	if (canPlayerPlay && this.innerHTML === '&nbsp;') {
		playerEnmarkFun(this);
	}
}
grid3.onclick = function() {
	if (canPlayerPlay && this.innerHTML === '&nbsp;') {
		playerEnmarkFun(this);
	}
}
grid4.onclick = function() {
	if (canPlayerPlay && this.innerHTML === '&nbsp;') {
		playerEnmarkFun(this);
	}
}
grid5.onclick = function() {
	if (canPlayerPlay && this.innerHTML === '&nbsp;') {
		playerEnmarkFun(this);
	}
}
grid6.onclick = function() {
	if (canPlayerPlay && this.innerHTML === '&nbsp;') {
		playerEnmarkFun(this);
	}
}
grid7.onclick = function() {
	if (canPlayerPlay && this.innerHTML === '&nbsp;') {
		playerEnmarkFun(this);
	}
}
grid8.onclick = function() {
	if (canPlayerPlay && this.innerHTML === '&nbsp;') {
		playerEnmarkFun(this);
	}
}

// All function declarations below this line...
function playerEnmarkFun(gridArg) {
	canPlayerPlay = false;

	if (gridArg === grid0){
		valuesGrid[0][0] = playerMark;
	}else if (gridArg === grid1){
		valuesGrid[0][1] = playerMark;
	}else if (gridArg === grid2){
		valuesGrid[0][2] = playerMark;
	}else if (gridArg === grid3){
		valuesGrid[1][0] = playerMark;
	}else if (gridArg === grid4){
		valuesGrid[1][1] = playerMark;
	}else if (gridArg === grid5){
		valuesGrid[1][2] = playerMark;
	}else if (gridArg === grid6){
		valuesGrid[2][0] = playerMark;
	}else if (gridArg === grid7){
		valuesGrid[2][1] = playerMark;
	}else if (gridArg === grid8){
		valuesGrid[2][2] = playerMark;
	}

	gridArg.innerHTML = playerMark;

	var checkWinner = checkGameOverFun();

	if (checkWinner === 'draw') {
		registerInfoFun('draw');
	} else if (checkWinner === playerMark) {
		registerInfoFun('won');
	} else if (checkWinner === computerMark) {
		registerInfoFun('lost');
	} else {
		var turn = computerTurnFun();
		computerEnmarkFun(turn[0], turn[1]);
	}
}

function computerEnmarkFun(idxI, idxJ) {
	if (idxI === 0 && idxJ === 0) {
		grid0.innerHTML = computerMark;
	}else if (idxI === 0 && idxJ === 1) {
		grid1.innerHTML = computerMark;
	}else if (idxI === 0 && idxJ === 2) {
		grid2.innerHTML = computerMark;
	}else if (idxI === 1 && idxJ === 0) {
		grid3.innerHTML = computerMark;
	}else if (idxI === 1 && idxJ === 1) {
		grid4.innerHTML = computerMark;
	}else if (idxI === 1 && idxJ === 2) {
		grid5.innerHTML = computerMark;
	}else if (idxI === 2 && idxJ === 0) {
		grid6.innerHTML = computerMark;
	}else if (idxI === 2 && idxJ === 1) {
		grid7.innerHTML = computerMark;
	}else if (idxI === 2 && idxJ === 2) {
		grid8.innerHTML = computerMark;
	}

	valuesGrid[idxI][idxJ] = computerMark;

	var checkWinner = checkGameOverFun();

	if (checkWinner === 'draw') {
		registerInfoFun('draw');
	} else if (checkWinner === playerMark) {
		registerInfoFun('won');
	} else if (checkWinner === computerMark) {
		registerInfoFun('lost');
	} else {
		canPlayerPlay = true;
	}
}

function checkGameOverFun() {
	// check horizontal grids...
	for (var i=0; i <=2; i++) {
		if (valuesGrid[i][0] === valuesGrid[i][1] && valuesGrid[i][0] === valuesGrid[i][2] && valuesGrid[i][0] !== '') {
			return valuesGrid[i][0];
		}
	}
	// check vertical grids...
	for (var j=0; j <= 2; j++) {
		if (valuesGrid[0][j] === valuesGrid[1][j] && valuesGrid[0][j] === valuesGrid[2][j] && valuesGrid[0][j] !== '') {
			return valuesGrid[0][j];
		}
	}
	// check diagonal grids...
	if (valuesGrid[0][0] === valuesGrid[1][1] && valuesGrid[0][0] === valuesGrid[2][2] && valuesGrid[0][0] !== '') {
		return valuesGrid[0][0];
	}else if (valuesGrid[0][2] === valuesGrid[1][1] && valuesGrid[0][2] === valuesGrid[2][0] && valuesGrid[0][2] !== '') {
		return valuesGrid[0][2];
	}
	// Only after checking for a possible winning set of three grids, and in case of none such set of grids, do below...
	// check if any grid is empty...
	for (var i=0; i <= 2; i++) {
		for (var j=0; j <= 2; j++) {
			if (valuesGrid[i][j] === '') {
				return null;
			}
		}
	}
	// It is a draw if no winning set of grids is found horizontally, vertically or diagonally AND there is no empty grid...
	return 'draw';
}

function registerInfoFun(info) {
	canRestart = false;

	if (info === 'draw') {
		draw.innerHTML = parseInt(draw.innerHTML) + 1;
		restart.innerHTML = 'It is a Draw';
	} else if (info === 'won') {
		won.innerHTML = parseInt(won.innerHTML) + 1;
		restart.innerHTML = 'You Won';
	} else if (info === 'lost') {
		lost.innerHTML = parseInt(lost.innerHTML) + 1;
		restart.innerHTML = 'You Lost';
	}

	setTimeout(function() {
		grid0.innerHTML = '&nbsp;';
		grid1.innerHTML = '&nbsp;';
		grid2.innerHTML = '&nbsp;';
		grid3.innerHTML = '&nbsp;';
		grid4.innerHTML = '&nbsp;';
		grid5.innerHTML = '&nbsp;';
		grid6.innerHTML = '&nbsp;';
		grid7.innerHTML = '&nbsp;';
		grid8.innerHTML = '&nbsp;';

		valuesGrid = [
						['', '', ''],
						['', '', ''],
						['', '', '']
					];

		restart.innerHTML = 'Restart';

		canPlayerPlay = true;

		canRestart = true;
	}, 3000);
}

// life-line of this project...
// AI (min-max) for computer's turn...
function computerTurnFun() {
	var counter = 0;
	for(var i=0; i<3; i++) {
		for(var j=0; j<3; j++) {
			if(valuesGrid[i][j]===playerMark || valuesGrid[i][j]===computerMark) {
				counter += 1;
			}
		}
	}

	if(counter === 1) {
		return firstMoveFun();
	} else {
		for (var i=0; i <= 2; i++) {
			for (var j=0; j <= 2; j++) {
				if (valuesGrid[i][j] === '') {
					return [i, j];
				}
			}
		}
	}
}

function firstMoveFun() {
	if(valuesGrid[0][0]===playerMark || valuesGrid[0][2]===playerMark || valuesGrid[2][2]===playerMark || valuesGrid[2][0]===playerMark){
		return [1, 1];
	}else if(valuesGrid[0][1]===playerMark || valuesGrid[1][0]===playerMark){
		return [0, 0];
	}else if(valuesGrid[2][1]===playerMark || valuesGrid[1][2]===playerMark){
		return [2, 2];
	}else{
		return [2, 2];
	}
}