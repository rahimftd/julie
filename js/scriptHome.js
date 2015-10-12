window.onload = function() {
	init();
}

function init() {

	var navButtonOne = document.getElementById("navButtonOne");
	var navButtonTwo = document.getElementById("navButtonTwo");

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