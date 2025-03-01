import React from 'react';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services-header">
        <h2>Our Services</h2>
        <p>
          The Coffee House offers its customers the best-tasting coffee beverages in the country. We have achieved this by using high-quality ingredients and strictly following preparation guidelines.
        </p>
      </div>

      <div className="services-grid">
        {/* Nepali Coffee Beans Section */}
        <div className="service-section">
          <div className="service-image">
            <img src="/images/services/services-1.png" alt="Nepali Coffee Beans" />
          </div>
          <div className="service-content">
            <h3>Nepali Coffee Beans</h3>
            <p>The Coffee House offers its customers with locally brewed taste.</p>
          </div>
        </div>

        {/* Bakery Equipment Section */}
        <div className="service-section">
          <div className="service-image">
            <img src="/images/services/services-2.png" alt="Bakery Equipment" />
          </div>
          <div className="service-content">
            <h3>Bakery Equipment</h3>
            <p>The Coffee House is the sole distributor of various coffee equipment and products in Nepal.</p>
          </div>
        </div>

        {/* Barista Training Section */}
        <div className="service-section">
          <div className="service-image">
            <img src="/images/services/services-3.png" alt="Barista Training" />
          </div>
          <div className="service-content">
            <h3>Barista Training</h3>
            <p>The Coffee House Barista Coffee School was introduced to promote the culture of vocational training in Nepal.</p>
          </div>
        </div>

        {/* Fresh Bakery Items Section */}
        <div className="service-section">
          <div className="service-image">
            <img src="/images/services/services-4.png" alt="Fresh Bakery Items" />
          </div>
          <div className="service-content">
            <h3>Fresh Bakery Items</h3>
            <p>We provide you with a wide variety of fresh bakery items.</p>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="contact-section">
        <h3>Contact Us</h3>
        <p>For more information about our services, feel free to reach out to us.</p>
        <button size="large" className="cta-button">Contact Us</button>
      </div>
    </section>
  );
};

export default Services;