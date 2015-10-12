window.onload = function() {
	init();
}

function init() {

	var nextButton = document.getElementById("nextButton");
	var videoContainer = document.getElementById("videoContainer");

	var navButtonOne = document.getElementById("navButtonOne");
	var navButtonTwo = document.getElementById("navButtonTwo");

	var alreadyPlayed = [];

	function randomVideo() {
		var videoIndex = Math.floor(Math.random() * videoArr.length);

		while (alreadyPlayed.indexOf(videoIndex) > -1) {
			var videoIndex = Math.floor(Math.random() * videoArr.length);
		}

		alreadyPlayed.push(videoIndex);

		if(alreadyPlayed.length === videoArr.length) {
			alreadyPlayed = [];
		}

		videoContainer.innerHTML = videoArr[videoIndex];
		console.log(videoIndex);
		console.log(alreadyPlayed);
	}

	randomVideo();

	nextButton.onclick = function() {
		randomVideo();
	}
	
	navButtonOne.onmouseover = function() {
		navButtonOne.style.backgroundColor = "#757780";
		navButtonOne.style.color = "#54DEFD";
	}
	navButtonOne.onmouseout = function() {
		navButtonOne.style.backgroundColor = "#54DEFD";
		navButtonOne.style.color = "#001011";
	}

	navButtonTwo.onmouseover = function() {
		navButtonTwo.style.backgroundColor = "#757780";
		navButtonTwo.style.color = "#54DEFD";
	}
	navButtonTwo.onmouseout = function() {
		navButtonTwo.style.backgroundColor = "#54DEFD";
		navButtonTwo.style.color = "#001011";
	}
}