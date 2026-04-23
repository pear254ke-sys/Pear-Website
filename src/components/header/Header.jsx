import React, { useState } from 'react';
import { NavLink } from 'react-router';
import pear from '../../assets/dark_logo.webp';
import './header.css';
import ToggleBtn from '../toggleBtn/ToggleBtn';
import Selectbox from '../selectbox/Selectbox';
import { getCurrentTextData,getImageFromData } from "../../Data_File/dataAbstract"
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
  const navData=getCurrentTextData("navData");
 
  const links=navData.map((item)=>{
    
     let itemData=getImageFromData("navData",item.id)
     

      return <li><NavLink to={itemData.to} className="link" onClick={closeMenu}>{item.name}</NavLink></li>
  })
  return (
    <nav className={`nav-bar ${isOpen ? 'active' : ''}`}>
      <ul className="nav-links">
{links}
      </ul>
    </nav>
  );
}

export default Header;