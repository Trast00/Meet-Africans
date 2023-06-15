import React from 'react';
import { Link } from 'react-router-dom';
import playStoreImg from '../../../assets/images/iconsplaystore.png';
import logoColored from '../../../assets/images/logo_colored.png';
import './download.css';

const Download = () => (
  <div className="row dowload">
    <section className="flex-center column">
      <h2 className="section-title">Get Our Android App</h2>
      <img src={playStoreImg} alt="Download App on playStore" />
      <p>Get Notification with our android app</p>
      <a
        href="https://play.google.com/store/apps/details?id=com.lnd.rencontreafrique&pli=1"
        className="btn-action"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download
      </a>

    </section>
    <section className="flex-center column">
      <h2 className="section-title">Start Meeting Now</h2>
      <img src={logoColored} alt="logo colored" />
      <p>Directly on the web site</p>
      <Link to="/auth/login" className="btn-action">Sign In</Link>
    </section>
  </div>
);

export default Download;
