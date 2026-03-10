import React, { useState } from 'react';
import { NavLink } from 'react-router';
import pear from '../../assets/dark_logo.png';
import './header.css';
import { ModeContext } from '../../utils/ModeContext';
import { useContext } from "react"
import { useTheme } from '../../theme';
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { mode, toggleMode, data } = useContext(ModeContext)
  const { theme, toggleTheme } = useTheme();
  const handleClick = (event) => {
  toggleMode()
  toggleTheme()
  };
  return (
    <header className="header">
      <section className="header-container">
        <article className="logo-container">
          <img src={pear} alt="Pear Logo" className='header-image' />
          <span className="brand-name">PEAR</span>
        </article>

        <nav className={`nav-bar ${isOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><NavLink to="/" className="link" onClick={() => setIsOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/apps" className="link" onClick={() => setIsOpen(false)}>Our Apps</NavLink></li>
            <li><NavLink to="/services" className="link" onClick={() => setIsOpen(false)}>Services</NavLink></li>
            <li><NavLink to="/contact" className="link" onClick={() => setIsOpen(false)}>Contact Us</NavLink></li>
          </ul>
        </nav>
<button onClick={handleClick}>+</button>
        <button 
          className={`menu-toggle ${isOpen ? 'is-active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >

        </button>
      </section>
    </header>
  );
}

export default Header;
