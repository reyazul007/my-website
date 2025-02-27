import React from 'react';

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
  return (
    <section id="menu" className="menu">
      <h2>Menu</h2>
      <p>
        While most of the food in our menu changes from kitchen to kitchen and from cook to cook, what remains the same is our product from the bakery.
      </p>
      <button className="view-all-button">View All</button>
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-card">
            <div className="menu-card-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="menu-card-content">
              <h3>{item.name}</h3>
              <p>Rs {item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;