import React from 'react'
import HeaderChat from './HeaderChat'
import { RiSendPlaneFill } from "react-icons/ri";
import './ListChats.css'
import { listMessageTest } from '../../../_test_/testConstants';
import Message from '../Message/Message';

const ListChats = () => {
  return (
    <div className='column list-chat'>
      <HeaderChat />
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