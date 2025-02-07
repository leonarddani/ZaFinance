document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("open");
    // Add 'open' to menu-toggle
  });
});

// Function to calculate interest
function calculateInterest() {
  // Get values from the form
  const initialDeposit = parseFloat(
    document.getElementById("initialDeposit").value
  );
  const monthlyContribution = parseFloat(
    document.getElementById("monthlyContribution").value
  );
  const frequency = document.querySelector(
    'input[name="frequency"]:checked'
  ).value;
  const interestRate =
    parseFloat(document.getElementById("interestRate").value) / 100; // Convert to decimal
  const years = parseInt(document.getElementById("years").value);

  // Define frequency multiplier
  let periodsPerYear;
  if (frequency === "monthly") {
    periodsPerYear = 12;
  } else if (frequency === "quarterly") {
    periodsPerYear = 4;
  } else if (frequency === "annually") {
    periodsPerYear = 1;
  }

  const totalPeriods = periodsPerYear * years; // Total number of periods
  const periodicRate = interestRate / periodsPerYear; // Interest rate per period

  // Initialize total and calculate contributions
  let total = initialDeposit;
  let totalContributions = initialDeposit; // Start with initial deposit

  for (let i = 0; i < totalPeriods; i++) {
    total = total * (1 + periodicRate); // Apply interest
    total += monthlyContribution; // Add contribution
    totalContributions += monthlyContribution; // Track total contributions
  }

  // Calculate interest earned
  const interestEarned = total - totalContributions;

  // Update results in the DOM
  document.getElementById("totalValue").textContent = `$${total.toFixed(2)}`;
  document.getElementById(
    "interestEarned"
  ).textContent = `$${interestEarned.toFixed(2)}`;
  document.getElementById(
    "totalContributions"
  ).textContent = `$${totalContributions.toFixed(2)}`;

  // Display results
  document.getElementById("result").style.display = "block";
}

// Update years value dynamically when slider is adjusted
document.getElementById("years").addEventListener("input", function () {
  const yearsValue = document.getElementById("years").value;
  document.getElementById("years-value").textContent = yearsValue;
});
