import React from 'react';

const menuItems = [
  { name: "Americano", price: 150 },
  { name: "Cappuccino", price: 185 },
  { name: "Cafe Latte with Cookie", price: 365 },
  { name: "Rolls", price: "Lorem, ipaʊsm, lɒr" },
  { name: "Iced Americano", price: 195 },
  { name: "Blended Mocha", price: 315 },
  { name: "Caffe Latte", price: 180 },
  { name: "Croissant", price: 120 },
  { name: "Cheese Cake", price: 300 },
  { name: "Flat White", price: 195 },
  { name: "Blended Frappe", price: 280 },
  { name: "Milk Tea", price: 80 },
  { name: "Baguette", price: 120 },
  { name: "Brownie with Ice Cream", price: 280 },
  { name: "Matcha Latte", price: 350 },
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
            <h3>{item.name}</h3>
            <p>{typeof item.price === 'number' ? `Rs ${item.price}` : item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;