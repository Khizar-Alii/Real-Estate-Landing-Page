import React, { useState } from "react";
import CallEndIcon from "@mui/icons-material/CallEnd";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import "./Navbar.css";
import Logo from "./Logo.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

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
      <Link to='/Real-Estate-Landing-Page'>
      <img src={Logo} alt="Investors Avenue Logo" className="logo-image" />
      </Link>
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
