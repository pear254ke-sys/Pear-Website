import React from "react";
import "./footer.css";
import "../../App.css"
import { icons} from "../../utils/data.js";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <h2 className="brand-logo">Pear</h2>
          <p className="footer-subtitle">Follow us for updates</p>
    <Navbar/>
        </div>
      <Contact/>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Pear. All rights reserved.</p>
      </div>
    </footer>
  );
}
function Contact(){
  return(  <div className="footer-contact">
    <h3 className="section-title">Contact</h3>
    <div className="contact-details">
      <p><span>Email:</span> brianruhiu7504@gmail.com</p>
      <p><span>Phone:</span> +254 780 318 149</p>
    </div>
  </div>)
}
function Navbar(){
  return(
    <nav className="social-icons">
    <a href="#facebook"><img src={icons.facebook} alt="Facebook" className="social-icon"/></a>
    <a href="#instagram"><img src={icons.instagram} alt="Instagram" className="social-icon"/></a>
    <a href="#github"><img src={icons.github} alt="GitHub" className="social-icon"/></a>
    <a href="#twitter"><img src={icons.twitter} alt="Twitter" className="social-icon"/></a>
  </nav>
  )
}

export default Footer;
