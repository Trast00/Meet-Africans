import React from 'react';
import iconsSpeed from '../../../assets/images/icons_speed.png';
import iconsMap from '../../../assets/images/icons_map.png';
import iconsSocialMedia from '../../../assets/images/icons_social_media.png';
import './Features.css';

const Features = () => (
  <section className="column features">
    <ul className="no-styling row list-features">
      <li className="column feature">
        <div className="max-wrapper flex-center">
          <img src={iconsSpeed} alt="Icons Speed" />
        </div>
        <p>Fast Register</p>
      </li>
      <li className="column feature">
        <div className="max-wrapper flex-center">
          <img src={iconsMap} alt="Icons Map" />
        </div>
        <p>Country Filter</p>
      </li>
      <li className="column feature">
        <div className="max-wrapper flex-center">
          <img src={iconsSocialMedia} alt="Icons Social Media" />
        </div>
        <p>Continue chat</p>
      </li>
    </ul>
  </section>
);

export default Features;
