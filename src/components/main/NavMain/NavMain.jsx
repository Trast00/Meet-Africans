import React from 'react'
import myProfile from '../../../assets/images/profile_allassane.JPG'
import { RiCompassDiscoverLine } from "react-icons/ri";
import { RiDiscussLine } from "react-icons/ri";
import { BiNews } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import './navMain.css'

const NavMain = () => {
  return (
    <div className='flex-center row navMain'>
      <img src={myProfile} alt="Your Profile" />
      <div className='flex-center row list-icons'>
        <RiCompassDiscoverLine className='icons' />
        <BiNews className='icons' />
        <RiDiscussLine className='icons' />
      </div>
      <AiOutlineSetting className='icons' />
    </div>
  )
}

export default NavMain
