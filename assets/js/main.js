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

// Toggle Password

document.querySelectorAll(".toggle-password").forEach((icon) => {
	icon.addEventListener("click", function () {
		const target = document.querySelector(this.getAttribute("data-target"));
		if (target) {
			if (target.type === "password") {
				target.type = "text";
				this.classList.remove("bi-eye-slash");
				this.classList.add("bi-eye");
			} else {
				target.type = "password";
				this.classList.remove("bi-eye");
				this.classList.add("bi-eye-slash");
			}
		}
	});
});
