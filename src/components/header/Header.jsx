import React, { useState } from 'react';
import { NavLink } from 'react-router';
import pear from '../../assets/dark_logo.webp';
import './header.css';
import ToggleBtn from '../toggleBtn/ToggleBtn';
import Selectbox from '../selectbox/Selectbox';
import Bot from "../chatbot/Bot";
import { getNavData } from "../../Data_File/dataAbstract"
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
        <Selectbox/>
        <ToggleBtn />
        <Bot/>
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
      <span className="brand-name">PEERLAB</span>
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
  const navData=getNavData()
  const links=navData.map((item)=>{
      return <li key={item.id}><NavLink key={item.id} to={item.to} className="link" onClick={closeMenu}>{item.name}</NavLink></li>
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