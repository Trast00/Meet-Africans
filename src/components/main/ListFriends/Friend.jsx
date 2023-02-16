import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import profileImg from '../../../assets/images/headline_profile.png'
import { updateCurrentFriend } from '../../../redux/chatReducers/chatReducers';

const Friend = (props) => {
  const {friend} = props
  const { 
    name, 
    idChat, 
    //idFriend, 
    lastMessage, 
    //imgProfileUrl,
    nbrNewMessage, 
    date,
    connected 
  } = friend;

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(updateCurrentFriend(friend))
    navigate(`/dashboard/chats/${idChat}`)
  }
  return (
    <div className='row friend' onClick={handleClick}>
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