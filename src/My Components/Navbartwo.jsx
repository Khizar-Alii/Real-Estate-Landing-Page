import React from 'react';
import './Navbartwo.css';
import addlogo from "./addlogo.png";


const Navbartwo = () => {
  return (
    <nav className="navbar-container">
      <div className="logo-container">
        <img src={addlogo} alt="Logo" className="logo-image" />
      </div>
      <ul className="nav-links">
        <li className="nav-link-item">Home</li>
        <li className="nav-link-item">About Us</li>
        <li className="nav-link-item">News</li>
        <li className="nav-link-item">Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbartwo;
