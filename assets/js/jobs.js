const jobsData = [
	{
        id: 1,
		title: "2nd Officer",
		location: "Manila, Philippines",
		company: "ABC Maritime Corporation",
		salary: "$3500 - $4000",
	},
	{
        id: 2,
		title: "Chief Officer",
		location: "Manila, Philippines",
		company: "ABC Maritime Corporation",
		salary: "$5500 - $7000",
	},
	{
        id: 3,
		title: "2nd Engineer",
		location: "Cebu, Philippines",
		company: "XYZ Shipping Lines",
		salary: "$2500 - $3500",
	},
	{
        id: 4,
		title: "Able Seaman",
		location: "Davao, Philippines",
		company: "OceanBlue Manning Agency",
		salary: "$1500 - $2000",
	},
	{
        id: 5,
		title: "Chief Cook",
		location: "Iloilo, Philippines",
		company: "Seafarer Recruitment Inc.",
		salary: "$1800 - $2500",
	},
	{
        id: 6,
		title: "Master",
		location: "Batangas, Philippines",
		company: "Global Maritime Agency",
		salary: "$4000 - $6000",
	},
	{
        id: 7,
		title: "Electrician",
		location: "Subic, Philippines",
		company: "Elite Shipping Partners",
		salary: "$2200 - $3200",
	},
	{
        id: 8,
		title: "Bosun",
		location: "Zamboanga, Philippines",
		company: "Eagle Clarc Shipping Phils.",
		salary: "$1700 - $2300",
	},
	{
        id: 9,
		title: "Oiler",
		location: "Manila, Philippines",
		company: "Eastern Mediterranean Manning Agency",
		salary: "$1600 - $2100",
	},
	{
        id: 10,
		title: "Wiper",
		location: "Cebu, Philippines",
		company: "Eaglestar Marine Corporation",
		salary: "$1400 - $1900",
	},
	{
        id: 11,
		title: "Radio Operator",
		location: "Davao, Philippines",
		company: "Elite Maritime Management Corporation",
		salary: "$2000 - $3000",
	},
	{
        id: 12,
		title: "3rd Officer",
		location: "Davao, Philippines",
		company: "Elite Maritime Management Corporation",
		salary: "$2000 - $3000",
	},
	{
        id: 13,
		title: "Deck Cadet",
		location: "Davao, Philippines",
		company: "Elite Maritime Management Corporation",
		salary: "$400 - $500",
	},
];

let currentPage = 1;
let entriesPerPage = 5;
let filteredJobs = [...jobsData]; // Initialize with all jobs

// Initialize filters
function populateFilters() {
	const rankFilter = document.getElementById("filterRank");
	const companyFilter = document.getElementById("filterCompany");

	// Get unique values
	const ranks = [...new Set(jobsData.map((job) => job.title))].sort();
	const companies = [...new Set(jobsData.map((job) => job.company))].sort();

	// Populate Rank Dropdown
	ranks.forEach((rank) => {
		const option = document.createElement("option");
		option.value = rank;
		option.textContent = rank;
		rankFilter.appendChild(option);
	});

	// Populate Company Dropdown
	companies.forEach((company) => {
		const option = document.createElement("option");
		option.value = company;
		option.textContent = company;
		companyFilter.appendChild(option);
	});

	// Add event listeners
	rankFilter.addEventListener("change", applyFilters);
	companyFilter.addEventListener("change", applyFilters);
}

function applyFilters() {
	const rankValue = document.getElementById("filterRank").value;
	const companyValue = document.getElementById("filterCompany").value;

	filteredJobs = jobsData.filter((job) => {
		const matchRank = rankValue ? job.title === rankValue : true;
		const matchCompany = companyValue ? job.company === companyValue : true;
		return matchRank && matchCompany;
	});

	currentPage = 1; // Reset to first page of results
	displayJobs();
}

function getSavedJobs() {
    const saved = localStorage.getItem('savedJobs');
    return saved ? JSON.parse(saved) : [];
}

function toggleSave(jobId) {
    let saved = getSavedJobs();
    // Ensure ID is number if data is number
    const id = Number(jobId);

    if (saved.includes(id)) {
        saved = saved.filter(savedId => savedId !== id);
    } else {
        saved.push(id);
    }
    localStorage.setItem('savedJobs', JSON.stringify(saved));
    displayJobs(); // Re-render to update icons
}

function displayJobs() {
	const startIndex = (currentPage - 1) * entriesPerPage;
	const endIndex = startIndex + entriesPerPage;
	const jobsToDisplay = filteredJobs.slice(startIndex, endIndex);

    const savedJobs = getSavedJobs();
	const container = document.getElementById("jobsList");

    if (jobsToDisplay.length === 0) {
        container.innerHTML = '<div class="col-12 text-center"><p class="text-muted">No jobs found matching your criteria.</p></div>';
        updatePagination();
        return;
    }

	// Optimize: Batch DOM updates by creating a single HTML string
	const jobsHTML = jobsToDisplay
		.map(
			(job) => {
                const isSaved = savedJobs.includes(job.id);
                const heartIcon = isSaved ? 'bi-heart-fill text-danger' : 'bi-heart';

                return `
          <div class="col-md-6">
              <div class="card shadow-sm h-100">
                  <div class="card-body position-relative">
                      <div class="d-flex justify-content-between align-items-start">
                        <h5 class="card-title">${job.title}</h5>
                        <!-- Using ID for safe toggle -->
                        <button class="btn btn-link p-0 text-decoration-none" onclick="toggleSave(${job.id})" aria-label="Save Job">
                            <i class="bi ${heartIcon} fs-4"></i>
                        </button>
                      </div>
                      <p class="card-text"><strong>Company:</strong> ${job.company}</p>
                      <p class="card-text"><strong>Location:</strong> ${job.location}</p>
                      <p class="card-text"><strong>Salary:</strong> ${job.salary}</p>
                      <div class="mt-3">
                        <a href="#" class="btn btn-primary btn-sm">Apply Now</a>
                      </div>
                  </div>
              </div>
          </div>`;
            }
		)
		.join("");

	container.innerHTML = jobsHTML;

	updatePagination();
}

function updatePagination() {
	const pagination = document.getElementById("pagination");

	const totalPages = Math.ceil(filteredJobs.length / entriesPerPage);
	let paginationHTML = "";

    if (totalPages <= 1 && filteredJobs.length > 0) {
        pagination.innerHTML = "";
        return;
    }

	for (let i = 1; i <= totalPages; i++) {
		paginationHTML += `
          <li class="page-item ${i === currentPage ? "active" : ""}">
              <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
          </li>`;
	}

	pagination.innerHTML = paginationHTML;
}

function changePage(page) {
	currentPage = page;
	displayJobs();
}

document.getElementById("entriesPerPage").addEventListener("change", (e) => {
	entriesPerPage = parseInt(e.target.value);
	currentPage = 1; // Reset to the first page
	displayJobs();
});

// Initialize
populateFilters();
displayJobs();
