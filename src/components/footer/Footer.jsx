import React from 'react';
import logoWhite from '../../assets/images/logo_white.png';
import './footer.css';

const Footer = () => (
  <div className="flex-center footer">
    <div className="flex-center column logo-wrapper">
      <img src={logoWhite} alt="Logo Meet Africa" />
      <h3>Meet Africa</h3>
    </div>
    <div className="wrapper">
      <h3>All rigth reserved</h3>
      <p>find hundreds of friends and potential partner around all the west Africa</p>
    </div>
  </div>
);

export default Footer;
