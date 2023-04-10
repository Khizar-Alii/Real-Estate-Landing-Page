import React, { useEffect } from "react";
import "./Heading.css";

const Gallery = () => {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("mainTitle").classList.add("animate");
    }, 2000);
  }, []);

  return (
    <div className="Gallery">
      <h1 id="mainTitle" className="main-title">
        <span>The</span>
        <span>Beginning of a new</span>
        <span>story</span>
      </h1>
    </div>
  );
};

export default Gallery;
