var allTags = document.querySelectorAll("*");
for(var i=0; i < allTags.length; i++) {
    allTags[i].style.margin = '0';
    allTags[i].style.padding = '0';
    allTags[i].style.border = '0';
}

document.body.style.backgroundColor = "transparent";
document.body.style.fontFamily = "'Quicksand', sans-serif";

var allButtons = document.querySelectorAll("button");
for(var i=0; i < allButtons.length; i++) {
    allButtons[i].style.margin = '1px';
    allButtons[i].style.width = '11%';
    allButtons[i].style.height = '9%';
    allButtons[i].style.fontSize = '1.2rem';
    allButtons[i].style.cursor = 'pointer';
}

var dialogContainer = document.getElementById("dialogContainer");
	var dialogHeader = document.getElementById("dialogHeader");
	var dialogBody = document.getElementById("dialogBody");
	var dialogfooter = document.getElementById("dialogfooter");
		var okButton = document.getElementById("okButton");
var defaultAlert = document.getElementById("defaultAlert");
var customAlert = document.getElementById("customAlert");

dialogContainer.style.padding = "10px";
dialogContainer.style.width = "30vw";
dialogContainer.style.backgroundColor = "#aaa";
dialogContainer.style.border = "7px solid #ccc";
dialogContainer.style.boxShadow = "0 20px 50px 0 #000, inset 0 0 10px 0 #000";
dialogContainer.style.borderRadius = "10px";
dialogContainer.style.position = "absolute";
dialogContainer.style.top = "-50%";
dialogContainer.style.left = "-50%";
dialogContainer.style.transform = "translateX(-50%) translateY(-50%)";
dialogContainer.style.webkitTransform = "translateX(-50%) translateY(-50%)";
dialogContainer.style.transition = "0.5s ease";

dialogHeader.style.padding = "5px";
dialogHeader.style.fontSize = "1.1rem";
dialogHeader.style.fontWeight = "900";
dialogHeader.style.backgroundColor = "#ccc";

dialogBody.style.padding = "20px";
dialogBody.style.fontSize = "1rem";
dialogBody.style.fontWeight = "900";

dialogfooter.style.textAlign = "center";
dialogfooter.style.fontSize = "1rem";

okButton.style.padding = "10px 20px";
okButton.style.backgroundColor = "#ccc";
okButton.style.borderRadius = "10px";
okButton.style.textDecoration = "none";
okButton.style.textAlign = "center";
okButton.style.fontHeight = "900";
okButton.style.cursor = "pointer";

defaultAlert.style.backgroundColor = "lightblue";
defaultAlert.style.borderRadius = "3px";
defaultAlert.style.position = "fixed";
defaultAlert.style.top = "30px";
defaultAlert.style.right = "20px";

customAlert.style.backgroundColor = "lightblue";
customAlert.style.borderRadius = "3px";
customAlert.style.position = "fixed";
customAlert.style.top = "110px";
customAlert.style.right = "20px";

var customAlertDialogBox = new function() {
	this.show = function(messageString, headerString) {
		dialogBody.textContent = messageString;
		dialogHeader.textContent = headerString;
		dialogContainer.style.top = "40%";
		dialogContainer.style.left = "50%";
	}
	this.close = function() {
		dialogContainer.style.top = "-50%";
		dialogContainer.style.left = "-50%";
	}
}

defaultAlert.onclick = function() {
	alert("This is the default alert dialog box of your browser. Click 'ok' to close this box.");
}

customAlert.onclick = function() {
	customAlertDialogBox.show("This is a custom alert dialog box built in JavaScript. Click 'OK' to close this box.", "Custom Alert Dialog Box");
}

okButton.onclick = function() {
	customAlertDialogBox.close();
}