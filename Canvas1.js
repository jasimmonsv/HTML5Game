

setup = function() {
	// Grab the body element using document.getElementById,
	// assume the body element has an id of 'body'.
	// Create a canvas element using document.createElement,
	// then set the width and height properties to 1200 and
	// 720, respectively.
	// Finally, append the canvas element to the body.
	var body = document.getElementById("body");
	var canvas = document.createElement("canvas");
	canvas.width = 1200
	canvas.height = 720

	// YOUR CODE HERE
    body.appendChild(canvas);
};

setup();