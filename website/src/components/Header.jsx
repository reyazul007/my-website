import React from 'react';

const Header = ({ scrollToSection }) => {
  return (
    <header className="header">
      {/* Background Image Space */}
      <div className="col-md-6">
        <img src="/images/header.jpg" alt="Coffee Background" />
      </div>

      {/* Navigation and Social Media */}
      <div className="header-content">
        <nav className="navbar">
          <div className="logo">
            <img src="/images/logo.png" alt="Himalayan Java Coffee Logo" />
          </div>
          <ul>
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
            <li><button onClick={() => scrollToSection('services')}>Services</button></li>
            <li><button onClick={() => scrollToSection('trainings')}>Trainings</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>
        </nav>
      </div>

    </header>
  );
};

export default Header;