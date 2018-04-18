$(document).ready(function() {

	var isScrollerON = false; //this value assignment must always be false...
	var scroller = 0;

	$('#smoothScrollerSwitch').on('click', function() {
		if($('#smoothScrollerSwitch').text() == 'SmoothScroller OFF' && !isScrollerON) {
			$('#smoothScrollerSwitch').text('SmoothScroller ON');
			isScrollerON = !isScrollerON;
		} else {
			$('#smoothScrollerSwitch').text('SmoothScroller OFF');
			isScrollerON = !isScrollerON;
		}
	});

	$('#navigationOne').on('click', function() {
		if(isScrollerON) {
			scroller = $('#divisionOne').offset().top;
			$('html, body').animate({scrollTop: scroller}, 1234);
		}
	});

	$('#navigationTwo').on('click', function() {
		if(isScrollerON) {
			scroller = $('#divisionTwo').offset().top;
			$('html, body').animate({scrollTop: scroller}, 1234);
		}
	});

	$('#navigationThree').on('click', function() {
		if(isScrollerON) {
			scroller = $('#divisionThree').offset().top;
			$('html, body').animate({scrollTop: scroller}, 1234);
		}
	});

	$('#navigationFour').on('click', function() {
		if(isScrollerON) {
			scroller = $('#divisionFour').offset().top;
			$('html, body').animate({scrollTop: scroller}, 1234);
		}
	});

	$('#navigationFive').on('click', function() {
		if(isScrollerON) {
			scroller = $('#divisionFive').offset().top;
			$('html, body').animate({scrollTop: scroller}, 1234);
		}
	});

});