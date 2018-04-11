window.onload = function() {
	var preloader = document.getElementById("preloader");
		var animation = document.getElementById('animation');

	var allTags = document.querySelectorAll("*");

	for(var i=0; i < allTags.length; i++) {
	    allTags[i].style.margin = '0';
	    allTags[i].style.padding = '0';
	    allTags[i].style.border = '0';
	}

	preloader.style.margin = '0 auto';
	preloader.style.marginTop = '40vh';
	preloader.style.width = '2px';
	preloader.style.height = '70px';

	animation.style.width = '100%';
	animation.style.backgroundColor = '#555';
	animation.style.boxShadow = '0 0 15px 0 #000';

	var heightVar = 0;
	var rotationVar = 0;
	setInterval(function(){
		heightVar += 10;
		animation.style.height = heightVar + '%';

		if(heightVar===100) {
			heightVar = 0;
			rotationVar += 40;
			preloader.style.transform = 'rotate(' + rotationVar + 'deg)';
		}
	}, 1);
}