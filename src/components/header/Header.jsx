import React, { useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";

import './Header.css'

const listNav = document.getElementById('listNav')
const Header = () => {
  const [opened, openMenu] = useState(false)
  return (
    <header className='row header'>
      <HiMenu className='icons-menu'
      onClick={(e)=>(openMenu(true))}/>
      <ul className={'no-styling column listNav'+ (opened?" active": "")}>
        <RiCloseFill className='icons-menu'
        onClick={(e)=>(openMenu(false))}/>
        <li>Contact</li>
        <li>About Me</li>
        <li>Sign IN</li>
      </ul>
    </header>
  )
}

export default Header
