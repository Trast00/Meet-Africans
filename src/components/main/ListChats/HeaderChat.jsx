import React from 'react'
import myProfile from '../../../assets/images/profile_allassane.JPG'


const HeaderChat = () => {
  return (
    <header className='header-chat'>
      <div className="row chat-profile">
        <div className="img-profile">
          <img src={myProfile} alt={`your profile`} />
        </div>
        <div>
          <h4>Trast00</h4>
          <p>Offline</p>
        </div>
      </div>
    </header>
  )
}

export default HeaderChat