import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* Contact Information */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Tridevi Marg, Thamel</p>
          <p>Kathmandu, Nepal</p>
          <p>Email: <a href="mailto:info@coffeehouse.com">info@coffeehouse.com</a></p>
          <p>Phone: <a href="tel:+977-1-4435171">+977-01-4435171</a></p>
        </div>

        {/* Quick Links */}
        <div className="quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Map */}
        <div className="map">
          <h2>Find Us on the Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.383715680318!2d85.31047031506205!3d27.70704038279303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a0f0f0f0f1%3A0xf0f0f0f0f0f0f0f1!2sHimalayan%20Java%20Coffee!5e0!3m2!1sen!2snp!4v1633071234567!5m2!1sen!2snp"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;