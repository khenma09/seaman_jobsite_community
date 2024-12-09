const employersData = [
	{
		name: "ABC Maritime Corporation",
		location: "Manila, Philippines",
		jobOpenings: 15,
	},
	{
		name: "XYZ Shipping Lines",
		location: "Cebu, Philippines",
		jobOpenings: 20,
	},
	{
		name: "OceanBlue Manning Agency",
		location: "Davao, Philippines",
		jobOpenings: 12,
	},
	{
		name: "Seafarer Recruitment Inc.",
		location: "Iloilo, Philippines",
		jobOpenings: 8,
	},
	{
		name: "Global Maritime Agency",
		location: "Batangas, Philippines",
		jobOpenings: 10,
	},
	{
		name: "Elite Shipping Partners",
		location: "Subic, Philippines",
		jobOpenings: 7,
	},
	{
		name: "Eagle Clarc Shipping Phils., Inc.",
		location: "Philippines",
		jobOpenings: "Crewing/Manning Agency",
	},
	{
		name: "108 Eagle Logistics Marine Services Inc.",
		location: "Philippines",
		jobOpenings: "Ship Agent/Ship Management",
	},
	{
		name: "Eaglestar Marine (Philippines) Corporation",
		location: "Philippines",
		jobOpenings: "Crewing/Manning Agency",
	},
	{
		name: "Eastern Mediterranean Manning Agency, Inc.",
		location: "Philippines",
		jobOpenings: "Crewing/Manning",
	},
	{
		name: "Easternstar Line, Inc.",
		location: "Philippines",
		jobOpenings: "Crewing/Manning",
	},
	{
		name: "Eastgate Maritime Corporation",
		location: "Philippines",
		jobOpenings: "Shipping Agency",
	},
	{
		name: "Elburg Shipmanagement Phils., Inc.",
		location: "Philippines",
		jobOpenings: "Shipping Agency Business",
	},
	{
		name: "Elite Maritime Management Corporation",
		location: "Philippines",
		jobOpenings: "Crewing/Manning Agency",
	},
	{
		name: "Emmers Maritime and Allied Services, Inc.",
		location: "Philippines",
		jobOpenings: "Crewing/Manning and Ship Chandling",
	},
	{
		name: "Epsilon Maritime Services, Inc.",
		location: "Philippines",
		jobOpenings: "Crewing/Manning Agency",
	},
	{
		name: "Equal Marine International Inc.",
		location: "Philippines",
		jobOpenings: "Crewing/Manning Agency",
	},
	{
		name: "Erika Crewmanning Services Inc.",
		location: "Philippines",
		jobOpenings: "Crewing/Manning Agency",
	},
	{
		name: "Eurasian Maritime Corporation",
		location: "Philippines",
		jobOpenings: "Crewing/Manning Agency",
	},
	{
		name: "Euro-Asiatic Shipping, Inc.",
		location: "Philippines",
		jobOpenings: "Crewing/Manning Agency",
	},
	{
		name: "Evergreen Shipping Agency Philippines Corporation",
		location: "Philippines",
		jobOpenings: "Shipping Agency Business",
	},
	{
		name: "Everstar, Inc.",
		location: "Philippines",
		jobOpenings: "Shipping Agency/Cargo Checking Bus.",
	},
	{
		name: "Evic Human Resource Management Inc.",
		location: "Philippines",
		jobOpenings: "Crewing/Manning Agency",
	},
	{
		name: "F.A. Vinnen Philippines, Inc.",
		location: "Philippines",
		jobOpenings: "Crewing/Manning Agency",
	},
	{
		name: "Fair Shipping & Agency, Inc.",
		location: "Philippines",
		jobOpenings: "Shipping Agency",
	},
	{
		name: "Fair Shipping Corporation",
		location: "Philippines",
		jobOpenings: "Crewing/Manning Agency",
	},
	{
		name: "Far East Multi-Trans Agency Phils, Inc.",
		location: "Philippines",
		jobOpenings: "Shipping Agent",
	},
	{
		name: "Faytaren Marine Enterprise",
		location: "Philippines",
		jobOpenings: "General Shipping Business",
	},
	{
		name: "Fil-Crew Maritime & Offshore Services Inc.",
		location: "Philippines",
		jobOpenings: "Manning Agency",
	},
	{
		name: "Filipinas Kalayaan Overseas Shipping, Inc.",
		location: "Philippines",
		jobOpenings: "Crewing/Manning Agency",
	},
	{
		name: "Fil-Maritime Travelers Inc. (formerly Orient Lines Philippines Inc.)",
		location: "Philippines",
		jobOpenings:
			"Crewing/Manning Agency/Shipping Agency/Ship Chandling/Ship Management and Ship Broker",
	},
	{
		name: "Fil-Star Maritime Corporation",
		location: "Philippines",
		jobOpenings: "Crewing/Manning Agency",
	},
	{
		name: "Fleet Marine Cable Solutions Inc.",
		location: "Philippines",
		jobOpenings: "Manning/Crewing Services",
	},
	{
		name: "Foscon Shipmanagement, Inc.",
		location: "Philippines",
		jobOpenings: "Crewing/Manning Agency",
	},
	{
		name: "Freight Connection Phils., Inc.",
		location: "Philippines",
		jobOpenings: "Shipping Agency",
	},
	{
		name: "Friendly Maritime Services, Inc.",
		location: "Philippines",
		jobOpenings: "Crewing/Manning",
	},
	{
		name: "GAC Philippines, Inc.",
		location: "Philippines",
		jobOpenings: "Shipping Agency",
	},
	{
		name: "Galant Maritime Services, Inc.",
		location: "Philippines",
		jobOpenings: "Crewing/Manning Agency",
	},
	{
		name: "GBR Shipping Agent Inc.",
		location: "Philippines",
		jobOpenings: "Shipping Agency",
	},
	{
		name: "Genesis Logistics Marine Service, Inc.",
		location: "Philippines",
		jobOpenings: "Ship Agent, Ship Management and Domestic Manning Agency",
	},
	{
		name: "GEO Shipping Corp.",
		location: "Philippines",
		jobOpenings: "Crewing/Manning",
	},
	{
		name: "German Marine Agencies, Inc.",
		location: "Philippines",
		jobOpenings: "Crewing/Manning Agency",
	},
	{
		name: "Global Gateway Crewing Services, Inc.",
		location: "Philippines",
		jobOpenings: "Crewing/Manning Agency",
	},
	{
		name: "Global Marine and Offshore Resources, Inc.",
		location: "Philippines",
		jobOpenings: "Shipmanagement/Shipping Agency",
	},
	{
		name: "Global Maritime Logistics Support, Inc.",
		location: "Philippines",
		jobOpenings: "General Shipping Agency",
	},
	{
		name: "Gloria Maritime and Agency Incorporated",
		location: "Philippines",
		jobOpenings: "Crewing/Manning Agency",
	},
	{
		name: "Golden Anchorage Maritime Services",
		location: "Philippines",
		jobOpenings: "Ship Chandling",
	},
	{
		name: "Golden Galleon Shipmanagement Services, Inc.",
		location: "Philippines",
		jobOpenings: "Crewing/Manning Agency",
	},
	{
		name: "Golden Orient Ship Management and Agencies, Inc.",
		location: "Philippines",
		jobOpenings: "Shipping Agency Business",
	},
	{
		name: "Great Southern Maritime Services",
		location: "Philippines",
		jobOpenings: "Shipping Agency Business",
	},
	// Add more if needed
];

let currentPage = 1;
let entriesPerPage = 5;

function displayEmployers() {
	const startIndex = (currentPage - 1) * entriesPerPage;
	const endIndex = startIndex + entriesPerPage;
	const employersToDisplay = employersData.slice(startIndex, endIndex);

	const container = document.getElementById("employersList");
	container.innerHTML = "";

	employersToDisplay.forEach((employer) => {
		const employerCard = `
          <div class="col-md-4">
              <div class="card shadow-sm">
                  <div class="card-body">
                      <h5 class="card-title">${employer.name}</h5>
                      <p class="card-text">Location: ${employer.location}</p>
                      <p class="card-text">Job Openings: ${employer.jobOpenings}</p>
                      <a href="#" class="btn btn-primary btn-sm">View Details</a>
                  </div>
              </div>
          </div>`;
		container.insertAdjacentHTML("beforeend", employerCard);
	});

	updatePagination();
}

function updatePagination() {
	const pagination = document.getElementById("pagination");
	pagination.innerHTML = "";

	const totalPages = Math.ceil(employersData.length / entriesPerPage);

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
	displayEmployers();
}

document.getElementById("entriesPerPage").addEventListener("change", (e) => {
	entriesPerPage = parseInt(e.target.value);
	currentPage = 1; // Reset to the first page
	displayEmployers();
});

// Initialize
displayEmployers();
