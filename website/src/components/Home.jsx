import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; // Social media icons

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>From Crop to Cup</h1>
        <p>
          Himalayan Java Coffee Beans are grown locally and are roasted to perfection in the ideal Himalayan air. It is then packaged immediately and rushed off to our outlets, ensuring we deliver the best coffee experience possible for all of our customers.
        </p>
        <button className="custom-button">See Menu</button>
          {/* Social Media Icons */}
                <div className="social-media">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="social-icon" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="social-icon" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="social-icon" />
                  </a>
                </div>
      </div>
    
      <div className="stats">
        <div className="stat-card">
        <h2>7+</h2>
          <p> Years of Experience</p>
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
    </section>
  );
};

export default Home;