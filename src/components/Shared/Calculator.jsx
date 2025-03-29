import React, { useState, useEffect } from 'react';

const MainSection = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Menu state
  const [years, setYears] = useState(5); // Default years for the slider
  const [result, setResult] = useState({
    totalValue: 0.00,
    interestEarned: 0.00,
    totalContributions: 0.00,
  });

  // Menu toggle functionality
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to calculate interest
  const calculateInterest = (event) => {
    event.preventDefault();

    const initialDeposit = parseFloat(document.getElementById('initialDeposit').value);
    const monthlyContribution = parseFloat(document.getElementById('monthlyContribution').value);
    const frequency = document.querySelector('input[name="frequency"]:checked').value;
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const years = parseInt(document.getElementById('years').value);

    // Define frequency multiplier
    let periodsPerYear;
    if (frequency === 'monthly') {
      periodsPerYear = 12;
    } else if (frequency === 'quarterly') {
      periodsPerYear = 4;
    } else if (frequency === 'annually') {
      periodsPerYear = 1;
    }

    const totalPeriods = periodsPerYear * years; // Total number of periods
    const periodicRate = interestRate / periodsPerYear; // Interest rate per period

    // Initialize total and calculate contributions
    let total = initialDeposit;
    let totalContributions = initialDeposit;

    for (let i = 0; i < totalPeriods; i++) {
      total = total * (1 + periodicRate); // Apply interest
      total += monthlyContribution; // Add contribution
      totalContributions += monthlyContribution; // Track total contributions
    }

    // Calculate interest earned
    const interestEarned = total - totalContributions;

    // Update results in state
    setResult({
      totalValue: total,
      interestEarned: interestEarned,
      totalContributions: totalContributions,
    });
  };

  // Update years value dynamically when slider is adjusted
  const handleSliderChange = (event) => {
    setYears(event.target.value);
  };

  useEffect(() => {
    document.getElementById('years-value').textContent = years;
  }, [years]);

  return (
    <main className="main-section">
      <div className="section-title">
        <h2 className="main-title">Why Compound Interest Matters?</h2>
        <p className="main-description">
          Plan your daily expenses and savings with our easy-to-use savings
          <br />
          calculator. Track your progress and reach your financial goals
          effortlessly.
        </p>
      </div>

      <div className="container">
        {/* Menu */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li className="highlight"><a href="about.html">About</a></li>
            <li><a href="#calculator">Calculator</a></li>
          </ul>
        </div>

        {/* Calculator Form */}
        <form onSubmit={calculateInterest}>
          <label htmlFor="initialDeposit">Initial Deposit</label>
          <div className="input-container">
            <input type="number" id="initialDeposit" placeholder="Enter initial deposit" required />
          </div>

          <label htmlFor="monthlyContribution">Contribution Amount</label>
          <div className="input-container">
            <input type="number" id="monthlyContribution" placeholder="Enter contribution amount" required />
          </div>

          <label>Frequency</label>
          <div className="radio-group">
            <input type="radio" id="monthly" name="frequency" value="monthly" required />
            <label htmlFor="monthly">Monthly</label>

            <input type="radio" id="quarterly" name="frequency" value="quarterly" />
            <label htmlFor="quarterly">Quarterly</label>

            <input type="radio" id="annually" name="frequency" value="annually" />
            <label htmlFor="annually">Annually</label>
          </div>

          <label htmlFor="interestRate">Interest Rate</label>
          <div className="percentage-container">
            <input type="number" id="interestRate" placeholder="Enter interest rate" step="0.01" required />
          </div>

          <label htmlFor="years">Number of Years</label>
          <div className="slider-container">
            <input
              type="range"
              id="years"
              className="years-slider"
              min="1"
              max="30"
              value={years}
              onChange={handleSliderChange}
            />
            <span id="years-value" className="years-text">{years}</span>
          </div>

          <button type="submit">Calculate</button>
        </form>

        {/* Results */}
        <div id="result" className="result" style={{ display: result.totalValue ? 'block' : 'none' }}>
          <div className="result-card">
            <div className="card-content">
              <h2 className="result-title">Your Total</h2>
              <p className="result-value">${result.totalValue.toFixed(2)}</p>
              <div className="result-row">
                <div className="result-col">
                  <p>
                    Interest Earned: <span id="interestEarned">${result.interestEarned.toFixed(2)}</span>
                  </p>
                </div>
                <div className="result-col">
                  <p>
                    Total Contributions: <span id="totalContributions">${result.totalContributions.toFixed(2)}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
