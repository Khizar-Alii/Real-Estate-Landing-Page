import React from "react";
import { useInView } from "react-intersection-observer";
import "./VideoSection.css";
import video from "../My Components/video.mp4";
import { Link } from "react-router-dom";

const VideoSection = () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust threshold value as needed
  });
  const [buttonRef, buttonInView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust threshold value as needed
  });
  const [videoRef, videoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust threshold value as needed
  });

  return (
    <div>
      <section>
        <div className="video-container">
          <div className="video-section-left">
            <h1
              ref={inViewRef}
              className={`video-title ${inView ? "video-title-visible" : ""}`}
            >
              The best location in Odessa
            </h1>
            <div className="video-text">
              Doma Trabotti is a premium gated community with the best location
              on Francuskiy Boulevard in Odesa. Overlooking the sea on one side
              - and overlooking the Gardens of Victory on the other. Near the
              center - but away from its hustle and bustle. The focus of all
              urban entertainment - but with the maximum level of privacy.
            </div>
            <Link
              to="/Real-Estate-Landing-Page/leavearequest"
              className="linktoform"
            >
              <button
                ref={buttonRef}
                className={`main-button ${
                  buttonInView ? "button-visible" : ""
                }`}
              >
                Leave A Request
              </button>
            </Link>
          </div>
          <div className="video-section-right">
            <video
              ref={videoRef}
              className={`video ${videoInView ? "video-visible" : ""}`}
              src={video}
              autoPlay
              muted
            ></video>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoSection;
