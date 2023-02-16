import React, { useState } from 'react'
import './useroverview.css'
import myProfile from '../../../assets/images/profile_allassane.JPG'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import { listFriendsTest } from '../../../_test_/testConstants';

const UserOverview = (props) => {
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

  // Already contacted ?
  const friendData = listFriendsTest.filter(friend => friend.idFriend===id)
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
          {/*generate new id if we never chat, take old id if we already chat */}
        <Link to={`/dashboard/chats/${(friendData.length>0)? friendData[0].idChat: uuidv4()}`} 
        className='btn-action'>SEND MESSAGE</Link>
        </div>
        <img src={myProfile} alt={`${nom} profile`} className='img-profile-big large-screen-only' />
      </div>
    </div>
  )
}

export default UserOverview