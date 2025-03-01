import React from 'react';

const Header = ({ scrollToSection }) => {
  return (
    <header className="header">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <img src="/images/logo.png" alt="The Coffee House Logo" />
        </div>
        <ul>
          <li><button onClick={() => scrollToSection('about')}>About</button></li>
          <li><button onClick={() => scrollToSection('services')}>Services</button></li>
          <li><button onClick={() => scrollToSection('trainings')}>Trainings</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content" style={{ textAlign: 'left' }}>
          <h1>From Crop to Cup</h1>
          <p>
            The Coffee House Beans are grown locally and are roasted to perfection in the ideal Himalayan air. It is then packaged immediately and rushed off to our outlets, ensuring we deliver the best coffee experience possible for all of our customers.
          </p>
          <button className="cta-button">See Menu</button>
        </div>

        {/* Stats Section */}
        <div className="stats">
          <div className="stat-card">
            <h2>7+</h2>
            <p>Years of Experience</p>
          </div>
          <div className="stat-card">
            <h2>25k+</h2>
            <p>Coffee Consumed</p>
          </div>
          <div className="stat-card">
            <h2>35k+</h2>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;