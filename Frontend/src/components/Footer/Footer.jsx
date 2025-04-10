import React from "react";
import "./Footer.css";

import { assets } from '../../assets/assets'; 

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <div className="footer-logo">
            <img src={assets.logo} alt="Logo" className="footer-logo-img" />
          </div>
          <p>Bringing your favorite meals right to your doorstep. Enjoy a wide variety of delicious dishes from top-rated restaurants, delivered fast and fresh to satisfy your cravings.</p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>011-2233456</li>
            <li>011-22333455</li>
            <li>contact@onifood.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 @ express.com - All Rights Reserved</p>
    </div>
  );
};

export default Footer;
