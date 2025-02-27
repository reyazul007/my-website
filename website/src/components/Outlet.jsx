import React from 'react';


const menuItems = [
  { name: "Patan Durbar Square", image: "/images/Patan.jpg" },
  { name: "Lakeside, Pokhara", image: "/images/Pokhara.jpg" },
  { name: "Mandala Street", image: "/images/Mandala.jpg" },
  { name: "Namche Bazar", image: "/images/Namche.jpg" },
  { name: "Boudhanath Stupa", image: "/images/Boudhanath.jpg" },
  { name: "Pashupatinath Marg", image: "/images/Pashupatinath.jpg" },
  { name: "Thamel", image: "/images/Thamel.jpeg" },
  { name: "Basantpur", image: "/images/Basantpur.jpg" },
];

const Outlet = () => {
  return (
    <section id="outlet" className="outlet">
      <h2 className="col-md-12">Find Us</h2>
      <p> Himalayan Java outlets are available with the best coffee throughout the major cities of Nepal.
      </p>
      <div className="outlet-items">
        {menuItems.map((item, index) => (
          <div key={index} className="outlet-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Outlet;