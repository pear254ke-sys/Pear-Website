import React from "react";
import "./footer.css";
import "../../App.css";
import { icons } from "../../utils/data.js";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        <div className="footer-brand">
          <h2 className="brand-logo">Pear</h2>
          <p className="footer-subtitle">Follow us for updates</p>
          <Navbar />
        </div>

        <Contact />

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Pear. All rights reserved.</p>
      </div>
    </footer>
  );
}

function Contact() {
  return (
    <div className="footer-contact">
      <p className="section-title">Contact</p>
      <div className="contact-details">
        <p><span>Email:</span> brianruhiu7504@gmail.com</p>
        <p><span>Phone:</span> +254 780 318 149</p>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="social-icons">
      <a href="#"><img src={icons.facebook} alt="Facebook" /></a>
      <a href="#"><img src={icons.instagram} alt="Instagram" /></a>
      <a href="#"><img src={icons.github} alt="GitHub" /></a>
      <a href="#"><img src={icons.twitter} alt="Twitter" /></a>
    </nav>
  );
}

export default Footer;