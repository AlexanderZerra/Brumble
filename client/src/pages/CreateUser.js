import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

//user id is your code to add gyms

const CreateUser = (props) => {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [bio, setBio] = useState('')
  const [image, setImage] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleLocationChange = (e) => {
    setLocation(e.target.value)
  }
  const handleUserNameChange = (e) => {
    setUserName(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handleBioChange = (e) => {
    setBio(e.target.value)
  }
  const handleImageChange = (e) => {
    setImage(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post(`${BASE_URL}/user`, {
      name: name,
      location: location,
      username: username,
      email: email,
      bio: bio,
      image: image
    })
    props.history.push('/')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Your Name"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <input
          placeholder="Zipcode"
          type="text"
          value={location}
          onChange={handleLocationChange}
        />
        <input
          placeholder="UserName"
          type="text"
          value={username}
          onChange={handleUserNameChange}
        />
        <input
          placeholder="email"
          type="text"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          placeholder="About Me"
          type="text"
          value={bio}
          onChange={handleBioChange}
        />
        <input
          placeholder="Image Link"
          type="url"
          value={image}
          onChange={handleImageChange}
        />
        <button type="submit"> Submit</button>
      </form>
    </div>
  )
}
export default CreateUser
