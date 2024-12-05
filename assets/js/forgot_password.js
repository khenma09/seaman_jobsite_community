document.querySelector("form").addEventListener("submit", function (e) {
	e.preventDefault();
	document.getElementById("confirmationMessage").classList.remove("d-none");
});
