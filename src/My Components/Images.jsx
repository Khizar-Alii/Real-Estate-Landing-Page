import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Images.css";
import { useInView } from "react-intersection-observer";

const Images = ({ images }) => {
  const [buttonRef, buttonInView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust threshold value as needed
  });
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <>
      <Slider {...settings} className="carousel-container">
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image.url} alt={image.alt} className="carousel-image" />
          </div>
        ))}
      </Slider>
      <button
        ref={buttonRef}
        className={`main-button ${buttonInView ? "button-visible" : ""}`}
      >
        Leave A Request
      </button>
    </>
  );
};

export default Images;
