import React from 'react';

const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <img src="/images/coffee-beans.jpeg" alt="Coffee Beans" />
        <h2>From Crop to Cup</h2>
        <p>
          We source our coffee beans locally and roast them to perfection, ensuring the best coffee experience for our customers.
        </p>
      </div>

      <div className="stats">
        <div className="stat-card">
          <h3>7+</h3>
          <p>Years of Experience</p>
        </div>
        <div className="stat-card">
          <h3>25k+</h3>
          <p>Cups of Coffee Served</p>
        </div>
        <div className="stat-card">
          <h3>35k+</h3>
          <p>Happy Customers</p>
        </div>
      </div>
    </section>
  );
};

export default Home;