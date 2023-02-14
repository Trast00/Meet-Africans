import React from 'react'
import profileImg from '../../../assets/images/headline_profile.png'

const Friend = (props) => {
  const { 
    name, 
    //idChat, 
    //idFriend, 
    lastMessage, 
    //imgProfileUrl,
    nbrNewMessage, 
    date,
    connected 
  } = props.friend;
  return (
    <div className='row friend'>
      <div className='img-wrapper'>
        <img src={profileImg} alt={`profile of ${name}`} />
        {connected && <div className='green-round'/>}
      </div>
      <div className="column description-wrapper">
        <h4>{name}</h4>
        <p>{lastMessage}</p>
      </div>
      <div className='info-wrapper'>
        <p>{date}</p>
        {(nbrNewMessage>0) && <p className='newMessages'>0</p>}
      </div>
    </div>
  )
}

export default Friend