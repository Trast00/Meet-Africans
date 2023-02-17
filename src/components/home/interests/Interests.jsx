import React from 'react';
import interest1 from '../../../assets/images/icons_mariage.png';
import interest2 from '../../../assets/images/icons_love.png';
import interest3 from '../../../assets/images/icons_deeprelation.png';
import interest4 from '../../../assets/images/icons_frienship.png';
import interest5 from '../../../assets/images/icons_fun.png';
import interest6 from '../../../assets/images/icons_unknown.png';
import './Interests.css';

const Interests = () => (
  <div className="flex-center column interests">
    <h2 className="section-title">Find people with same interest</h2>
    <ul className="no-styling list-interests">
      <li className="flex-center interest">
        <img src={interest1} alt="mariage ring" />
        <p>Mariage</p>
      </li>
      <li className="flex-center interest">
        <img src={interest3} alt="Love Red Rose" />
        <p>Deep relationship</p>
      </li>
      <li className="flex-center interest">
        <img src={interest2} alt="Love red heart" />
        <p>Love</p>
      </li>
      <li className="flex-center interest">
        <img src={interest4} alt="Friendship yellow heart" />
        <p>Friendship</p>
      </li>
      <li className="flex-center interest">
        <img src={interest5} alt="Party" />
        <p>Fun</p>
      </li>
      <li className="flex-center interest">
        <img src={interest6} alt="" />
        <p>Unspecified</p>
      </li>
    </ul>
  </div>
);

export default Interests;
