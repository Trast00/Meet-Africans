import React from 'react'
import logoImg from '../../assets/images/logo_white.png'
import headlineProfile from '../../assets/images/headline_profile.png'
import { Link } from 'react-router-dom';
import './Headline.css'

const Headline = () => {
  return (
    <div className='max-width column headline'>
      <div className="row logo">
        <img src={logoImg} alt="Logo Meet Africa" />
        <h1>Meet Africa</h1>
      </div>

      <div className="max-width row headline-wrapper">
        <main>
          <h2>Meet US!</h2>
          <p>find hundreds of friends and 
            potentiel partner around 
            all the west Africa
          </p>
          
          <Link to="/" className="no-style btn-action">Join US!</Link>

        </main>
        <img src={headlineProfile} alt="Profile smiling girl" />
      </div>
    </div>
  )
}

export default Headline
