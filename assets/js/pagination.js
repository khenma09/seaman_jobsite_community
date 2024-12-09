const trainingCentersData = [
	{
		name: "Marine Academy of the Philippines",
		location: "Manila, Philippines",
	},
	{ name: "Global Maritime Academy", location: "Cebu, Philippines" },
	{ name: "Ocean Training Institute", location: "Davao, Philippines" },
	// Add as many centers as needed for testing
	{ name: "Seafarer Training Hub", location: "Batangas, Philippines" },
	{ name: "International Maritime Institute", location: "Subic, Philippines" },
	{ name: "Elite Seafarer Academy", location: "Iloilo, Philippines" },
];

let currentPage = 1;
let entriesPerPage = 5;

function displayTrainingCenters() {
	const startIndex = (currentPage - 1) * entriesPerPage;
	const endIndex = startIndex + entriesPerPage;
	const centersToDisplay = trainingCentersData.slice(startIndex, endIndex);

	const container = document.getElementById("trainingCenters");
	container.innerHTML = "";

	centersToDisplay.forEach((center) => {
		const centerCard = `
      <div class="col-md-4">
        <div class="p-4 shadow rounded bg-white h-100 hover-card">
          <h5 class="fw-bold">${center.name}</h5>
          <p class="text-muted">Location: ${center.location}</p>
          <a href="training_details.html" class="btn btn-outline-primary btn-sm">Learn More</a>
        </div>
      </div>`;
		container.insertAdjacentHTML("beforeend", centerCard);
	});

	updatePagination();
}

function updatePagination() {
	const pagination = document.getElementById("pagination");
	pagination.innerHTML = "";

	const totalPages = Math.ceil(trainingCentersData.length / entriesPerPage);

	for (let i = 1; i <= totalPages; i++) {
		const pageItem = `
      <li class="page-item ${i === currentPage ? "active" : ""}">
        <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
      </li>`;
		pagination.insertAdjacentHTML("beforeend", pageItem);
	}
}

function changePage(page) {
	currentPage = page;
	displayTrainingCenters();
}

document.getElementById("entriesPerPage").addEventListener("change", (e) => {
	entriesPerPage = parseInt(e.target.value);
	currentPage = 1; // Reset to the first page
	displayTrainingCenters();
});

// Initialize
displayTrainingCenters();
