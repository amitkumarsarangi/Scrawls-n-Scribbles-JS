var imageContainer = document.getElementById("imageContainer");
	var image = document.getElementById("myImage");
	var dialog = document.getElementById("myDialog");

var dropSound = new Audio('https://amitkumarsarangi.github.io/assets/sounds/dropSound.wav');

var contactMeToggle = document.getElementById("contactMeToggle");
var contactMeContainer = document.getElementById("contactMeContainer");

var dialogArr = ['How are you today?',
				'I appreciate you for visiting my github pages.',
				'What are your plans today? Thanks for visiting my github pages.',
				'Wanna say something? Or get in touch? Use the contact form by clicking on the mail icon in the top right corner.',
				'Use the contact form on the home page to send me a message.',
				'Eat. Sleep. Code. Repeat.',
				'I have written a post on why should you learn to code. If you are new to coding, please read it. You will find the link after you enter the site.',
				'I have written a post on searching efficiently on Google. Please read it. You will find the link after you enter the site.',
				'I built this site after going through the front-end curriculum of freeCodeCamp. This site also showcases all the projects built in order to get the front end certification.',
				'Do see some of my projects on front-end development after you enter the site.',
				'I joined freeCodeCamp out of curiousity to see what it has to offer. I am really glad I joined. Do join even if you are a seasoned coder.',
				'HTML5',
				'CSS3',
				'JavaScript',
				'Python'
				];
var isDialogArrActive = false;

window.onload = function() {
	dialog.style.display = 'none';

	setTimeout(function(){
		imageContainer.style.top = '25vh';
		imageContainer.style.left = '25vw';
	}, 500);

	setTimeout(function(){
		dropSound.play();
		dialog.style.display = 'block';
		isDialogArrActive = true;
	}, 1900);

	displayDialogAutoFun();

	var html5 = document.getElementById("html5");
	var css3 = document.getElementById("css3");
	var javascript = document.getElementById("javascript");
	setTimeout(function(){
		html5.style.bottom = '55px';
	}, 2000);
	setTimeout(function(){
		html5.style.bottom = '15px';
	}, 2501);
	setTimeout(function(){
		css3.style.bottom = '55px';
	}, 2400);
	setTimeout(function(){
		css3.style.bottom = '15px';
	}, 2901);
	setTimeout(function(){
		javascript.style.bottom = '55px';
	}, 2900);
	setTimeout(function(){
		javascript.style.bottom = '15px';
	}, 3401);
}

html5.onclick = function() {
	html5.style.bottom = '35px';
	css3.style.bottom = '0';
	javascript.style.bottom = '0';
}
css3.onclick = function() {
	html5.style.bottom = '0';
	css3.style.bottom = '35px';
	javascript.style.bottom = '0';
}
javascript.onclick = function() {
	html5.style.bottom = '0';
	css3.style.bottom = '0';
	javascript.style.bottom = '35px';
}

image.onmouseover = function() {
	if(isDialogArrActive){
		clearInterval(displayDialogAutoFunInterval);
		prepDisplayDialogFun();
	}
}
image.onmouseout = function() {
	if(isDialogArrActive){
		displayDialogAutoFun();
	}
}
image.onclick = function() {
	if(isDialogArrActive){
		clearInterval(displayDialogAutoFunInterval);
		prepDisplayDialogFun();
	}
}
contactMeToggle.onclick = function() {
	dropSound.play();
	if(contactMeContainer.style.display === 'block') {
		contactMeContainer.innerHTML = "";
		contactMeContainer.style.display = 'none';
	} else {
		var contactMeContentArray = ['<form method="POST" action="https://formspree.io/amitsarangi44@gmail.com">'
									, '<p><input type="text" name="fullName" placeholder="your full name" size="40" required></p>'
									, '<p><input type="email" name="emailID" placeholder="your email id" size="40" required></p>'
									, '<p><input type="url" name="webPage" placeholder="your web page" size="40"></p>'
									, '<p><textarea name="messageSubject" placeholder="subject" rows="1" cols="35"></textarea></p>'
									, '<p><textarea name="message" placeholder="your message" rows="4" cols="35"></textarea></p>'
									, '<p><button type="submit">Submit</button></p>'
									, '</form>'
									];
		var temp = "";
		for (var i = 0 ; i < contactMeContentArray.length ; i++) {
			temp += contactMeContentArray[i];
		}
		contactMeContainer.innerHTML = temp;
		contactMeContainer.style.display = 'block';
	}
}

// All function declarations below this line...
var displayDialogAutoFunInterval = null;
function displayDialogAutoFun() {
	displayDialogAutoFunInterval = setInterval(function(){
		prepDisplayDialogFun();
	}, 11000);
}

function prepDisplayDialogFun() {
	dialog.style.display = 'block';
	var idx = Math.floor(Math.random() * dialogArr.length);
	if(dialogArr[idx].length<=15) {
		dialog.style.width = '20vw';
	} else if(dialogArr[idx].length<=75) {
		dialog.style.width = '35vw';
	} else {
		dialog.style.width = '50vw';
	}

	displayDialogFun(dialogArr[idx]);
}

function displayDialogFun(str) {
	if(str==='HTML5' || str==='CSS3' || str==='JavaScript' || str==='Python') {
		dialog.innerHTML = '<i style="color:red; font-size:30px;" class="fa fa-heart"></i> ' + str;
	} else {
		dialog.innerHTML = str;
	}
}