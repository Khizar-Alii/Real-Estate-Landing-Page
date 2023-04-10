import React, { useState } from "react";
import CallEndIcon from "@mui/icons-material/CallEnd";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import "./Navbar.css";
import addlogo from "./addlogo.png";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <nav className="navbar">
      <div className="menu-container">
        <div className="menu-icon">
          <MenuIcon />
        </div>
        <div className="language-switcher">UA / EN</div>
      </div>
      <div className="logo-container">
        {/* Logo image or text (Investors Avenue) */}
        {/* Example with image: */}
        <img src={addlogo} alt="Investors Avenue Logo" className="logo-image" />
        {/* Example with text: */}
        {/* <div className="logo-text">Investors Avenue</div> */}
      </div>
      <div
        className={`call-btn-container ${hover ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span>
          {hover ? (
            <LocalPhoneIcon className="call-icon" />
          ) : (
            <CallEndIcon className="call-icon" />
          )}
        </span>
        <span className="call-number">CALLBACK</span>
      </div>
      {/* <div className="number">
      <a href="make-call">0317-5983425</a>
    </div> */}
      {/* Rest of the navbar components */}
    </nav>
  );
};

export default Navbar;
