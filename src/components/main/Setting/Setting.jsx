import React from 'react';
import { Link } from 'react-router-dom';
import './Setting.css';

const Setting = () => (
  <div className="max-content column">
    <Link to="/" className="btn-action btn-signout-account">Sign Out</Link>
  </div>
);

export default Setting;
