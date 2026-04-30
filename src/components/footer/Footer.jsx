import React from "react";
import "./footer.css";
import "../../App.css";
import { icons } from "../../Data_File/data.js";
import {getStaticData} from "../../Data_File/dataAbstract.jsx"
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
  const {icons}=getStaticData()
  const links = icons.map((item) => {
    return (
      <a href={item.link} key={item.id} target="_blank">
        <img src={item.image} alt={item.alt || "social icon"} />
      </a>
    );
  });

  return <nav className="social-icons">{links}</nav>;
}
export default Footer;