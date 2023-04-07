import React from 'react';
import './Message.css';
import PropTypes from 'prop-types';
import { Twemoji } from 'react-emoji-render';

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

  const emojiRegex = /^[\u{1F000}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F170}-\u{1F251}]$/u;
  const testOneEmoji = (str) => {
    const matches = str.match(emojiRegex);
    return matches !== null && matches.length === 1;
  };

  const hasOneEmoji = testOneEmoji(message)
  return (
    <div className={`row message ${messageClass}`}>
      <Twemoji text={message}
      className={(hasOneEmoji ? "no-bg emoji-only": "")}
      />
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
