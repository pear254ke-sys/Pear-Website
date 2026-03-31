import React, { useState } from 'react';
import { NavLink } from 'react-router';
import pear from '../../assets/dark_logo.webp';
import './header.css';
import ToggleBtn from '../toggleBtn/ToggleBtn';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <section className="header-container">
        <LogoContainer />
        <Navbar isOpen={isOpen} closeMenu={closeMenu} />
        <div className="control-btns">
        <ToggleBtn />
        <MenuToggle isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
        
      </section>
    </header>
  );
}

function LogoContainer() {
  return (
    <article className="logo-container">
      <img src={pear} alt="Pear Logo" className="header-image" />
      <span className="brand-name">PEAR</span>
    </article>
  );
}

function MenuToggle({ isOpen, toggleMenu }) {
  return (
    <button
      className={`menu-toggle ${isOpen ? 'is-active' : ''}`}
      onClick={toggleMenu}
      aria-label="Toggle menu"
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </button>
  );
}

function Navbar({ isOpen, closeMenu }) {
  return (
    <nav className={`nav-bar ${isOpen ? 'active' : ''}`}>
      <ul className="nav-links">
        <li><NavLink to="/" className="link" onClick={closeMenu}>Home</NavLink></li>
        <li><NavLink to="/apps" className="link" onClick={closeMenu}>Our Apps</NavLink></li>
        <li><NavLink to="/services" className="link" onClick={closeMenu}>Services</NavLink></li>
        <li><NavLink to="/contact" className="link" onClick={closeMenu}>Contact Us</NavLink></li>
      </ul>
    </nav>
  );
}

export default Header;