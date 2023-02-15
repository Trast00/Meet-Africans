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
import myProfile from '../../../assets/images/profile_allassane.JPG'
import './Profile.css'

const Profile = () => {
  const [email, setEmail] = useState('dickoallassane1997@gmail.com');

  const [username, setUsername] = useState("Trast01");
  const [age, setAge] = useState("23");
  const [gender, setGender] = useState("Male");

  const [minPartnerAge, setPartnerMinAge] = useState("18");
  const [maxPartnerAge, setPartnerMaxAge] = useState("99");
  const [partnerGender, setPartnerGender] = useState("Female");
  
  const [langage, setLangage] = useState("");
  const [country, setCountry] = useState("");

  const [interest, setInterest] = useState("");

  const [whatsapp, setWhatsapp] = useState("");
  const [facebook, setFacebook] = useState("");
  const [gmail, setGmail] = useState("");
  
  const [profileImg, setProfileImg] = useState(null);

  const [bio, setBio] = useState("");

  const [errors, setErrors] = useState({});
  
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

  return (
    <div className='profile'>
      <div>
        <div className="img-profile">
          <img src={myProfile} alt={`your profile`} />
        </div>
        <h4>Trast00</h4>
        <p className='edit'>Click here to edit you profile</p>
      </div>
      <form>
      <div className='column step profile-infos'>
            <label>
              <input type="email" className='input-default' placeholder="Enter your email" 
              value={email} onChange={(e) => {setEmail(e.target.value); validateEmail();}}/>
              {errors.email && <p className='error'>{errors.email}</p>}
            </label>
            
            <label>
              <input type="text" value={username} 
                className='input-default' placeholder='Full Name'
                onChange={(event) => setUsername(event.target.value)}
              />
              {errors.username && <p className='error'>{errors.username}</p>}
            </label>
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
            <label>Biographie (facultaive)</label>
            <label>
              <textarea type="mu" value={bio} 
                className='input-default bio' placeholder='Small description that other will see (what kind of person are you ? what are you looking for? what do you like? and what do you dislike)'
                onChange={(event) => setBio(event.target.value)}
                />
              {errors.bio && <p className='error'>{errors.bio}</p>}
            </label>
          </div>
          <button type='button' className='btn-action'>Save</button>
          <button type='button' className='btn-action btn-delete-account'>Delete account</button>
      </form>
    </div>
  )
}

export default Profile
