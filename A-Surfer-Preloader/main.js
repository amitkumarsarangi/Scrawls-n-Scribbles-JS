var allTags = document.querySelectorAll("*");
for(var i=0; i < allTags.length; i++) {
    allTags[i].style.margin = '0';
    allTags[i].style.padding = '0';
    allTags[i].style.border = '0';
}

document.body.style.backgroundColor = "transparent";
document.body.style.webkitUserSelect = "none"; /* Chrome, Opera, Safari */
document.body.style.mozUserSelect = "none"; /* Firefox 2+ */
document.body.style.msUserSelect = "none"; /* IE 10+ */
document.body.style.userSelect = "none"; /* Standard syntax */

var allDivs = document.querySelectorAll("div");
for(var i=0; i < allDivs.length; i++) {
	allDivs[i].style.webkitTransition = "2s linear";
	allDivs[i].style.mozTransition = "2s linear";
	allDivs[i].style.oTransition = "2s linear";
    allDivs[i].style.transition = "2s linear";
    allDivs[i].style.position = "fixed";
	allDivs[i].style.top = "35%";
	allDivs[i].style.left = "47%";
}

var allImgs = document.querySelectorAll("img");
for(var i=0; i < allImgs.length; i++) {
	allImgs[i].style.width = "100px";
}

var surfer = document.getElementById("surfer");

setTimeout(function(){
	moveForwardFun();
	rotateForwardFun();
}, 500);

function moveForwardFun() {
	surfer.style.top = '37%';
	surfer.style.left = '45%';

	setTimeout(function(){
		moveBackwardFun();
	}, 2100);
}

function moveBackwardFun() {
	surfer.style.top = '35%';
	surfer.style.left = '47%';

	setTimeout(function(){
		moveForwardFun();
	}, 2100);
}

function rotateForwardFun() {
	surfer.style.transform = 'rotate(-10deg)';

	setTimeout(function(){
		rotateBackwardFun();
	}, 1900);
}

function rotateBackwardFun() {
	surfer.style.transform = 'rotate(50deg)';

	setTimeout(function(){
		rotateForwardFun();
	}, 1900);
}