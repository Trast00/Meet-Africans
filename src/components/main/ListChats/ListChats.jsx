import React, { useState } from 'react'
import HeaderChat from './HeaderChat'
import { RiSendPlaneFill } from "react-icons/ri";
import './ListChats.css'
import { listDiscussionTest, listFriendsTest, listMessageTest, listUsersTest } from '../../../_test_/testConstants';
import Message from '../Message/Message';
import { useDispatch, useSelector } from 'react-redux';
import { addNewFriend, addNewMessage } from '../../../redux/chatReducers/chatReducers';

const ListChats = () => {
  const dispatch = useDispatch()
  const [message, setMessage] = useState('')
  let isNewFriend = false

  const {id:myID} = useSelector(state => state.dashboard.currentUser).data
  let currentFriend = useSelector(state => state.chat.currentFriend) 
  let listFriend = useSelector(state => state.chat.friends.listFriends)

  if (!currentFriend.idFriend && listFriend.length>0){
    currentFriend = listFriend[0] 
  }

  const {idChat, idFriend, imgProfileUrl, name} = currentFriend
  let listMessage = useSelector(state => state.chat.messages.listMessages)[idChat]
  if (!idFriend) {
    return (<p className='max-content flex-center'>You have no friend !</p>)
  }

  if(!listMessage){
    isNewFriend = true
    listMessage = [{
      fromUserId: "systeme",
      idChat: idChat,
      message: "Make new friend now! Send a message and start a conversation",
      type: "text"
    },]
  }

  
  const handleSubmit = (event) => {
    event.preventDefault()
    /* validate input */
    if(message.trim()) {
      if (isNewFriend) {
        const newFriend = {
          name: name,
          idChat,
          idFriend,
          lastMessage: message,
          imgProfileUrl,
          nbrNewMessage: 0,
          connected: false
        }
        dispatch(addNewFriend(newFriend))
      }

      const newMessage = {
        fromUserId: myID,
        idChat,
        message,
        type: "text"
      }
      dispatch(addNewMessage(newMessage))
      setMessage('')
    }
  }

  return (
    <div className='column list-chat'>
      <HeaderChat imgUrl={imgProfileUrl} name={name} status="offline" />
      <ul className='no-styling column chats'>
        {listMessage.map((message, index) => {
          return <li key={index}><Message message={message} myID={myID} /></li>
        })}
      </ul>
      <form className="row chatBar" onSubmit={(e)=> handleSubmit(e)}>
        <input type="text" value={message} placeholder='message ...' 
          onChange={(e)=> setMessage(e.target.value)} />
        <button type='submit' className='btn-send-message'><RiSendPlaneFill /></button>
      </form>
    </div>
  )
}

export default ListChats