import React from 'react'
import playStoreImg from '../../../assets/images/iconsplaystore.png'
import logoColored from '../../../assets/images/logo_colored.png'
import { Link } from 'react-router-dom';
import './download.css'

const Download = () => {
  return (
    <div className='row dowload'>
      <section className='flex-center column'>
        <h2 className='section-title'>Get Our Android App</h2>
        <img src={playStoreImg} alt="Download App on playStore" />
        <p>Get Notification with our android app</p>
        <Link to='/' className='btn-action'>Download</Link>
      </section>
      <section className='flex-center column'>
        <h2 className='section-title'>Start Meeting Now</h2>
        <img src={logoColored} alt="" />
        <p>Directly on the web site</p>
        <Link to='/auth' className='btn-action'>Sign In</Link>
      </section>
    </div>
  )
}

export default Download
