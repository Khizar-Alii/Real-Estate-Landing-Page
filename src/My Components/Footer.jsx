import React from "react";
import "./Footer.css";
import Logo from "./Logo.jpg";


const Footer = () => {
  return (
    <div className="footer">
      <section className="footer-section-left">
        <div className="footer-logo">
          {/* <h3>Investors Avenue</h3> */}
          <img src={Logo } alt="Investors Avenue" />
        </div>
        <div className="footer-spacer" style={{ height: "2rem" }}></div>
        <div className="footer-social-link">
          <span style={{ marginBottom: "1rem", color: "#A5A5A5" }}>
            STAY ON TOP OF THE NEWS
          </span>
          <div className="accounts-link">
            <a href="/">facebook</a>
            <a href="/"> instagram</a>
          </div>
        </div>
        <div className="footer-spacer" style={{ height: "6rem" }}></div>
        <div className="footer copyright" style={{ marginBottom: "2rem" }}>
          <span>© 2023 — Khizar Ali</span>
        </div>
      </section>
      <section className="footer-section-middle">
        <div className="salesDepartment-phone-number">
          <ul className="salesDepartment-list">
            {/* style={{ marginBottom: "2.7rem" }} */}
            <li className="salesDepartment">SALES DEPARTMENT PHONE NUMBER</li>
            <li className="salesDepartment phoneNumber">+923175983425</li>
            <li className="salesDepartment">Mon - Fr 10:00-20:00</li>
            <li className="salesDepartment">Weekend 10:00-18:00</li>
          </ul>
        </div>
        <div className="location-address addresses">
          <div className="addresses-content">
            <span className="address-title">LOCATION ADDRESS</span>
            <br />
            <span className="address-location">
              ODESSA, FRENCH BOULEVARD STR., 54
            </span>
          </div>
          <div className="address-content">
            <span className="address-title">SALES DEPARTMENT ADDRESS</span>
            <br />
            <span className="address-location">
              ODESSA, FRENCH BOULEVARD KTR., 85
            </span>
          </div>
        </div>
      </section>
      <section className="footer-section-right">
        <div className="section-right-heading">
          <h1>
            Менеджер по <br />
            роботі з <br />
            інвесторами
          </h1>
        </div>
        <div className="section-right-input-container">
        <input
          type="Number" name="phone-number"
          placeholder="Your Phone Number"
          className="input-section-right"
        />
        <button className="send-number">SEND</button>
        </div>
        <div className="hand-craft">Handcrafted by Khizar Ali</div>
      </section>
    </div>
  );
};

export default Footer;
