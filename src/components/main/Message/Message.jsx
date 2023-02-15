import React from 'react'
import './Message.css'

const Message = (props) => {
  const { myID } = props
  const { fromUserId, message,} = props.message;
  const myMessage = (fromUserId === myID)
  const systemeMessage = (fromUserId === "systeme")
  return (
    <div className={"row message" + (myMessage? " my-message"
    : (systemeMessage? " systeme-message"
    : " friend-message"))}>
      <p>{message}</p>
    </div>
  )
}

export default Message