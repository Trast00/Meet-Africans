import React, { useState } from 'react'
import interest1 from '../../../assets/images/icons_mariage.png'
import interest2 from '../../../assets/images/icons_love.png'
import interest3 from '../../../assets/images/icons_deeprelation.png'
import interest4 from '../../../assets/images/icons_frienship.png'
import interest5 from '../../../assets/images/icons_fun.png'
import interest6 from '../../../assets/images/icons_unknown.png'
import iconsWhatsapp from '../../../assets/images/icons_whatsapp.png'
import iconsFacebook from '../../../assets/images/icons_facebook.png'
import iconsGmail from '../../../assets/images/icons_gmail.png'
import './register.css'
import { Link } from 'react-router-dom'

const Register = () => {
  const [step, setStep] = useState(1)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const [minPartnerAge, setPartnerMinAge] = useState("");
  const [maxPartnerAge, setPartnerMaxAge] = useState("");
  const [partnerGender, setPartnerGender] = useState("");
  
  const [langage, setLangage] = useState("");
  const [country, setCountry] = useState("");

  const [interest, setInterest] = useState("");

  const [whatsapp, setWhatsapp] = useState("");
  const [facebook, setFacebook] = useState("");
  const [gmail, setGmail] = useState("");
  
  const [profileImg, setProfileImg] = useState(null);

  const [bio, setBio] = useState("");

  const [errors, setErrors] = useState({});
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      if(step<8){
        setStep(step+1)
      }
    } 
  };
  
  const validateEmail = () => {
    const errors = {};
    let isValid = true;

    if (!email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  }

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    switch(step){
      case 1: {
        validateEmail(email)
        if (!password) {
          errors.password = 'Password is required';
          isValid = false;
        } else if (password.length < 6) {
          errors.password = 'Password must be at least 6 characters long';
          isValid = false;
        }
    
        if (!passwordConfirm) {
          errors.passwordConfirm = 'Password confirmation is required';
          isValid = false;
        } else if (password !== passwordConfirm) {
          errors.passwordConfirm = 'Passwords do not match';
          isValid = false;
        }
        break
      }
      case 2: {
        if (!username) {
          errors.username = "Please enter a username."
          isValid = false;
        }
    
        if (!age) {
          errors.age = "Please enter your age."
          isValid = false;
        }
    
        if (age < 18 || age > 99) {
          errors.age = "Please enter your age between 18 and 99."
          isValid = false;
        }
    
        if (!gender) {
          errors.gender = "Please select your gender."
          isValid = false;
        }
        break
      }
      case 3: {
        if (minPartnerAge < 18 || minPartnerAge > 99) {
          errors.minPartnerAge = "Please enter your partner age between 18 and 99."
          isValid = false;
        }
    
        if (maxPartnerAge < 18 || maxPartnerAge > 99) {
          errors.maxPartnerAge = "Please enter your partner age between 18 and 99."
          isValid = false;
        }

        if (minPartnerAge > maxPartnerAge ) {
          errors.minPartnerAge = "This age should be lower (than the maximum age)"
          errors.maxPartnerAge = "This age should be higher (than the minimum age)"
          isValid = false;
        }

        if (!partnerGender) {
          errors.partnerGender = "Please select your partner gender."
          isValid = false;
        }
        break
      }
      case 4: {
        if (!langage) {
          errors.langage = "Please select your langage."
          isValid = false;
        }
        break
      }

      case 5: {
        if(!interest){
          errors.interest = "Please select your interests."
          isValid = false;
        }
        break
      }
      case 6: {
        isValid = true
        break
      }
      case 7: {
        isValid = true
        break
      }
      default: {
        isValid = false
        break;
      }
    }
    setErrors(errors)
    return isValid
  }

  return (
    <div className='auth-step'>
      <form className='flex-center column auth-form' onSubmit={(e)=> handleSubmit(e)}>
        {(step===1) && (
          <div className='column step'>
            <label>
              <input type="email" className='input-default' placeholder="Enter your email" 
              value={email} onChange={(e) => {setEmail(e.target.value); validateEmail();}}/>
              {errors.email && <p className='error'>{errors.email}</p>}
            </label>
            <label>
              <input type="password" className='input-default' placeholder="Enter your password" 
              value={password} onChange={(e) => setPassword(e.target.value)} required/>
              {errors.password && <p className='error'>{errors.password}</p>}
            </label>
            <label>
              <input type="password" className='input-default' placeholder="Confirm your password" 
              value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} required/>
              {errors.passwordConfirm && <p className='error'>{errors.passwordConfirm}</p>}
            </label>
          </div>
        )}
        {(step===2) && (
          <div className='column step'>
            <label>
              <input type="text" value={username} 
                className='input-default' placeholder='Full Name'
                onChange={(event) => setUsername(event.target.value)}
              />
              {errors.username && <p className='error'>{errors.username}</p>}
            </label>
            <br />
            <label>
              <input type="number" value={age} 
                className='input-default' placeholder='Age'
                onChange={(event) => setAge(event.target.value)}
              />
              {errors.age && <p className='error'>{errors.age}</p>}
            </label>
            <label className='flex-center labeled'>
              Your gender: 
              <select value={gender} className='input-default labeled-input'
                onChange={(e)=> setGender(e.target.value)}>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </label>
            {errors.gender && <p className='error'>{errors.gender}</p>}
          </div>
        )}

        {(step===3) && (
          <div className='column step'>
            <label>My partners age should be :</label>
            <label className='labeled'>
              between:
              <input type="number" value={minPartnerAge} 
                className='input-default labeled-input' placeholder='minimum Age'
                onChange={(event) => setPartnerMinAge(event.target.value)}
              />
              {errors.minPartnerAge && <p className='error'>{errors.minPartnerAge}</p>}
            </label>
            <label className='labeled'>
              and:
              <input type="number" value={maxPartnerAge} 
                className='input-default labeled-input' placeholder='maximum Age'
                onChange={(event) => setPartnerMaxAge(event.target.value)}
              />
              {errors.maxPartnerAge && <p className='error'>{errors.maxPartnerAge}</p>}
            </label>
            <label className='flex-center labeled'>
              Partner Gender: 
              <select value={partnerGender} className='input-default labeled-input'
                onChange={(e)=> setPartnerGender(e.target.value)}>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Male & Female">Male & Female</option>
                <option value="Male & Female & Other">Male & Female & Other</option>
              </select>
            </label>
            {errors.partnerGender && <p className='error'>{errors.partnerGender}</p>}
          </div>
        )}

        {(step===4) && (
          <div className='column step'>
            <label className='flex-center labeled'>
              Langage: 
              <select value={langage} className='input-default labeled-input'
                onChange={(e)=> setLangage(e.target.value)}>
                <option value="">Select</option>
                <option value="Français">Français</option>
                <option value="English">English</option>
                <option value="Français & English">Français & English</option>
              </select>
            </label>
            {errors.langage && <p className='error'>{errors.langage}</p>}
            <label className='labeled'>
              Country:
              <input type="text" value={country} 
                className='input-default labeled-input' placeholder='Country (Mali, Senegale ...)'
                onChange={(event) => setCountry(event.target.value)}
              />
              {errors.country && <p className='error'>{errors.country}</p>}
            </label>
          </div>
        )}

        {(step===5) && (
          <div className='column step'>
            <ul className='no-styling list-interests'>
              <li onClick={()=> setInterest("Mariage")} 
              className={(interest==="Mariage")?'flex-center interest active'
              : "flex-center interest"}>
                <img src={interest1} alt="mariage ring" />
                <p>Mariage</p>
              </li>
              <li onClick={()=> setInterest("Deep relationship")} 
              className={(interest==="Deep relationship")?'flex-center interest active'
              : "flex-center interest"}>
                <img src={interest3} alt="Love Red Rose" />
                <p>Deep relationship</p>
              </li>
              <li onClick={()=> setInterest("Love")} 
              className={(interest==="Love")?'flex-center interest active'
              : "flex-center interest"}>
                <img src={interest2} alt="Love red heart" />
                <p>Love</p>
              </li>
              <li onClick={()=> setInterest("Friendship")} 
              className={(interest==="Friendship")?'flex-center interest active'
              : "flex-center interest"}>
                <img src={interest4} alt="Friendship yellow heart" />
                <p>Friendship</p>
              </li>
              <li onClick={()=> setInterest("Fun")} 
              className={(interest==="Fun")?'flex-center interest active'
              : "flex-center interest"}>
                <img src={interest5} alt="Party" />
                <p>Fun</p>
              </li>
              <li onClick={()=> setInterest("Unspecified")} 
              className={(interest==="Unspecified")?'flex-center interest active'
              : "flex-center interest"}>
                <img src={interest6} alt="Unpecified" />
                <p>Unspecified</p>
              </li>
            </ul>
            {errors.interest && <p className='error'>{errors.interest}</p>}
          </div>
        )}

        {(step===6) && (
          <div className='column step'>
            <label className='flex-center'>
              <img className='auth-icons-social' src={iconsWhatsapp} alt="whatsapp" />
              <input type="text" className='input-default' placeholder="Enter your email" 
              value={whatsapp} onChange={(e) => {setWhatsapp(e.target.value);}}/>
            </label>
            <label className='flex-center'>
              <img className='auth-icons-social' src={iconsFacebook} alt="facebook" />
              <input type="text" className='input-default' placeholder="Enter your facebook info" 
              value={facebook} onChange={(e) => setFacebook(e.target.value)}/>
            </label>
            <label className='flex-center'>
              <img className='auth-icons-social' src={iconsGmail} alt="whatsapp" />
              <input type="text" className='input-default' placeholder="Enter your email address" 
              value={gmail} onChange={(e) => setGmail(e.target.value)}/>
            </label>
          </div>
        )}

        {(step===7) && (
          <div className='column step'>
            <label>Biographie (facultaive)</label>
            <label>
              <textarea type="mu" value={bio} 
                className='input-default bio' placeholder='Small description that other will see (what kind of person are you ? what are you looking for? what do you like? and what do you dislike)'
                onChange={(event) => setBio(event.target.value)}
                />
              {errors.bio && <p className='error'>{errors.bio}</p>}
            </label>
          </div>
        )}

        {(step===8) && (
          <div className='flex-center column step last'>
            <h3>Finishing</h3>
            <p>Loading  ... (this loading will never end)</p>
          </div>
        )}

        {/* Profile Image: Should be Implemented later */}
        {(step===-1) && (
          <div className='column step auth-profile'>
            <label>
              Choose your profile picture
              <input type="file" accept="image/*"
                className='input-default' placeholder='Click to import'
              />
              {errors.username && <p className='error'>{errors.username}</p>}

              {profileImg && <img src="" alt="your profile" />}
            </label>
          </div>
        )}


        {(step===1) && (
          <button type="submit" className="no-style btn-action">Join US!</button>
        )} 
        {(step>1 && step<8) && <div className='row auth-navbtns'>
            <button type="button" onClick={() => setStep(step-1)}
            className="no-style btn-auth">Previous</button>
            <button type="submit" className="no-style btn-auth">Next</button>
          </div>
        }
        {(step===8) && (
          <Link to='/dashboard' className="no-style btn-action">Finish</Link>
        )} 
        <Link to="/auth/login" className='btn-login'>Already Have a Account</Link>
      </form>
    </div>
  )
}

export default Register
