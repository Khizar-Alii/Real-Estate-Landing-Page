import React from "react";
import "./LiveInOdesa.css";
import { useInView } from "react-intersection-observer";

function LiveInOdesa() {
  const [inViewheadRef, inViewhead] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust threshold value as needed
  });
  const [imgRef, imgInView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust threshold value as needed
  });

  return (
    <div >
      <section>
        <div className="LiveInOdesa-container">
          <div className="LiveInOdesa-section-left">
            <img
            ref={imgRef}
              className={`LiveInOdesa-img ${imgInView ? "LiveInOdesa-img-visible" : ""}`}
              src="https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
              alt="Water_Sea_final"
            />
          </div>
          <div className="LiveInOdesa-section-right">
            <span className="LiveInOdesa-top">
              The Trabotti brothers, those who built Odessa
            </span>
            <h1
              ref={inViewheadRef}
              className={`LiveInOdesa-title ${
                inViewhead ? "LiveInOdesa-title-visible" : ""
              }`}
            >
              To live in Odessa = to live by the sea
            </h1>
            <div >
              <p className="LiveInOdesa-text">
                Remember the famous "you have to live by the sea"? We absolutely
                agree, especially when it comes to Odessa. <br />
                We absolutely agree, especially when it comes to Odessa. Wake up
                and drink coffee on your own terrace with a view of the surf,
                light candles in the summer evenings and feel the breeze fall on
                your shoulders. Have parties with friends or read a book in
                silence until night.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default LiveInOdesa;
