// JavaScript for Seafarer Profile Page

// Function to handle View Resume button click
function viewResume() {
	alert("Resume functionality is not implemented yet!");
}

// Mock Data for Application Tracker
const applications = [
	{
		title: "2nd Officer",
		company: "ABC Maritime Corporation",
		date: "2023-10-15",
		status: "Viewed",
	},
	{
		title: "Chief Officer",
		company: "Global Maritime Agency",
		date: "2023-10-10",
		status: "Pending",
	},
	{
		title: "Master",
		company: "Elite Shipping Partners",
		date: "2023-09-28",
		status: "Shortlisted",
	},
    {
		title: "3rd Officer",
		company: "XYZ Shipping Lines",
		date: "2023-09-20",
		status: "Rejected",
	},
];

function renderApplicationTracker() {
    const tbody = document.getElementById("applicationTrackerBody");
    if (!tbody) return;

    // Batch HTML creation
    const rowsHTML = applications.map(app => {
        let statusClass = "text-secondary";
        if (app.status === "Viewed") statusClass = "text-primary";
        if (app.status === "Pending") statusClass = "text-warning";
        if (app.status === "Shortlisted") statusClass = "text-success fw-bold";
        if (app.status === "Rejected") statusClass = "text-danger";

        return `
        <tr>
            <td><span class="fw-semibold">${app.title}</span></td>
            <td>${app.company}</td>
            <td>${app.date}</td>
            <td><span class="${statusClass}">${app.status}</span></td>
        </tr>`;
    }).join("");

    tbody.innerHTML = rowsHTML;
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

    // Render Application Tracker
    renderApplicationTracker();
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
    // Note: In the HTML structure, the profile card is the first card in the first column.
    // A more robust selector might be needed if structure changes, but finding by known child ID is safer.
    const avatarImg = document.getElementById("avatarPreview");
	const profileCard = avatarImg ? avatarImg.closest(".card") : document.querySelector(".col-lg-3 .card");

	if (!profileCard) {
		console.error("Profile card not found!");
		return;
	}

	// Clear existing profile details (but keep the avatar)
	const avatarElement = profileCard.querySelector(".avatar-upload");
    const buttonsDiv = profileCard.querySelector(".d-flex.gap-2"); // Select the buttons container

	profileCard.innerHTML = ""; // Clear the card
	if (avatarElement) profileCard.appendChild(avatarElement); // Re-add avatar container

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

    // Re-add buttons
    if (buttonsDiv) profileCard.appendChild(buttonsDiv);
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
        if (!element) return;

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
