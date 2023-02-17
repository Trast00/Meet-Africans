import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './login.css'

const Login = () => {
  const [email, setEmail] = useState('dickoallassane1997@gmail.com');
  const [password, setPassword] = useState('dicko123');

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }
    if (!password) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    setErrors(errors)
    return isValid
  }

  return (
    <form className='flex-center column login-from' onSubmit={validateForm}>
      <label>
        <input type="email" className='input-default' placeholder="Enter your email" 
        value={email} onChange={(e) => {setEmail(e.target.value);}}/>
        {errors.email && <p className='error'>{errors.email}</p>}
      </label>
      <label>
        <input type="password" className='input-default' placeholder="Enter your password" 
        value={password} onChange={(e) => setPassword(e.target.value)} required/>
        {errors.password && <p className='error'>{errors.password}</p>}
      </label>
      <Link to="/dashboard" className="no-style btn-action">Connect</Link>
      <Link to="/auth/register" className='btn-register'>Create a Account</Link>
    </form>
  )
}

export default Login
