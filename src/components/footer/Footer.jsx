import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Veggies</span>
          <span>Cereals</span>
          <span>Fruits</span>
          <span>Dairy</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Useful Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Farming Assistant is an innovative agricultural technology company
            dedicated to revolutionizing and enhancing modern farming practices
            through cutting-edge solutions. Farming Assistant aims to bridge the
            gap between traditional farming methods and the latest advancements
            in technology.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            22 Riverside Drive, Westlands Nairobi
            <br />
            +254 72 45 78
            <br />
            contact@farmingassistant.com
            <br />
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Farming Assistant</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
