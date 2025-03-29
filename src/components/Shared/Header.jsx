import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="controls">
          <div className="brand-container">ZaFinance</div>
          <div className="menu">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li className="highlight"><a href="about.html">About</a></li>
              <li><a href="#calculator">Calculator</a></li>
            </ul>
          </div>
        </div>
        <div className="menu-toggle" aria-label="Toggle navigation">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <button className="btn">try it out</button>
      </nav>
    </header>
  );
};

export default Header;
