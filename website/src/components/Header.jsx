import React from 'react';

const Header = ({ scrollToSection }) => {
  return (
    <header className="header">
      {/* Slideshow */}
      <div className="slideshow">
        <div className="slide">
          <img src="\images\pexel.jpg" alt="Slide 1" />
        </div>
      </div>

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

      {/* Stats Section */}
      <div className="stats">
        <div className="stat-card">
          <h2>7+ <sub>Years of Experience</sub></h2>
        </div>
        <div className="stat-card">
          <h2>25k+<sub>Coffee Consumed</sub></h2>
        </div>
        <div className="stat-card">
          <h2>35k+<sub>Happy Customers</sub></h2>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>From Crop to Cup</h1>
          <p>
            The Coffee House Beans are grown locally and are roasted to perfection in the ideal Himalayan air. It is then packaged immediately and rushed off to our outlets, ensuring we deliver the best coffee experience possible for all of our customers.
          </p>
          <button className="button" onClick={() => scrollToSection('menu')}>See Menu</button>
        </div>
      </div>
    </header>
  );
};

export default Header;