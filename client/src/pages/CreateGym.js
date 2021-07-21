import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const CreateGym = (props) => {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [rating, setRating] = useState('')
  const [description, setDescription] = useState('')
  const [spotter, setSpotter] = useState(false)
  const [image, setImage] = useState('')
  const [userId, setUserId] = useState(1)

  const handleImageChange = (e) => {
    setImage(e.target.value)
  }
  const handleUserIdChange = (e) => {
    setUserId(e.target.value)
  }
  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleLocationChange = (e) => {
    setLocation(e.target.value)
  }
  const handleRatingChange = (e) => {
    setRating(e.target.value)
  }
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post(`${BASE_URL}/gym`, {
      name: name,
      location: location,
      rating: rating,
      description: description,
      spotter: spotter,
      image: image,
      userId: 1
    })

    props.history.push('/')
  }

  return (
    <div className="createall">
      <h1 className="formhead">Add your Gym </h1>
      <body className="formbody">
        <div className="formgym">
          <form onSubmit={handleSubmit} className="formform">
            <input
              placeholder="Enter user code"
              type="text"
              value={userId}
              onChange={handleUserIdChange}
            />
            <input
              placeholder="Gym Name"
              label="Gym Name"
              type="text"
              value={name}
              onChange={handleNameChange}
              maxLength={255}
            />
            <input
              placeholder="Gym Description"
              label="Description"
              type="text"
              value={description}
              onChange={handleDescriptionChange}
              maxLength={255}
            />
            <input
              placeholder="Enter ZipCode"
              label="Enter Zip Code"
              type="text"
              value={location}
              onChange={handleLocationChange}
            />
            <input
              type="url"
              label="Gym Picture"
              value={image}
              onChange={handleImageChange}
              placeholder="Image Link"
            />
            <input
              placeholder="Rating"
              label="Rate this Gym on a 0-5"
              type="number"
              value={rating}
              min={0}
              max={5}
              onChange={handleRatingChange}
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </body>
    </div>
  )
}
export default CreateGym
