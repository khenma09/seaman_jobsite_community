// Scroll-to-Top Button Logic
document.addEventListener("DOMContentLoaded", () => {
	const backToTop = document.querySelector(".back-to-top");

	// Show the button when scrolling down
	window.addEventListener("scroll", () => {
		if (window.scrollY > 300) {
			backToTop.style.display = "flex";
		} else {
			backToTop.style.display = "none";
		}
	});

	// Smooth scroll to the top when the button is clicked
	backToTop.addEventListener("click", (event) => {
		event.preventDefault();
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});
});
