var preloader = document.getElementById('preloader');
var dividerMid = document.getElementById('dividerMid');

window.onload = function() {
	dividerMid.style.width = '100%';
	dividerMid.style.height = '1px';
	dividerMid.style.backgroundColor = 'crimson';
	dividerMid.style.marginTop = '50vh';

	preloader.style.width = '4px';
	preloader.style.height = '4px';
	preloader.style.backgroundColor = 'forestgreen';
	preloader.style.borderRadius = '50%';
	preloader.style.boxShadow = '0 0 2px 1px forestgreen';
	preloader.style.position = 'fixed';
	preloader.style.top = '45vh';
	preloader.style.left = '0';
	preloader.style.zIndex = '100';

	startMovingDotFun();

	function startMovingDotFun() {
		setTimeout(function() {
			preloader.style.transition = '0.1s linear';
			startMovingDotFun1();
		}, 10);
	}

	var left = 0;
	var top = 45;

	function startMovingDotFun1() {
		var x = setInterval(function() {
			left += 1;
			if(left>110) {
				console.log(left, top);
				clearInterval(x);
				resetFun();
			}
			if(top == 55) {
				clearInterval(x);
				startMovingDotFun2();
			} else {
				top += 1;
			}
			moveDotFun(left, top);
		}, 99);
	}

	function startMovingDotFun2() {
		var x = setInterval(function() {
			left += 1;
			if(top == 45) {
				clearInterval(x);
				startMovingDotFun1();
			} else {
				top -= 1;
			}
			moveDotFun(left, top);
		}, 99);
	}

	function moveDotFun(leftMove, topMove) {
		setTimeout(function() {
			preloader.style.left = left+'vw';
			preloader.style.top = top+'vh';
		}, 1);
	}

	function resetFun() {
		setTimeout(function() {
			preloader.style.display = 'none';
		}, 1);
		setTimeout(function() {
			preloader.style.left = '0';
			preloader.style.top = '45vh';
			left = 0;
			top = 45;
		}, 2);
		setTimeout(function() {
			preloader.style.display = 'block';
			startMovingDotFun();
		}, 3);
	}
}