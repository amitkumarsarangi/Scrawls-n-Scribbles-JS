var tttSection = document.getElementById("tttSection");
	var tttBoxContainer = document.getElementById("tttBoxContainer");
		var tttBox0Z = document.getElementById("tttBox0Z");
		var tttBox1Z = document.getElementById("tttBox1Z");
		var tttBox2Z = document.getElementById("tttBox2Z");
		var tttBox3Z = document.getElementById("tttBox3Z");
		var tttBox4Z = document.getElementById("tttBox4Z");
		var tttBox5Z = document.getElementById("tttBox5Z");
		var tttBox6Z = document.getElementById("tttBox6Z");
		var tttBox7Z = document.getElementById("tttBox7Z");
		var tttBox8Z = document.getElementById("tttBox8Z");
		var tttBox0 = document.getElementById("tttBox0");
		var tttBox1 = document.getElementById("tttBox1");
		var tttBox2 = document.getElementById("tttBox2");
		var tttBox3 = document.getElementById("tttBox3");
		var tttBox4 = document.getElementById("tttBox4");
		var tttBox5 = document.getElementById("tttBox5");
		var tttBox6 = document.getElementById("tttBox6");
		var tttBox7 = document.getElementById("tttBox7");
		var tttBox8 = document.getElementById("tttBox8");
	var tttScoreContainer = document.getElementById("tttScoreContainer");
		var whoIsWinner = document.getElementById("whoIsWinner");
		var iScored = document.getElementById("iScored");
		var uScored = document.getElementById("uScored");
		var draws = document.getElementById("draws");
var iGoFirst = document.getElementById("iGoFirst");
var uGoFirst = document.getElementById("uGoFirst");
var restart = document.getElementById("restart");
	var col1 =document.getElementById("col1");
	var col2 =document.getElementById("col2");
	var col3 =document.getElementById("col3");
	var row1 =document.getElementById("row1");
	var row2 =document.getElementById("row2");
	var row3 =document.getElementById("row3");
	var dia1 =document.getElementById("dia1");
	var dia2 =document.getElementById("dia2");
//All get elements variables above this line... ... ...
var tttArr = [	undefined, undefined, undefined,
				undefined, undefined, undefined,
				undefined, undefined, undefined	]; //array to store values to be checked...
var iAm = "X";
var uAre = "O";
var canIPlay;
var userScore = 0;
var compScore = 0;
var drawScore = 0;
//all global variables above this line... ... ...
iGoFirst.onclick = function() {
	console.log("iGoFirst");
	canIPlay = "yes";
	iAm = "X";
	uAre = "O";
	setDisplayBlockFun();
	setDisplayNoneFun();
}
uGoFirst.onclick = function() {
	console.log("uGoFirst");
	canIPlay = "no";
	iAm = "O";
	uAre = "X";
	setDisplayBlockFun();
	setDisplayNoneFun();
	yourTurnToPlayFun(); //call computer to play first...
}
restart.onclick = function() { //if restart button clicked... reload page...
	location.reload();
}
tttBox0Z.onclick = function() {
	console.log("tttBox0Z.onclick");
	if (canIPlay==="yes") {
		canIPlay = "no"; //make user input impossible...
		tttBox0.innerHTML = iAm; //put "X" or "O" in the box...
		tttArr[0] = iAm; //put "X" or "O" in the array corresponding to box's position...
		tttBox0Z.style.display = "none";
		checkWinnerFunOne();
	}
}
tttBox1Z.onclick = function() {
	console.log("tttBox1Z.onclick");
	if (canIPlay==="yes") {
		canIPlay = "no";
		tttBox1.innerHTML = iAm;
		tttArr[1] = iAm;
		tttBox1Z.style.display = "none";
		checkWinnerFunOne();
	}
}
tttBox2Z.onclick = function() {
	console.log("tttBox2Z.onclick");
	if (canIPlay==="yes") {
		canIPlay = "no";
		tttBox2.innerHTML = iAm;
		tttArr[2] = iAm;
		tttBox2Z.style.display = "none";
		checkWinnerFunOne();
	}
}
tttBox3Z.onclick = function() {
	console.log("tttBox3Z.onclick");
	if (canIPlay==="yes") {
		canIPlay = "no";
		tttBox3.innerHTML = iAm;
		tttArr[3] = iAm;
		tttBox3Z.style.display = "none";
		checkWinnerFunOne();
	}
}
tttBox4Z.onclick = function() {
	console.log("tttBox4Z.onclick");
	if (canIPlay==="yes") {
		canIPlay = "no";
		tttBox4.innerHTML = iAm;
		tttArr[4] = iAm;
		tttBox4Z.style.display = "none";
		checkWinnerFunOne();
	}
}
tttBox5Z.onclick = function() {
	console.log("tttBox5Z.onclick");
	if (canIPlay==="yes") {
		canIPlay = "no";
		tttBox5.innerHTML = iAm;
		tttArr[5] = iAm;
		tttBox5Z.style.display = "none";
		checkWinnerFunOne();
	}
}
tttBox6Z.onclick = function() {
	console.log("tttBox6Z.onclick");
	if (canIPlay==="yes") {
		canIPlay = "no";
		tttBox6.innerHTML = iAm;
		tttArr[6] = iAm;
		tttBox6Z.style.display = "none";
		checkWinnerFunOne();
	}
}
tttBox7Z.onclick = function() {
	console.log("tttBox7Z.onclick");
	if (canIPlay==="yes") {
		canIPlay = "no";
		tttBox7.innerHTML = iAm;
		tttArr[7] = iAm;
		tttBox7Z.style.display = "none";
		checkWinnerFunOne();
	}
}
tttBox8Z.onclick = function() {
	console.log("tttBox8Z.onclick");
	if (canIPlay==="yes") {
		canIPlay = "no";
		tttBox8.innerHTML = iAm;
		tttArr[8] = iAm;
		tttBox8Z.style.display = "none";
		checkWinnerFunOne();
	}
}
//All function declarations below this line... ... ...
function checkWinnerFunOne() {
	console.log("checkWinnerFunOne");
	if (tttArr[0]===iAm&&tttArr[1]===iAm&&tttArr[2]===iAm) {
		row1.style.display = "block";
		doIfUserWinsFun();
		return;
	} else if (tttArr[0]===uAre&&tttArr[1]===uAre&&tttArr[2]===uAre) {
		row1.style.display = "block";
		doIfCompWinsFun();
		return;

	} else if (tttArr[3]===iAm&&tttArr[4]===iAm&&tttArr[5]===iAm) {
		row2.style.display = "block";
		doIfUserWinsFun();
		return;
	} else if (tttArr[3]===uAre&&tttArr[4]===uAre&&tttArr[5]===uAre) {
		row2.style.display = "block";
		doIfCompWinsFun();
		return;

	} else if (tttArr[6]===iAm&&tttArr[7]===iAm&&tttArr[8]===iAm) {
		row3.style.display = "block";
		doIfUserWinsFun();
		return;
	} else if (tttArr[6]===uAre&&tttArr[7]===uAre&&tttArr[8]===uAre) {
		row3.style.display = "block";
		doIfCompWinsFun();
		return;

	} else if (tttArr[0]===iAm&&tttArr[3]===iAm&&tttArr[6]===iAm) {
		col1.style.display = "block";
		doIfUserWinsFun();
		return;
	} else if (tttArr[0]===uAre&&tttArr[3]===uAre&&tttArr[6]===uAre) {
		col1.style.display = "block";
		doIfCompWinsFun();
		return;

	} else if (tttArr[1]===iAm&&tttArr[4]===iAm&&tttArr[7]===iAm) {
		col2.style.display = "block";
		doIfUserWinsFun();
		return;
	} else if (tttArr[1]===uAre&&tttArr[4]===uAre&&tttArr[7]===uAre) {
		col2.style.display = "block";
		doIfCompWinsFun();
		return;

	} else if (tttArr[2]===iAm&&tttArr[5]===iAm&&tttArr[8]===iAm) {
		col3.style.display = "block";
		doIfUserWinsFun();
		return;
	} else if (tttArr[2]===uAre&&tttArr[5]===uAre&&tttArr[8]===uAre) {
		col3.style.display = "block";
		doIfCompWinsFun();
		return;

	} else if (tttArr[0]===iAm&&tttArr[4]===iAm&&tttArr[8]===iAm) {
		dia2.style.display = "block";
		doIfUserWinsFun();
		return;
	} else if (tttArr[0]===uAre&&tttArr[4]===uAre&&tttArr[8]===uAre) {
		dia2.style.display = "block";
		doIfCompWinsFun();
		return;

	} else if (tttArr[2]===iAm&&tttArr[4]===iAm&&tttArr[6]===iAm) {
		dia1.style.display = "block";
		doIfUserWinsFun();
		return;
	} else if (tttArr[2]===uAre&&tttArr[4]===uAre&&tttArr[6]===uAre) {
		dia1.style.display = "block";
		doIfCompWinsFun();
		return;

	} else if (tttArr[0]!==undefined&&
			tttArr[1]!==undefined&&
			tttArr[2]!==undefined&&
			tttArr[3]!==undefined&&
			tttArr[4]!==undefined&&
			tttArr[5]!==undefined&&
			tttArr[6]!==undefined&&
			tttArr[7]!==undefined&&
			tttArr[8]!==undefined) {
		doIfItIsADraw();
		return;
	}
	yourTurnToPlayFun();
}
function checkWinnerFunTwo() {
	console.log("checkWinnerFunTwo");
	if (tttArr[0]===iAm&&tttArr[1]===iAm&&tttArr[2]===iAm) {
		row1.style.display = "block";
		doIfUserWinsFun();
		return;
	} else if (tttArr[0]===uAre&&tttArr[1]===uAre&&tttArr[2]===uAre) {
		row1.style.display = "block";
		doIfCompWinsFun();
		return;

	} else if (tttArr[3]===iAm&&tttArr[4]===iAm&&tttArr[5]===iAm) {
		row2.style.display = "block";
		doIfUserWinsFun();
		return;
	} else if (tttArr[3]===uAre&&tttArr[4]===uAre&&tttArr[5]===uAre) {
		row2.style.display = "block";
		doIfCompWinsFun();
		return;

	} else if (tttArr[6]===iAm&&tttArr[7]===iAm&&tttArr[8]===iAm) {
		row3.style.display = "block";
		doIfUserWinsFun();
		return;
	} else if (tttArr[6]===uAre&&tttArr[7]===uAre&&tttArr[8]===uAre) {
		row3.style.display = "block";
		doIfCompWinsFun();
		return;

	} else if (tttArr[0]===iAm&&tttArr[3]===iAm&&tttArr[6]===iAm) {
		col1.style.display = "block";
		doIfUserWinsFun();
		return;
	} else if (tttArr[0]===uAre&&tttArr[3]===uAre&&tttArr[6]===uAre) {
		col1.style.display = "block";
		doIfCompWinsFun();
		return;

	} else if (tttArr[1]===iAm&&tttArr[4]===iAm&&tttArr[7]===iAm) {
		col2.style.display = "block";
		doIfUserWinsFun();
		return;
	} else if (tttArr[1]===uAre&&tttArr[4]===uAre&&tttArr[7]===uAre) {
		col2.style.display = "block";
		doIfCompWinsFun();
		return;

	} else if (tttArr[2]===iAm&&tttArr[5]===iAm&&tttArr[8]===iAm) {
		col3.style.display = "block";
		doIfUserWinsFun();
		return;
	} else if (tttArr[2]===uAre&&tttArr[5]===uAre&&tttArr[8]===uAre) {
		col3.style.display = "block";
		doIfCompWinsFun();
		return;

	} else if (tttArr[0]===iAm&&tttArr[4]===iAm&&tttArr[8]===iAm) {
		dia2.style.display = "block";
		doIfUserWinsFun();
		return;
	} else if (tttArr[0]===uAre&&tttArr[4]===uAre&&tttArr[8]===uAre) {
		dia2.style.display = "block";
		doIfCompWinsFun();
		return;

	} else if (tttArr[2]===iAm&&tttArr[4]===iAm&&tttArr[6]===iAm) {
		dia1.style.display = "block";
		doIfUserWinsFun();
		return;
	} else if (tttArr[2]===uAre&&tttArr[4]===uAre&&tttArr[6]===uAre) {
		dia1.style.display = "block";
		doIfCompWinsFun();
		return;

	} else if (tttArr[0]!==undefined&&
			tttArr[1]!==undefined&&
			tttArr[2]!==undefined&&
			tttArr[3]!==undefined&&
			tttArr[4]!==undefined&&
			tttArr[5]!==undefined&&
			tttArr[6]!==undefined&&
			tttArr[7]!==undefined&&
			tttArr[8]!==undefined) {
		doIfItIsADraw();
		return;
	}
	canIPlay = "yes"; //at last make the user input possible...
}

function giveAFairMoveFun() {
	var counter = 0;
	var getIndices = [];

	for(var i=0; i<tttArr.length; i++) {
		if(tttArr[i] === uAre || tttArr[i] === iAm) {
			counter += 1;
			getIndices.push(i);
		}
	}

	if(counter===0) { //computer plays first...
		return Math.floor((Math.random() * 9));
	}
	else if(counter===1) {
		while(isNaN(getIndices[1])) {
			var x = Math.floor((Math.random() * 9));
			if(getIndices[0] !== x) {
				return x;
			}
		}
	}
	else if(counter===2) {
		while(isNaN(getIndices[2])) {
			var x = Math.floor((Math.random() * 9));
			if(getIndices[0] !== x && getIndices[1] !== x) {
				return x;
			}
		}
	}
	else if(counter===3) {
		while(isNaN(getIndices[3])) {
			var x = Math.floor((Math.random() * 9));
			if(getIndices[0] !== x && getIndices[1] !== x && getIndices[2] !== x) {
				return x;
			}
		}
	}
	else if(counter===4) {
		while(isNaN(getIndices[4])) {
			var x = Math.floor((Math.random() * 9));
			if(getIndices[0] !== x && getIndices[1] !== x && getIndices[2] !== x && getIndices[3] !== x) {
				return x;
			}
		}
	}
	else if(counter===5) {
		while(isNaN(getIndices[5])) {
			var x = Math.floor((Math.random() * 9));
			if(getIndices[0] !== x && getIndices[1] !== x && getIndices[2] !== x && getIndices[3] !== x && getIndices[4] !== x) {
				return x;
			}
		}
	}
	else if(counter===6) {
		while(isNaN(getIndices[6])) {
			var x = Math.floor((Math.random() * 9));
			if(getIndices[0] !== x && getIndices[1] !== x && getIndices[2] !== x && getIndices[3] !== x && getIndices[4] !== x && getIndices[5] !== x) {
				return x;
			}
		}
	}
	else if(counter===7) {
		while(isNaN(getIndices[7])) {
			var x = Math.floor((Math.random() * 9));
			if(getIndices[0] !== x && getIndices[1] !== x && getIndices[2] !== x && getIndices[3] !== x && getIndices[4] !== x && getIndices[5] !== x && getIndices[6] !== x) {
				return x;
			}
		}
	}
	else if(counter===8) {
		while(isNaN(getIndices[8])) {
			var x = Math.floor((Math.random() * 9));
			if(getIndices[0] !== x && getIndices[1] !== x && getIndices[2] !== x && getIndices[3] !== x && getIndices[4] !== x && getIndices[5] !== x && getIndices[6] !== x && getIndices[7] !== x) {
				return x;
			}
		}
	}
}

// function giveAFairMoveFun() { //this function will return a fair move...
// 	console.log("giveAFairMoveFun");
// 	var arrTemp = [];
// 	for (var i=0; i<tttArr.length; i++) {
// 		if (tttArr[i] === undefined) {
// 			arrTemp.push(i);
// 		}
// 	}
// 	return arrTemp[0]; //returns an index...
// }

function yourTurnToPlayFun() { //this function will enable the computer to play...
	console.log("yourTurnToPlayFun");
	var getMoveIndex = giveAFairMoveFun(); //call this function...
	if (getMoveIndex!==undefined) {
		tttArr[getMoveIndex] = uAre;
		document.getElementById("tttBox"+getMoveIndex).innerHTML = uAre;
		document.getElementById("tttBox"+getMoveIndex+"Z").style.display = "none";
	}
	checkWinnerFunTwo(); //call this function...
}
function setDisplayNoneFun() {
	console.log("setDisplayNoneFun");
	row1.style.display= row2.style.display= row3.style.display= col1.style.display= col2.style.display= col3.style.display= dia1.style.display= dia2.style.display= iGoFirst.style.display = uGoFirst.style.display = "none";
}
function setDisplayBlockFun() {
	console.log("setDisplayBlockFun");
	tttBoxContainer.style.display = tttScoreContainer.style.display = restart.style.display = "block";
}
function doIfUserWinsFun() {
	console.log("doIfUserWinsFun");
	setTimeout(function() {
		whoIsWinner.innerHTML = "You Won!!!";
		userScore += 1;
		uScored.innerHTML = userScore;
		tttBox0Z.style.display = tttBox1Z.style.display = tttBox2Z.style.display = tttBox3Z.style.display = tttBox4Z.style.display = tttBox5Z.style.display = tttBox6Z.style.display = tttBox7Z.style.display = tttBox8Z.style.display = "block";
		tttArr = [	undefined, undefined, undefined,
					undefined, undefined, undefined,
					undefined, undefined, undefined	];
		setDisplayNoneFun();
		canIPlay = "yes";
	}, 1500);
}
function doIfCompWinsFun() {
	console.log("doIfCompWinsFun");
	setTimeout(function() {
		whoIsWinner.innerHTML = "You Lost!!!";
		compScore += 1;
		iScored.innerHTML = compScore;
		tttBox0Z.style.display = tttBox1Z.style.display = tttBox2Z.style.display = tttBox3Z.style.display = tttBox4Z.style.display = tttBox5Z.style.display = tttBox6Z.style.display = tttBox7Z.style.display = tttBox8Z.style.display = "block";
		tttArr = [	undefined, undefined, undefined,
					undefined, undefined, undefined,
					undefined, undefined, undefined	];
		setDisplayNoneFun();
		yourTurnToPlayFun();
	}, 1500);
}
function doIfItIsADraw() {
	whoIsWinner.innerHTML = "It is a Draw!";
	drawScore += 1;
	draws.innerHTML = drawScore;
	restart.style.display = "none";
	tttBox0Z.style.display = tttBox1Z.style.display = tttBox2Z.style.display = tttBox3Z.style.display = tttBox4Z.style.display = tttBox5Z.style.display = tttBox6Z.style.display = tttBox7Z.style.display = tttBox8Z.style.display = iGoFirst.style.display = uGoFirst.style.display = "block";
	tttArr = [	undefined, undefined, undefined,
				undefined, undefined, undefined,
				undefined, undefined, undefined	];
	canIPlay = "no";
}