import React, { useState } from 'react'
import logoColored from '../../assets/images/logo_colored.png'
import Login from '../../components/Auth/Login/Login'
import Register from '../../components/Auth/Register/Register'
import './Auth.css'

const Auth = () => {
  /* true => log In, false => register */
  const [isNewUser, setIsNewUser] = useState(false)
  return (
    <div className='flex-center auth'>
      <div className='wrapper'>
        <header className={isNewUser? "reversed-row": "row" }>
          <div className="flex-center logo">
            <img src={logoColored} alt="Meet Africa" />
            <h1>Meet Africa</h1>
          </div>
          <h2 onClick={()=> setIsNewUser(!isNewUser)}>{isNewUser?"Log In": "Join Us"}</h2>
        </header>
        <main>
          {isNewUser? <Login />
          :<Register />
          }
        </main>
      </div>
    </div>
  )
}

export default Auth
