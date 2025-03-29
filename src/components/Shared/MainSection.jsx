import React from "react";

import SmilingPerson from "../../assets/img/smiling-person.jpg";
import FirstIcon from "../../assets/img/first-icon.svg";
import HappyPersonWithCalculator from "../../assets/img/happy-person-with-calculator.jpg";
import SecondIcon from "../../assets/img/second-icon.svg";
import ThirdIcon from "../../assets/img/third-icon.svg";
const MainSection = () => {
  return (
    <main className="main-section">
      <div className="section-title">
        <h2 className="main-title">Why Compound Interest Matters?</h2>
        <p className="main-description">
          Plan your daily expenses and savings with our easy-to-use savings
          calculator. Track your progress and reach your financial goals
          effortlessly.
        </p>
      </div>

      <div className="container">
        <div className="card">
          <div className="card-content">
            <h1 className="content-title">Easy to use</h1>
            <p className="content-des">
              User-friendly interface for quick calculations
            </p>
          </div>
          <div className="card-child-container">
            <div className="card-child">
              <img
                className="first-card-child-img"
                src={HappyPersonWithCalculator}
                alt="A person using a laptop with a cheerful expression while engaging with a digital calculator displaying numerical values."
              />
              <div className="child-title">
                <h2 className="child-title-h2">Initial Deposit</h2>
                <div className="placeholder"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h1 className="content">Accurate Results</h1>
            <p className="content-des">
              User-friendly interface for quick calculations
            </p>
          </div>
          <div className="card-child-container1">
            <div className="card-child1">
              <img className="first-icon" src={FirstIcon} alt="Award icon" />
              <img className="second-icon" src={SecondIcon} alt="Stats icon" />
              <div className="placeholder1"></div>
              <div className="placeholder2"></div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h2 className="content">Secure</h2>
            <p className="content-des">
              Your data is not stored anywhere! Once you switch the browser tab,
              your cache will be removed as well! Amazing, yes?
            </p>
          </div>
          <div className="card-child-container2">
            <img className="third-icon" src={ThirdIcon} alt="Security icon" />
            <div className="card-child2">
              <h2 className="child-title">Data Security</h2>
              <div className="placeholder3"></div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h1 className="content">No Log In!</h1>
            <p className="content-des">
              User-friendly interface for quick calculations
            </p>
          </div>
          <div className="card-child-container3">
            <div className="card-child3">
              <div className="card-child-content">
                <img
                  src={SmilingPerson}
                  alt="A smiling individual with short hair posing for a profile photo against a plain background"
                />
                <h2 className="child-title">Log In</h2>
              </div>
              <div className="placholder4"></div>
              <div className="placholder5"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
