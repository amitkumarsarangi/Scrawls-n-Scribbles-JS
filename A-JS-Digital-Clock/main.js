window.onload = function() {

	var allTags = document.querySelectorAll("*");
	for(var i=0; i < allTags.length; i++) {
	    allTags[i].style.margin = '0';
	    allTags[i].style.padding = '0';
	    allTags[i].style.border = '0';
	}

	document.body.style.backgoundColor = 'transparent';
	document.body.style.color = '#ffffff';
	document.body.style.fontFamily = "'Orbitron', sans-serif";

	var allHeaderTags = document.querySelectorAll("header");
	allHeaderTags[0].style.paddingTop = '5vh';
	allHeaderTags[0].style.paddingRight = '5vw';
	allHeaderTags[0].style.width = '95vw';
	allHeaderTags[0].style.height = '20vh';
	allHeaderTags[0].style.fontSize = '5vw';
	allHeaderTags[0].style.textAlign = 'right';
	allHeaderTags[0].style.backgroundColor = '#555555';

	var digitalClock = document.getElementById('digitalClock');
		var time = document.getElementById('time');
		var extendTime = document.getElementById('extendTime');
	digitalClock.style.padding = '10px 15px';
	digitalClock.style.width = '300px';
	digitalClock.style.height = '200px';
	digitalClock.style.color = '#555555';
	digitalClock.style.textAlign = 'center';
	digitalClock.style.borderRadius = '10px';
	digitalClock.style.position = 'absolute';
	digitalClock.style.bottom = '2vw';
	digitalClock.style.left = '2vw';
	digitalClock.style.boxShadow = '0 0 5px 2px #555555';
	time.style.paddingTop = '20%';
	time.style.fontSize = '50px';
	extendTime.style.paddingTop = '22%';
	extendTime.style.fontSize = '22px';

	printTimeFun();

	setInterval(printTimeFun, 1000);

	function printTimeFun() {

		var dd = new Date();
		var hr = dd.getHours();
	    var min = dd.getMinutes();
	    var sec = dd.getSeconds();
	    var day = dd.getDay();
	    var date = dd.getDate();
	    var month = dd.getMonth();
	    var year = dd.getFullYear();

	    switch (day) {
	    	case 0:
                day = "Sunday";
                break;
            case 1:
                day = "Monday";
                break;
            case 2:
                day = "Tuesday";
                break;
            case 3:
                day = "Wednesday";
                break;
            case 4:
                day = "Thursday";
                break;
            case 5:
                day = "Friday";
                break;
            case 6:
                day = "Saturday";
                break;
	    }

	    if(hr <= 9) {
	    	hr = "0" + hr;
	    }

	    if(min <= 9) {
	    	min = "0" + min;
	    }

	    if(sec <= 9) {
	    	sec = "0" + sec;
	    }

	    month += 1;

	    time.innerHTML = hr + ":" + min + ":" + sec;

	    extendTime.innerHTML = day + ", " + date + "-" + month + "-" + year;
	}
}