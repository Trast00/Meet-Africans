import React from 'react';
import PropTypes from 'prop-types';
import myProfile from '../../../assets/images/headline_profile.png';

const HeaderChat = (props) => {
  const { name, status } = props;

  return (
    <header className="header-chat">
      <div className="row chat-profile">
        <div className="img-profile">
          <img src={myProfile} alt="your profile" />
        </div>
        <div>
          <h4>{name}</h4>
          <p>{status}</p>
        </div>
      </div>
    </header>
  );
};

HeaderChat.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default HeaderChat;
