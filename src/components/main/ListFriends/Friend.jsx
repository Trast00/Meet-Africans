/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileImg from '../../../assets/images/headline_profile.png';
import { updateCurrentFriend } from '../../../redux/chatReducers/chatReducers';

const Friend = (props) => {
  const { friend } = props;
  const {
    name,
    idChat,
    lastMessage,
    nbrNewMessage,
    date,
    connected,
  } = friend;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(updateCurrentFriend(friend));
    navigate(`/dashboard/chats/${idChat}`);
  };
  return (
    <div className="row friend" onClick={handleClick}>
      <div className="img-wrapper">
        <img src={profileImg} alt={`profile of ${name}`} />
        {connected && <div className="green-round" />}
      </div>
      <div className="column description-wrapper">
        <h4>{name}</h4>
        <p>{lastMessage}</p>
      </div>
      <div className="info-wrapper">
        <p>{date}</p>
        {(nbrNewMessage > 0) && <p className="newMessages">0</p>}
      </div>
    </div>
  );
};

Friend.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string.isRequired,
    idChat: PropTypes.string.isRequired,
    lastMessage: PropTypes.string.isRequired,
    nbrNewMessage: PropTypes.number,
    date: PropTypes.string,
    connected: PropTypes.bool,
  }),
};

Friend.defaultProps = {
  friend: {
    name: '',
    idChat: 0,
    lastMessage: '',
    nbrNewMessage: 0,
    date: '',
    connected: false,
  },
};

export default Friend;
