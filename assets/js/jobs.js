const jobsData = [
	{
		title: "Deck Officer",
		location: "Manila, Philippines",
		company: "ABC Maritime Corporation",
		salary: "$2000 - $3000",
	},
	{
		title: "Marine Engineer",
		location: "Cebu, Philippines",
		company: "XYZ Shipping Lines",
		salary: "$2500 - $3500",
	},
	{
		title: "Able Seaman",
		location: "Davao, Philippines",
		company: "OceanBlue Manning Agency",
		salary: "$1500 - $2000",
	},
	{
		title: "Chief Cook",
		location: "Iloilo, Philippines",
		company: "Seafarer Recruitment Inc.",
		salary: "$1800 - $2500",
	},
	{
		title: "Ship Captain",
		location: "Batangas, Philippines",
		company: "Global Maritime Agency",
		salary: "$4000 - $6000",
	},
	{
		title: "Electrician",
		location: "Subic, Philippines",
		company: "Elite Shipping Partners",
		salary: "$2200 - $3200",
	},
	{
		title: "Bosun",
		location: "Zamboanga, Philippines",
		company: "Eagle Clarc Shipping Phils.",
		salary: "$1700 - $2300",
	},
	{
		title: "Oiler",
		location: "Manila, Philippines",
		company: "Eastern Mediterranean Manning Agency",
		salary: "$1600 - $2100",
	},
	{
		title: "Wiper",
		location: "Cebu, Philippines",
		company: "Eaglestar Marine Corporation",
		salary: "$1400 - $1900",
	},
	{
		title: "Radio Operator",
		location: "Davao, Philippines",
		company: "Elite Maritime Management Corporation",
		salary: "$2000 - $3000",
	},
];

let currentPage = 1;
let entriesPerPage = 5;

function displayJobs() {
	const startIndex = (currentPage - 1) * entriesPerPage;
	const endIndex = startIndex + entriesPerPage;
	const jobsToDisplay = jobsData.slice(startIndex, endIndex);

	const container = document.getElementById("jobsList");
	container.innerHTML = "";

	jobsToDisplay.forEach((job) => {
		const jobCard = `
          <div class="col-md-6">
              <div class="card shadow-sm">
                  <div class="card-body">
                      <h5 class="card-title">${job.title}</h5>
                      <p class="card-text"><strong>Company:</strong> ${job.company}</p>
                      <p class="card-text"><strong>Location:</strong> ${job.location}</p>
                      <p class="card-text"><strong>Salary:</strong> ${job.salary}</p>
                      <a href="#" class="btn btn-primary btn-sm">Apply Now</a>
                  </div>
              </div>
          </div>`;
		container.insertAdjacentHTML("beforeend", jobCard);
	});

	updatePagination();
}

function updatePagination() {
	const pagination = document.getElementById("pagination");
	pagination.innerHTML = "";

	const totalPages = Math.ceil(jobsData.length / entriesPerPage);

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
	displayJobs();
}

document.getElementById("entriesPerPage").addEventListener("change", (e) => {
	entriesPerPage = parseInt(e.target.value);
	currentPage = 1; // Reset to the first page
	displayJobs();
});

// Initialize
displayJobs();
