/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import interest1 from '../../../assets/images/icons_mariage.png';
import interest2 from '../../../assets/images/icons_love.png';
import interest3 from '../../../assets/images/icons_deeprelation.png';
import interest4 from '../../../assets/images/icons_frienship.png';
import interest5 from '../../../assets/images/icons_fun.png';
import interest6 from '../../../assets/images/icons_unknown.png';
import iconsWhatsapp from '../../../assets/images/icons_whatsapp.png';
import iconsFacebook from '../../../assets/images/icons_facebook.png';
import iconsGmail from '../../../assets/images/icons_gmail.png';
import myProfile from '../../../assets/images/profile_allassane.JPG';
import './Profile.css';
import { updateCurrentUser } from '../../../redux/dashboard/dashboardReducer';

const Profile = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.dashboard.currentUser);

  const {
    data: {
      id,
      nom: currentUsername,
      imgProfileUrl: currentImgProfileUrl,
      language: currentLanguage,
      localisation: currentCountry,
      age: currentAge,
      relation: currentRelation,
      sexe: currentGender,
      email: currentEmail,
    },
    contact: {
      gmail: currentGmail,
      messenger: currentMessenger,
      whatsapp: currentWhatsapp,
    },
    info: {
      bio: currentBio,
    },
    partner: {
      age: currentPartnerAge,
      sexe: currentPartnerGender,
    },
  } = currentUser;

  const [email, setEmail] = useState(currentEmail);

  const [username, setUsername] = useState(currentUsername);
  const [age, setAge] = useState(currentAge);
  const [gender, setGender] = useState(currentGender);

  const [minPartnerAge, setPartnerMinAge] = useState(parseInt(currentPartnerAge.slice(0, 2), 10));
  const [maxPartnerAge, setPartnerMaxAge] = useState(parseInt(currentPartnerAge.slice(3, 5), 10));
  const [partnerGender, setPartnerGender] = useState(currentPartnerGender);

  const [langage, setLangage] = useState(currentLanguage);
  const [country, setCountry] = useState(currentCountry);

  const [interest, setInterest] = useState(currentRelation);

  const [whatsapp, setWhatsapp] = useState(currentWhatsapp);
  const [facebook, setFacebook] = useState(currentMessenger);
  const [gmail, setGmail] = useState(currentGmail);

  // const [profileImg, setProfileImg] = useState(null);

  const [bio, setBio] = useState(currentBio);

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
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    validateEmail(email);

    if (!username) {
      errors.username = 'Please enter a username.';
      isValid = false;
    }

    if (!age) {
      errors.age = 'Please enter your age.';
      isValid = false;
    }

    if (age < 18 || age > 99) {
      errors.age = 'Please enter your age between 18 and 99.';
      isValid = false;
    }

    if (!gender) {
      errors.gender = 'Please select your gender.';
      isValid = false;
    }

    if (minPartnerAge < 18 || minPartnerAge > 99) {
      errors.minPartnerAge = 'Please enter your partner age between 18 and 99.';
      isValid = false;
    }

    if (maxPartnerAge < 18 || maxPartnerAge > 99) {
      errors.maxPartnerAge = 'Please enter your partner age between 18 and 99.';
      isValid = false;
    }

    if (minPartnerAge > maxPartnerAge) {
      errors.minPartnerAge = 'This age should be lower (than the maximum age)';
      errors.maxPartnerAge = 'This age should be higher (than the minimum age)';
      isValid = false;
    }

    if (!partnerGender) {
      errors.partnerGender = 'Please select your partner gender.';
      isValid = false;
    }
    if (!langage) {
      errors.langage = 'Please select your langage.';
      isValid = false;
    }
    if (!interest) {
      errors.interest = 'Please select your interests.';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const [saved, setSaved] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const updateData = {
        data: {
          id,
          nom: username,
          imgProfileUrl: currentImgProfileUrl,
          language: langage,
          localisation: country,
          age: 18,
          relation: interest,
          sexe: gender,
          email,
        },
        contact: {
          gmail,
          messenger: facebook,
          whatsapp,
        },
        info: {
          bio,
        },
        partner: {
          age: `${minPartnerAge}-${maxPartnerAge}`,
          relation: interest,
          sexe: partnerGender,
        },
      };
      dispatch(updateCurrentUser(updateData));
      setSaved(true);
    }
  };

  return (
    <div className="profile">
      <div>
        <div className="img-profile">
          <img src={myProfile} alt="your profile" />
        </div>
        <h4>Trast00</h4>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="flex-center column profile-form">
        <div className="column step profile-infos">
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

          <label htmlFor="fullname">
            <input
              type="text"
              value={username}
              className="input-default"
              placeholder="Full Name"
              onChange={(event) => setUsername(event.target.value)}
            />
            {errors.username && <p className="error">{errors.username}</p>}
          </label>
          <label htmlFor="age">
            <input
              type="number"
              value={age}
              className="input-default"
              placeholder="Age"
              onChange={(event) => setAge(event.target.value)}
            />
            {errors.age && <p className="error">{errors.age}</p>}
          </label>
          <label htmlFor="gender" className="flex-center labeled">
            Your gender:
            <select
              value={gender}
              className="input-default labeled-input"
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>
          {errors.gender && <p className="error">{errors.gender}</p>}
          <p>My partners age should be :</p>
          <label htmlFor="minPartnerAge" className="labeled">
            between:
            <input
              type="number"
              value={minPartnerAge}
              className="input-default labeled-input"
              placeholder="minimum Age"
              onChange={(event) => setPartnerMinAge(event.target.value)}
            />
            {errors.minPartnerAge && <p className="error">{errors.minPartnerAge}</p>}
          </label>
          <label htmlFor="maxPartnerAge" className="labeled">
            and:
            <input
              type="number"
              value={maxPartnerAge}
              className="input-default labeled-input"
              placeholder="maximum Age"
              onChange={(event) => setPartnerMaxAge(event.target.value)}
            />
            {errors.maxPartnerAge && <p className="error">{errors.maxPartnerAge}</p>}
          </label>
          <label htmlFor="partnerGender" className="flex-center labeled">
            Partner Gender:
            <select
              value={partnerGender}
              className="input-default labeled-input"
              onChange={(e) => setPartnerGender(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Male & Female">Male & Female</option>
              <option value="Male & Female & Other">Male & Female & Other</option>
            </select>
          </label>
          {errors.partnerGender && <p className="error">{errors.partnerGender}</p>}
          <label htmlFor="language" className="flex-center labeled">
            Langage:
            <select
              value={langage}
              className="input-default labeled-input"
              onChange={(e) => setLangage(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Français">Français</option>
              <option value="English">English</option>
              <option value="Français & English">Français & English</option>
            </select>
          </label>
          {errors.langage && <p className="error">{errors.langage}</p>}
          <label htmlFor="country" className="labeled">
            Country:
            <input
              type="text"
              value={country}
              className="input-default labeled-input"
              placeholder="Country (Mali, Senegale ...)"
              onChange={(event) => setCountry(event.target.value)}
            />
            {errors.country && <p className="error">{errors.country}</p>}
          </label>
          <ul className="no-styling list-interests">
            <li
              onClick={() => setInterest('Mariage')}
              className={(interest === 'Mariage') ? 'flex-center interest active'
                : 'flex-center interest'}
            >
              <img src={interest1} alt="mariage ring" />
              <p>Mariage</p>
            </li>
            <li
              onClick={() => setInterest('Deep relationship')}
              className={(interest === 'Deep relationship') ? 'flex-center interest active'
                : 'flex-center interest'}
            >
              <img src={interest3} alt="Love Red Rose" />
              <p>Deep relationship</p>
            </li>
            <li
              onClick={() => setInterest('Love')}
              className={(interest === 'Love') ? 'flex-center interest active'
                : 'flex-center interest'}
            >
              <img src={interest2} alt="Love red heart" />
              <p>Love</p>
            </li>
            <li
              onClick={() => setInterest('Friendship')}
              className={(interest === 'Friendship') ? 'flex-center interest active'
                : 'flex-center interest'}
            >
              <img src={interest4} alt="Friendship yellow heart" />
              <p>Friendship</p>
            </li>
            <li
              onClick={() => setInterest('Fun')}
              className={(interest === 'Fun') ? 'flex-center interest active'
                : 'flex-center interest'}
            >
              <img src={interest5} alt="Party" />
              <p>Fun</p>
            </li>
            <li
              onClick={() => setInterest('Unspecified')}
              className={(interest === 'Unspecified') ? 'flex-center interest active'
                : 'flex-center interest'}
            >
              <img src={interest6} alt="Unpecified" />
              <p>Unspecified</p>
            </li>
          </ul>
          {errors.interest && <p className="error">{errors.interest}</p>}
          <label htmlFor="gmail" className="flex-center">
            <img className="auth-icons-social" src={iconsWhatsapp} alt="whatsapp" />
            <input
              type="text"
              className="input-default"
              placeholder="Enter your email"
              value={whatsapp}
              onChange={(e) => { setWhatsapp(e.target.value); }}
            />
          </label>
          <label htmlFor="facebook" className="flex-center">
            <img className="auth-icons-social" src={iconsFacebook} alt="facebook" />
            <input
              type="text"
              className="input-default"
              placeholder="Enter your facebook info"
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
            />
          </label>
          <label htmlFor="whatsapp" className="flex-center">
            <img className="auth-icons-social" src={iconsGmail} alt="whatsapp" />
            <input
              type="text"
              className="input-default"
              placeholder="Enter your email address"
              value={gmail}
              onChange={(e) => setGmail(e.target.value)}
            />
          </label>
          <p>Biographie (facultaive)</p>
          <label htmlFor="bio">
            <textarea
              value={bio}
              className="input-default bio"
              placeholder="Small description that other will see (what kind of person are you ? what are you looking for? what do you like? and what do you dislike)"
              onChange={(event) => setBio(event.target.value)}
            />
            {errors.bio && <p className="error">{errors.bio}</p>}
          </label>
        </div>
        {saved && <p className="profile-save-sucess">Saved</p>}
        <button type="submit" className="btn-action" onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
};

export default Profile;
