let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let message = document.getElementById('message');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer.value == "" || attempt.value == "") {
    	setHiddenFields();
    }
    setMessage(" ");

    // Check to see if the user input is a valid attempt
    if(!validateInput(input.value)) {
    	return;
    } else { // Increase attempt value if attempt is valid
    	attempt.value++;
    }

    // Check user input against answer
    // Display results - try again OR Lose OR Win
    if(getResults(input.value)) {
        setMessage('You Win! :)');
        showAnswer(true);
        showReplay();
    } else if(attempt.value >= 10) {
        setMessage('You Lose! :(');
        showAnswer(false);
        showReplay();
    } else {
        setMessage('Incorrect, try again.');
    }
}

//implement new functions here
function setHiddenFields() {
	answer.value = Math.floor(Math.random() * 10000).toString();
	while(answer.value.length < 4) {
		answer.value = "0" + answer.value;
	}
	attempt.value = 0;
}

function setMessage(param) {
	message.innerHTML = param;
}

function validateInput(param) {
	if(param.length == 4) {
		return true;
	}
	setMessage("Guesses must be exactly 4 characters long.");
	return false;
}

function getResults(param){
    var correct = 0;
    var html = '<div class="row"><span class="col-md-6">' + param + '</span><div class="col-md-6">';
    for(i = 0; i < param.length; i++) {
        if(param.charAt(i) == answer.value.charAt(i)) {
            html += '<span class="glyphicon glyphicon-ok"></span>';
            correct++;
        } else if (answer.value.indexOf(param.charAt(i)) > -1) {
            html += '<span class="glyphicon glyphicon-transfer"></span>';
        } else {
            html += '<span class="glyphicon glyphicon-remove"></span>';
        }
    }
    html += '</div></div>';

    document.getElementById('results').innerHTML += html;

    if(correct == param.length) {
        return true;
    } else {
        return false;
    }
}

function showAnswer(param){
    var code = document.getElementById('code');
    if(param) {
        code.className += " success";
    } else {
        code.className += " failure";
    }
    code.innerHTML = answer.value;
}

function showReplay(){
    document.getElementById('guessing-div').style.display = "none";
    document.getElementById('replay-div').style.display = "block";
}