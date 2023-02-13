import React, { useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  const [opened, openMenu] = useState(false)
  return (
    <header className='row header'>
      <HiMenu className='icons-menu'
      onClick={(e)=>(openMenu(true))}/>
      <ul className={'no-styling column listNav'+ (opened?" active": "")}>
        <RiCloseFill className='icons-menu'
        onClick={(e)=>(openMenu(false))}/>
        <li><NavLink to="/contact" className="no-styling">Contact</NavLink></li>
        <li><NavLink to="/about" className="no-styling">About</NavLink></li>
        <li><NavLink to="/auth" className="no-styling">Sign In</NavLink></li>
      </ul>
    </header>
  )
}

export default Header
