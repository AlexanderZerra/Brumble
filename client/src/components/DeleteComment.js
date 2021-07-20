import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const DeleteComment = (props) => {
  const [post, deletePost] = useState('')

  const handleDelete = async (e) => {
    try {
      props.history.push(`/`)
      await axios.delete(`${BASE_URL}/comments/${userID}`)
    } catch (error) {
      throw error
    }
  }
  return (
    <div className="deletebutton">
      <form onSubmit={handleDelete}>
        <button type="delete">Delete</button>
      </form>
    </div>
  )
}
