import { React, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const CommentCard = (props) => {
  console.log(props.comment.id)

  const handleDelete = async (e) => {
    try {
      props.history.push(`/`)
      await axios.delete(`${BASE_URL}/comments/${userID}`)
    } catch (error) {
      throw error
    }
  }

  //
  //Should allow you to sumbit a comment ?
  //

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   await axios.put (`${}/comment/${}`,{
  //     userId: props.user_id,
  //     gymId: props.gym_id,
  //     post: props.post
  //   })
  // }
  return (
    <div>
      {/* <p>{props.comment.post}</p>
      <form onSubmit={handleSubmit}></form>
      <button>Submit</button>

      <button onClick={() => props.handleDelete(props.id)}>Delete</button> */}
    </div>
  )
}
export default CommentCard
