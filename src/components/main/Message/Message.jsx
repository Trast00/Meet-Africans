import React from 'react';
import './Message.css';
import PropTypes from 'prop-types';

const Message = (props) => {
  const { myID, data } = props;
  const { fromUserId, message } = data;

  let messageClass = '';
  if (fromUserId === myID) {
    messageClass = 'my-message';
  } else if (fromUserId === 'systeme') {
    messageClass = 'systeme-message';
  } else {
    messageClass = 'friend-message';
  }
  return (
    <div className={`row message ${messageClass}`}>
      <p>{message}</p>
    </div>
  );
};

Message.propTypes = {
  myID: PropTypes.string,
  data: PropTypes.shape({
    fromUserId: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }),
};

Message.defaultProps = {
  myID: '',
  data: { fromUserId: '', message: '' },
};

export default Message;
