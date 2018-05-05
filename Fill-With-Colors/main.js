window.onload = function() {
	var fillColors = document.getElementById("fillColors");
	var elem = "";
	var r = 0;
	var g = 0;
	var b = 0;
	var dimension = 0;
	var top = 0;
	var left = 0;
	var start = null;
	var isFunctional = true;

	startColor();

	fillColors.onmousemove = function() {
		clearInterval(start);
		clearAll();
	}

	function startColor() {
		start = setInterval(function() {
			getColors();
		} , 100);
	}

	function getColors() {
		top = Math.floor(Math.random() * (100 + 1)); // generate a random number between 0 and 100
		left = Math.floor(Math.random() * (100 + 1)); // generate a random number between 0 and 100
		dimension = Math.floor(Math.random() * (150 - 20 + 1)) + 20; // generate a random number between 20 and 150
		r = Math.floor(Math.random() * (255 + 1)); // generate a random number between 0 and 255
		g = Math.floor(Math.random() * (255 + 1)); // generate a random number between 0 and 255
		b = Math.floor(Math.random() * (255 + 1)); // generate a random number between 0 and 255
		elem = "<div style='background-color:rgb("+r+","+g+","+b+"); box-shadow:0 0 2px rgb("+r+","+g+","+b+"); width:"+dimension+"px; height:"+dimension+"px; top:"+top+"%; left:"+left+"%;'></div>";
		fillColors.innerHTML += elem;

	}

	function clearAll() {
		var allDivs = fillColors.getElementsByTagName("div");
		for (var i=0; i<allDivs.length; i++) {
			allDivs[i].style.width = "0";
			allDivs[i].style.height = "0";
		}
		setTimeout(function() {
			fillColors.innerHTML = "";
		} , 500);
		setTimeout(function() {
			if (isFunctional) {
				startColor();
				isFunctional = false;
				setTimeout(function() {
					isFunctional = true;
				} , 2000);
			}
		} , 600);
	}
}