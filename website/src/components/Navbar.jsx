import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.jsx";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Himalayan Java</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;