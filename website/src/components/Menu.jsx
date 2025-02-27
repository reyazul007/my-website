import React, { useState } from "react";

const menuItems = [
  { name: "Americano", price: 150, image: "/images/americano.jpg" },
  { name: "Cappuccino", price: 185, image: "/images/cappuccino.jpg" },
  { name: "Cafe Latte with Cookie", price: 365, image: "/images/latte-cookie.jpg" },
  { name: "Rolls", price: 100, image: "/images/rolls.jpg" },
  { name: "Iced Americano", price: 195, image: "/images/iced-americano.jpg" },
  { name: "Blended Mocha", price: 315, image: "/images/blended-mocha.jpg" },
  { name: "Caffe Latte", price: 180, image: "/images/caffe-latte.jpg" },
  { name: "Croissant", price: 120, image: "/images/croissant.jpg" },
  { name: "Cheese Cake", price: 300, image: "/images/cheesecake.jpg" },
  { name: "Flat White", price: 195, image: "/images/flat-white.jpg" },
  { name: "Blended Frappe", price: 280, image: "/images/blended-frappe.jpg" },
  { name: "Milk Tea", price: 80, image: "/images/milk-tea.jpg" },
  { name: "Baguette", price: 120, image: "/images/baguette.jpg" },
  { name: "Brownie with Ice Cream", price: 280, image: "/images/brownie-icecream.jpg" },
  { name: "Matcha Latte", price: 350, image: "/images/matcha-latte.jpg" },
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
