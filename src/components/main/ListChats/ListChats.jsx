import React from 'react'
import HeaderChat from './HeaderChat'
import { RiSendPlaneFill } from "react-icons/ri";
import './ListChats.css'
import { listDiscussionTest, listFriendsTest, listMessageTest, listUsersTest } from '../../../_test_/testConstants';
import Message from '../Message/Message';
import { useParams } from 'react-router-dom';

const ListChats = () => {
  const param = useParams()
  const chatID = param['*'].slice(6) /* remove the 'chats/' of 'chats/idChat' */
  
  return (
    <div className='column list-chat'>
      <HeaderChat imgUrl="" name="" status="" />
      <ul className='no-styling column chats'>
        {listMessageTest.map((message, index) => {
          return <li key={index}><Message message={message} myID="testID" /></li>
        })}
      </ul>
      <form className="row chatBar">
        <input type="text" placeholder='message ...' />
        <button type='submit' className='btn-send-message'><RiSendPlaneFill /></button>
      </form>
    </div>
  )
}

export default ListChats