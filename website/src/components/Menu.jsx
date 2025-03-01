import React, { useState } from "react";

const menuItems = [
  { name: "Americano", price: 150, image: "/images/menu/menu-1.jpg" },
  { name: "Cappuccino", price: 185, image: "/images/menu/menu-2.jpg" },
  { name: "Cafe Latte with Cookie", price: 365, image: "/images/menu/menu-3.jpg" },
  { name: "Rolls", price: 100, image: "/images/menu/menu-4.jpg" },
  { name: "Iced Americano", price: 195, image: "/images/menu/menu-5.jpg" },
  { name: "Blended Mocha", price: 315, image: "/images/menu/menu-6.jpg" },
  { name: "Caffe Latte", price: 180, image: "/images/menu/menu-7.jpg" },
  { name: "Croissant", price: 120, image: "/images/menu/menu-8.jpg" },
  { name: "Cheese Cake", price: 300, image: "/images/menu/menu-9.jpg" },
  { name: "Flat White", price: 195, image: "/images/menu/menu-10.jpg" },
  { name: "Blended Frappe", price: 280, image: "/images/menu/menu-11.jpg" },
  { name: "Milk Tea", price: 80, image: "/images/menu/menu-12.jpg" },
  { name: "Baguette", price: 120, image: "/images/menu/menu-13.jpg" },
  { name: "Brownie with Ice Cream", price: 280, image: "/images/menu/menu-14.jpg" },
  { name: "Matcha Latte", price: 350, image: "/images/menu/menu-15.jpg" },
];

const Menu = () => {
  const [showAll, setShowAll] = useState(false);

  const handleViewAllClick = () => {
    setShowAll(!showAll);
  };

  const itemsToShow = showAll ? menuItems : menuItems.slice(0, 10);

  return (
    <section id="menu" className="menu">
      <h2 className="menu-title">Menu</h2>
      <p className="menu-description">
        While most of the food in our menu changes from kitchen to kitchen and from cook to cook, what remains the same is our product from the bakery.
      </p>
      <div className="menu-items">
        {itemsToShow.map((item, index) => (
          <div key={index} className="menu-card">
            <img src={item.image} alt={item.name} className="menu-card-image" />
            <div className="menu-card-content">
              <h3 className="menu-card-title">{item.name}</h3>
              <p className="menu-card-price">Rs {item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all-button" onClick={handleViewAllClick}>
        {showAll ? "Show Less" : "View All"}
      </button>
    </section>
  );
};

export default Menu;
