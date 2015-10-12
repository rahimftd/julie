window.onload = function() {
	init();
}

function init() {
	var videoArr = ['<iframe class="video" src="https://www.youtube.com/embed/_UGrdbvsXlc" frameborder="0" allowfullscreen></iframe>', 
	'<iframe class="video" src="https://www.youtube.com/embed/rYIoFZyWT34" frameborder="0" allowfullscreen></iframe>',
	'<iframe class="video" src="https://www.youtube.com/embed/BTZUfMbACDs" frameborder="0" allowfullscreen></iframe>',
	'<iframe class="video" src="https://www.youtube.com/embed/YkW0vfQDjGc" frameborder="0" allowfullscreen></iframe>',
	'<iframe class="video" src="https://www.youtube.com/embed/ZNHEYFN8NHw" frameborder="0" allowfullscreen></iframe>',
	'<iframe class="video" src="https://www.youtube.com/embed/mgWmIbimgV4" frameborder="0" allowfullscreen></iframe>',
	'<iframe class="video" src="https://www.youtube.com/embed/Q1k5xEu-OdI" frameborder="0" allowfullscreen></iframe>',
	'<iframe class="video" src="https://www.youtube.com/embed/aTdgEsHOS9Y" frameborder="0" allowfullscreen></iframe>',
	'<iframe class="video" src="https://www.youtube.com/embed/McaBtB0qwys" frameborder="0" allowfullscreen></iframe>',
	'<iframe class="video" src="https://www.youtube.com/embed/CCtzeR81POA" frameborder="0" allowfullscreen></iframe>',
	'<iframe class="video" src="https://www.youtube.com/embed/tGZHApPt23E" frameborder="0" allowfullscreen></iframe>',
	'<iframe class="video" src="https://www.youtube.com/embed/B1O_nODKKIE" frameborder="0" allowfullscreen></iframe>',
	'<iframe class="video" src="https://www.youtube.com/embed/WQZR939Ty9Y" frameborder="0" allowfullscreen></iframe>',
	'<iframe class="video" src="https://www.youtube.com/embed/pd-C_mWuZSA" frameborder="0" allowfullscreen></iframe>',
	'<iframe class="video" src="https://www.youtube.com/embed/ehijLz10S5k" frameborder="0" allowfullscreen></iframe>',
	'<iframe class="video" src="https://www.youtube.com/embed/wlinqdsEW1U" frameborder="0" allowfullscreen></iframe>'];

	var nextButton = document.getElementById("nextButton");
	var videoContainer = document.getElementById("videoContainer");

	var navButtonOne = document.getElementById("navButtonOne");
	var navButtonTwo = document.getElementById("navButtonTwo");


	nextButton.onclick = function() {
		var videoIndex = Math.floor(Math.random() * videoArr.length);
		videoContainer.innerHTML = videoArr[videoIndex];
		console.log(videoIndex);
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