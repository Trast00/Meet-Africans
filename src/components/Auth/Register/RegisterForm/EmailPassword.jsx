import React from 'react'

const EmailPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  
  return (
    <div className="column step">
            <label htmlFor="email">
              <input
                type="email"
                className="input-default"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); validateEmail(); }}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </label>
            <label htmlFor="password">
              <input
                type="password"
                className="input-default"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </label>
            <label htmlFor="passwordconfirmation">
              <input
                type="password"
                className="input-default"
                placeholder="Confirm your password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                required
              />
              {errors.passwordConfirm && <p className="error">{errors.passwordConfirm}</p>}
            </label>
          </div>
  )
}

export default EmailPassword