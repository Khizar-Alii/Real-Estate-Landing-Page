import React from "react";
import "./Frenchchic.css";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

function Frenchchic() {
  const [inViewheadRef, inViewhead] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust threshold value as needed
  });
  const [imgRef, imgInView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust threshold value as needed
  });
  const [buttonRef, buttonInView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust threshold value as needed
  });

  return (
    <div>
      <section>
        <div className="LiveInOdesa-container LiveInOdesa">
          <div className="LiveInOdesa-section-left">
            <h1
              ref={inViewheadRef}
              className={`LiveInOdesa-title ${
                inViewhead ? "LiveInOdesa-title-visible" : ""
              }`}
            >
              Eclecticism with French chic
            </h1>
            <div>
              <p className="LiveInOdesa-text">
                The project organically complements the skyline of Odessa <br />
                Choose and combine the best of architectural styles. Do not
                reject history, but rethink it in the spirit of the times.
                Combining the experience of past years and modernist aesthetics
                is, of course, about the eclecticism, the architectural style in
                which Doma Trabotti is built.
              </p>
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
          <div className="LiveInOdesa-section-right">
            <img
              ref={imgRef}
              className={`LiveInOdesa-img ${
                imgInView ? "LiveInOdesa-img-visible" : ""
              }`}
              src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80"
              alt="Water_Sea_final"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
export default Frenchchic;
