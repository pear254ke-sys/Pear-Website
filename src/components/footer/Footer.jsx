import React from "react";
import "./footer.css"; // Ensure this path is correct
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import github from "../../assets/github.png";
import twitter from "../../assets/twitter.png";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <h2 className="brand-logo">Pear</h2>
          <p className="footer-subtitle">Follow us for updates</p>
          <div className="social-icons">
            <a href="#facebook"><img src={facebook} alt="Facebook" className="social-icon"/></a>
            <a href="#instagram"><img src={instagram} alt="Instagram" className="social-icon"/></a>
            <a href="#github"><img src={github} alt="GitHub" className="social-icon"/></a>
            <a href="#twitter"><img src={twitter} alt="Twitter" className="social-icon"/></a>
          </div>
        </div>
        <div className="footer-contact">
          <h3 className="section-title">Contact</h3>
          <div className="contact-details">
            <p><span>Email:</span> brianruhiu7504@gmail.com</p>
            <p><span>Phone:</span> +254 780 318 149</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Pear. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
