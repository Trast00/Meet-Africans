import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { RiCloseFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [opened, openMenu] = useState(false);
  return (
    <header className="row header">
      <HiMenu
        className="icons-menu"
        onClick={() => (openMenu(true))}
      />
      <ul className={`no-styling column listNav${opened ? ' active' : ''}`}>
        <RiCloseFill
          className="icons-menu"
          onClick={() => (openMenu(false))}
        />
        <li className="hidden"><NavLink to="/contact" className="no-styling">Contact</NavLink></li>
        <li className="hidden"><NavLink to="/about" className="no-styling">About</NavLink></li>
        <li><NavLink to="/auth/login" className="no-styling">Log In</NavLink></li>
        <li><NavLink to="/auth/register" className="no-styling">Sign Up</NavLink></li>
      </ul>
    </header>
  );
};

export default Header;
