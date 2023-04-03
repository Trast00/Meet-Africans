import React, { useState } from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';
import { FaRegSmile } from 'react-icons/fa';
import './ListChats.css';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Message from '../Message/Message';
import { addNewFriend, addNewMessage } from '../../../redux/chatReducers/chatReducers';
import HeaderChat from './HeaderChat';
import ListEmoji from './ListEmojie/ListEmoji';

const ListChats = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  let isNewFriend = false;

  const { id: myID } = useSelector((state) => state.dashboard.currentUser).data;
  let currentFriend = useSelector((state) => state.chat.currentFriend);
  const listFriend = useSelector((state) => state.chat.friends.listFriends);

  if (!currentFriend.idFriend && listFriend.length > 0) {
    [currentFriend] = listFriend;
  }

  const {
    idChat, idFriend, imgProfileUrl, name,
  } = currentFriend;
  let listMessage = useSelector((state) => state.chat.messages.listMessages)[idChat];
  if (!idFriend) {
    return (<p className="max-content flex-center">You have no friend !</p>);
  }

  if (!listMessage) {
    isNewFriend = true;
    listMessage = [{
      fromUserId: 'systeme',
      idChat,
      message: 'Make new friend now! Send a message and start a conversation',
      type: 'text',
    }];
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    /* validate input */
    if (message.trim()) {
      if (isNewFriend) {
        const newFriend = {
          name,
          idChat,
          idFriend,
          lastMessage: message,
          imgProfileUrl,
          nbrNewMessage: 0,
          connected: false,
        };
        dispatch(addNewFriend(newFriend));
      }

      const newMessage = {
        fromUserId: myID,
        idChat,
        message,
        type: 'text',
      };
      dispatch(addNewMessage(newMessage));
      setMessage('');
    }
  };

  return (
    <div className="column list-chat">
      <HeaderChat imgUrl={imgProfileUrl} name={name} status="Offline" />
      <ul className="no-styling column chats">
        {listMessage.map((message) => (
          <li key={uuidv4()}>
            <Message data={message} myID={myID} />
          </li>
        ))}
      </ul>
      <form className="row chatBar" onSubmit={(e) => handleSubmit(e)}>
        <FaRegSmile className="btn-emojie" />
        <input
          type="text"
          value={message}
          placeholder="message ..."
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" aria-label="send" className="btn-send-message"><RiSendPlaneFill /></button>
      </form>
      <ListEmoji />
    </div>
  );
};

export default ListChats;
