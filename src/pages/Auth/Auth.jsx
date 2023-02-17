import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import logoColored from '../../assets/images/logo_colored.png'
import Login from '../../components/Auth/Login/Login'
import Register from '../../components/Auth/Register/Register'
import './Auth.css'

const Auth = () => {
  /* true => log In, false => register */
  const currentLocation = useLocation().pathname
  console.log(currentLocation);
  const isNewUser = currentLocation.includes("/auth/register") 
  return (
    <div className='flex-center auth'>
      <div className='wrapper'>
        <header className={isNewUser? "reversed-row": "row" }>
          <div className="flex-center logo">
            <img src={logoColored} alt="Meet Africa" />
            <h1>Meet Africa</h1>
          </div>
          <h2>{isNewUser?"Join Us": "Log In"}</h2>
        </header>
        <main>
          <Routes>
            <Route exact path='register' element={<Register />} />
            <Route exact path='login' element={<Login />} />
            <Route exact path='/' element={<Register />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default Auth
