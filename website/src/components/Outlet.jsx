import React from 'react';

const outlets = [
  { name: "Patan Durbar Square", image: "/images/outlets//Patan.jpg" },
  { name: "Lakeside, Pokhara", image: "/images/outlets//Pokhara.jpg" },
  { name: "Mandala Street", image: "/images/outlets//Mandala.jpg" },
  { name: "Namche Bazar", image: "/images/outlets//Namche.jpg" },
  { name: "Boudhanath Stupa", image: "/images/outlets//Boudhanath.jpg" },
  { name: "Pashupatinath Marg", image: "/images/outlets//Pashupatinath.jpg" },
  { name: "Thamel", image: "/images/outlets//Thamel.jpeg" },
  { name: "Basantapur", image: "/images/outlets//Basantpur.jpg" },
];

const Outlet = () => {
  return (
    <section id="outlet" className="outlet">
      <h2>Find Us</h2>
      <p>
        The Coffee House outlets are available with the best coffee throughout the major cities of Nepal.
      </p>
      <div className="outlet-items">
        {outlets.map((outlet, index) => (
          <div key={index} className="outlet-card">
            <div className="outlet-image">
              <img src={outlet.image} alt={outlet.name} />
            </div>
            <div className="outlet-content">
              <h3>{outlet.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Outlet;