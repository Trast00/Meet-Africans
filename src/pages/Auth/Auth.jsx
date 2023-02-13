import React, { useState } from 'react'
import logoColored from '../../assets/images/logo_colored.png'
import AuthGuide from '../../components/Auth/AuthGuide/AuthGuide'
import AuthSteps from '../../components/Auth/AuthSteps/AuthSteps'
import './Auth.css'

const Auth = () => {
  /* true => log In, false => register */
  const [isNewUser, setIsNewUser] = useState(false)
  return (
    <div className='auth'>
      <header className='row'>
        <div className={isNewUser? "flex-center logo reversed-row"
        : "flex-center logo" }>
          <img src={logoColored} alt="Meet Africa" />
          <h1>Meet Africa</h1>
        </div>
        <h2>{isNewUser?"Log In": "Join Us"}</h2>
      </header>
      <main>
        <AuthSteps />
        <AuthGuide />
      </main>
    </div>
  )
}

export default Auth
