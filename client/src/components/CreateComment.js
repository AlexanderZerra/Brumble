import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const CreateComment = (props) => {
  const [userId, setUserId] = useState(0)
  const [gymId, setGymId] = useState(props.gymId)
  const [post, setPost] = useState('')

  const handlePostChange = (e) => {
    setPost(e.target.value)
  }
  const handleUserIdChange = (e) => {
    setUserId(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post(`${BASE_URL}/comment`, {
      userId: userId,
      gymId: gymId,
      post: post
    })
    setUserId(0)
    setPost('')
    props.setComments((comments) => [res.data, ...comments])
  }
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your user code"
          type="number"
          value={userId}
          onChange={handleUserIdChange}
        />
        <input
          placeholder="Your Comment"
          type="text"
          value={post}
          onChange={handlePostChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default CreateComment
