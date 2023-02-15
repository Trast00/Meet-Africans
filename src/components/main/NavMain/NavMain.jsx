import React from 'react'
import myProfile from '../../../assets/images/profile_allassane.JPG'
import { RiCompassDiscoverLine } from "react-icons/ri";
import { RiDiscussLine } from "react-icons/ri";
import { BiNews } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import './navMain.css'

const NavMain = () => {
  return (
    <div className='flex-center row navMain'>
      <NavLink to="/dashboard/profile">
        <img src={myProfile} alt="Your Profile" />
      </NavLink>
      <div className='flex-center row list-icons'>
        <NavLink to="discover">
          <RiCompassDiscoverLine className='icons' />
        </NavLink>
        <NavLink to="events">
          <BiNews className='icons' />
        </NavLink>
        <NavLink to="chats">
          <RiDiscussLine className='icons' />
        </NavLink>
      </div>
      <NavLink to="setting">
        <AiOutlineSetting className='icons' />
      </NavLink>
    </div>
  )
}

export default NavMain
