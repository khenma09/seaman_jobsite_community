// JavaScript for Seafarer Profile Page

// Function to handle View Resume button click
function viewResume() {
	alert("Resume functionality is not implemented yet!");
}

// Ensure modal and profile update functions work as before
document.addEventListener("DOMContentLoaded", () => {
	// Add event listeners for existing functionality
	const form = document.querySelector("#editProfileModal form");
	if (form) {
		form.addEventListener("submit", handleFormSubmission);
	}

	const viewResumeButton = document.querySelector(".view-resume-btn");
	if (viewResumeButton) {
		viewResumeButton.addEventListener("click", viewResume);
	}
});

// Function to preview the uploaded avatar in the modal and update the main profile
function previewAvatar() {
	const input = document.getElementById("avatarInput");
	const modalPreview = document.getElementById("modalAvatarPreview");
	const mainPreview = document.getElementById("avatarPreview");

	if (input.files && input.files[0]) {
		const reader = new FileReader();

		reader.onload = function (e) {
			if (modalPreview) modalPreview.src = e.target.result; // Update modal preview
			if (mainPreview) mainPreview.src = e.target.result; // Update main profile avatar
		};

		reader.readAsDataURL(input.files[0]);
	}
}

// Function to dynamically update the profile section
function updateProfileSection(data) {
	const { fullName, email, phone, currentRank, lastSignedOffDate } = data;

	// Select the profile card
	const profileCard = document.querySelector(".profile-section .card");
	if (!profileCard) {
		console.error("Profile card not found!");
		return;
	}

	// Clear existing profile details (but keep the avatar)
	const avatarElement = profileCard.querySelector("#avatarPreview");
	profileCard.innerHTML = ""; // Clear the card
	if (avatarElement) profileCard.appendChild(avatarElement.parentElement); // Re-add avatar

	// Add full name
	const profileName = document.createElement("h3");
	profileName.classList.add("fw-bold");
	profileName.textContent = fullName;
	profileCard.appendChild(profileName);

	// Add email
	const profileEmail = document.createElement("p");
	profileEmail.classList.add("text-muted");
	profileEmail.textContent = `Email: ${email}`;
	profileCard.appendChild(profileEmail);

	// Add phone
	const profilePhone = document.createElement("p");
	profilePhone.classList.add("text-muted");
	profilePhone.textContent = `Phone: ${phone}`;
	profileCard.appendChild(profilePhone);

	// Add current rank
	const profileRank = document.createElement("p");
	profileRank.classList.add("text-muted", "rank-info");
	profileRank.textContent = `Current Rank: ${currentRank}`;
	profileCard.appendChild(profileRank);

	// Add last signed-off date
	const signedOffInfo = document.createElement("p");
	signedOffInfo.classList.add("text-muted", "last-signed-off");
	signedOffInfo.textContent = `Last Signed Off Date: ${
		lastSignedOffDate || "Not specified"
	}`;
	profileCard.appendChild(signedOffInfo);
}

// Function to handle the Save Changes button click
function handleFormSubmission(event) {
	event.preventDefault();

	// Retrieve form data
	const fullName = document.getElementById("fullName").value.trim();
	const email = document.getElementById("email").value.trim();
	const phone = document.getElementById("phone").value.trim();
	const currentRank = document.getElementById("currentRank").value.trim();
	const lastSignedOffDate = document.getElementById("lastSignedOffDate").value;

	// Validate form fields
	if (!fullName || !email || !phone || !currentRank) {
		alert("Please fill out all required fields.");
		return;
	}

	// Prepare data object
	const profileData = {
		fullName,
		email,
		phone,
		currentRank,
		lastSignedOffDate,
	};

	// Update the profile section dynamically
	updateProfileSection(profileData);

	// Close the modal
	const modal = bootstrap.Modal.getInstance(
		document.getElementById("editProfileModal")
	);
	modal.hide();

	// Notify the user
	alert("Profile updated successfully!");
}

// Initialize event listeners
document.addEventListener("DOMContentLoaded", () => {
	// Attach preview avatar function
	const avatarInput = document.getElementById("avatarInput");
	if (avatarInput) {
		avatarInput.addEventListener("change", previewAvatar);
	}

	// Attach form submission handler
	const form = document.querySelector("#editProfileModal form");
	if (form) {
		form.addEventListener("submit", handleFormSubmission);
	}

	// Attach "View Resume" button handler
	const viewResumeButton = document.querySelector(".view-resume-btn");
	if (viewResumeButton) {
		viewResumeButton.addEventListener("click", viewResume);
	}
});

document.addEventListener("DOMContentLoaded", () => {
	const stats = {
		appliedJobs: 50,
		jobReviews: 20,
		profileViews: 120,
		shortlisted: 15,
	};

	const animateCounter = (id, target) => {
		const element = document.getElementById(id);
		let count = 0;
		const duration = 1000; // Total duration in ms
		const increment = target / (duration / 20); // Increment per interval

		const interval = setInterval(() => {
			count += increment;
			if (count >= target) {
				count = target;
				clearInterval(interval);
			}
			element.textContent = Math.ceil(count);
		}, 20); // Update every 20ms
	};

	animateCounter("appliedJobs", stats.appliedJobs);
	animateCounter("jobReviews", stats.jobReviews);
	animateCounter("profileViews", stats.profileViews);
	animateCounter("shortlisted", stats.shortlisted);
});
