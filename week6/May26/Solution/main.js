function computeNum() {
	// Grabs the numbers from the DOM
	let num1 = parseFloat(document.querySelector(".num1").value);
	let num2 = parseFloat(document.querySelector(".num2").value);

	// Adds them together
	let sum = num1 + num2;

	// Error handling
	if (isNaN(sum)) {
		return (document.querySelector(".message").textContent =
			"Only number values.");
	} else if (sum > 10) {
		return (document.querySelector(".message").textContent =
			"These numbers will overfill the beaker.");
	} else if (sum < 0) {
		return (document.querySelector(".message").textContent =
			"The sum must be positive.");
	} else {
		document.querySelector(".message").textContent = "";
	}

	// Visual changes output
	document.querySelector(".output").style.width = "300px";
	document.querySelector(".output").style.height = `${(num1 + num2) * 30}px`;

	// Shows the amount of liquid
	document.querySelector(".output-num").textContent = `${num1 + num2}ml`;
}
