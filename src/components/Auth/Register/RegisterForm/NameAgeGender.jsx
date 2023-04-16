import React from 'react'

const NameAgeGender = () => {
  return (
    <div className="column step">
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
    <br />
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
  </div>
  )
}

export default NameAgeGender