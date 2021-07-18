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
  const [spotter, setSpotterAvail] = useState()
  const [img, setImg] = useState('')

  const toggleSpotter = () => {
    if (spotterAvail === false) {
      setSpotterAvail(true)
    } else {
      setSpotterAvail(false)
    }
  }
  const handleImgChange = (e) => {
    setImg(e.target.value)
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
  const handleSubmit = async () => {
    const res = await axios.post(`${BASE_URL}/gyms`, {
      name: name,
      location: location,
      rating: rating,
      description: description,
      spotter: spotter,
      img: image
    })
  }
  const postGym = async () => {
    const res = await axios.post(`${BASE_URL}/gym/${props.match.params.id}`)
    postedGym(res.data)
  }
  useEffect(() => {
    postGym()
  }, [])

  return (
    // <Link to={`/gyms`}
    <div>
      <form>
        <Input
          label="Gym Name"
          type="text"
          value={name}
          onChange={handleNameChange}
          maxLength={255}
        />
        <Input
          label="Description"
          type="text"
          value={description}
          onChange={handleDescriptionChange}
          maxLength={255}
        />
        <Input
          label="Enter Zip Code"
          type="number"
          value={location}
          mix={5}
          max={5}
          onChange={handleLocationChange}
        />
        <Input
          type="url"
          label="Gym Picture"
          value={image}
          onChange={handleImgChange}
          placeholder="Image Link"
        />
        <Input
          label="Rate this Gym on a 0-5"
          type="number"
          value={rating}
          min={0}
          max={5}
          onChange={handleRatingChange}
        />
        <Input
          label="Does this gym have a spooter?"
          type="boolean"
          value={spotter}
          onChange={toggleSpotter}
        />
        <button label="Submit" onCLick={handleSubmit} />
      </form>
    </div>
  )
}
export default CreateGym
