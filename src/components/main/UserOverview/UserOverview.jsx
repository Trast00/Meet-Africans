import React from 'react'
import './useroverview.css'
import myProfile from '../../../assets/images/profile_allassane.JPG'

const UserOverview = (props) => {
  const {user, detailed} = props
  const { 
    data: { 
      id, phone, prenom, imgProfileUrl,
      nom, language, localisation,
      age, relation, sexe 
    }, 
    contact: { gmail, messenger, whatsapp }, 
    info: { bio }, 
    partner: { 
      age: partnerAge, 
      relation: partnerRelation, 
      sexe: partnerSexe 
    } 
  } = user;

  return (
    <div className='max-width user-overview'>
      <div className="row imgs-wrapper">
        <div className="flex-center column profile-overview">
          <div className="img-profile">
            <img src={myProfile} alt={`${nom} profile`} />
            {/* connected */}
          </div>
          <h4>{nom}</h4>
          {localisation && <p>Linving in {localisation}</p>}
          {language && <p>Speak {language}</p>}
          <div className="searching">
            <h6>Looking for:</h6>
            <div className='column list-search'>
              <p> {partnerSexe} | </p>
              <p> {partnerAge} years old | </p>
              <p> {partnerRelation}</p>
            </div>
          </div>
          <button type='button' className='btn-action'>SEND MESSAGE</button>
        </div>
        <img src={myProfile} alt={`${nom} profile`} className='img-profile-big large-screen-only' />
      </div>

      {detailed && (
        <ul className="contact-info">
          <li>
            <img src="" alt="" />
            <p>{whatsapp}</p>
          </li>
          <li>
            <img src="" alt="" />
            <p>{messenger}</p>
          </li>
          <li>
            <img src="" alt="" />
            <p>{gmail}</p>
          </li>
        </ul>
      )}
      <div className="bio-wrapper">

      </div>
      {detailed && (
        <button type='button'>Contact</button>
      )}
    </div>
  )
}

export default UserOverview