import React from 'react';
import profileAllassane from '../../../assets/images/profile_allassane.JPG';
import profileGirl from '../../../assets/images/headline_profile.png';
import './presentations.css';

const PresentationChat = () => (
  <div className="max-width presentation-chat">
    <h2 className="section-title">Chat with hundred of people</h2>
    <ul className="no-stytling max-wdith flex-center chats">
      <li className="row chat my-messages">
        <img src={profileAllassane} alt="profile Allassane Dicko" />
        <div className="column wrapper">
          <p>Did you know ?</p>
          <p>
            If you use the app, you can
            receive notification directly
            on your phone
          </p>
        </div>
      </li>
      <li className="row chat friend-messages">
        <div className="column wrapper">
          <p>Finally! That s great!</p>
        </div>
        <img src={profileGirl} alt="random girl profile" />
      </li>
    </ul>
  </div>
);

export default PresentationChat;
