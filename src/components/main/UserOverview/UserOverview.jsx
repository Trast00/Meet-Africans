import React, { useState } from 'react'
import './useroverview.css'
import myProfile from '../../../assets/images/profile_allassane.JPG'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentFriend } from '../../../redux/chatReducers/chatReducers';

const UserOverview = (props) => {
  const dispatch = useDispatch()
  const {user, detailed} = props
  const { 
    data: { 
      id, imgProfileUrl,
      nom, language, localisation,
      age, relation, sexe 
    },
    info: { bio }, 
    partner: { 
      age: partnerAge, 
      relation: partnerRelation, 
      sexe: partnerSexe 
    } 
  } = user;

  const [showBio, setShowBio] = useState(detailed)
  const listFriend = useSelector(state => state.chat.friends.listFriends)
  const navigate = useNavigate()
  const sendMessage = () => {
    // Already contacted ?
    const friendData = listFriend.filter(friend => friend.idFriend===id)
    const idChat = (friendData.length>0)? friendData[0].idChat: uuidv4()
    const currentFriend = {
      name:nom, idChat, idFriend:id, lastMessage: "", 
      imgProfileUrl, nbrNewMessage: 0, connected:false,
    }
    dispatch(updateCurrentFriend(currentFriend))
    navigate(`/dashboard/chats/${idChat}`)
  }
  return (
    <div className='max-width user-overview'>
      <div className="row imgs-wrapper">
        <div className="flex-center column profile-overview">
          <div className="img-profile">
            <img src={myProfile} alt={`${nom} profile`} />
          </div>
          <h4>{nom}</h4>
          {localisation && <p>Linving in {localisation}</p>}
          {language && <p>Speak {language}</p>}
          <div className="row search-wrapper">
            <div className="searching">
              <h6>I am:</h6>
              <div className='column list-search'>
                <p> {sexe}, </p>
                <p> {age} years old, </p>
                <p> {relation}</p>
              </div>
            </div>
            <div className="searching">
              <h6>Looking for:</h6>
              <div className='column list-search'>
                <p> {partnerSexe}, </p>
                <p> {partnerAge} years old, </p>
                <p> {partnerRelation}</p>
              </div>
            </div>
          </div>
          
          {showBio? (
            <div className="bio-wrapper">
              <p className='bio-description'>{bio}</p>
              <p className='btn-bio'
                onClick={()=>setShowBio(false)}>Show less</p>
            </div>
          )
          : <p className='btn-bio'
            onClick={()=>setShowBio(true)}>Show more</p>
          }
        <button type='button' onClick={sendMessage}
        className='btn-action'>SEND MESSAGE</button>
        </div>
        <img src={myProfile} alt={`${nom} profile`} className='img-profile-big large-screen-only' />
      </div>
    </div>
  )
}

export default UserOverview