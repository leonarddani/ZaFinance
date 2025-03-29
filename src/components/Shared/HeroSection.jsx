import React from 'react';
import HeroBg from "../../assets/img/hero.jpg";
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="note">Improve your financial calculating</p>
        <h1 className="title">Savings calculator for daily use</h1>
        <div className="hero-description">
          <p>
            Plan your daily expenses and savings with our easy-to-use savings
            calculator. Track your progress and reach your financial goals
            effortlessly.
          </p>
        </div>
      </div>

      <div className="hero-bg-container">
        <button className="bttn">Try it out</button>
        <img
          className="hero-img"
          src={HeroBg}
          alt="A person calculating savings with a calculator and a notepad filled with financial notes on a white desk."
        />
      </div>
    </section>
  );
};

export default HeroSection;
