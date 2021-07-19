import { React, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const CommentCard = (props) => {
  console.log(props.comment)

  // const handleDelete = async (e) => {
  //   try {
  //     await axios.delete(`${BASE_URL}/comment/${props.comment.id}`)
  //     props.setComments(
  //       props.comments.filter((comment) => comment.id !== props.comment.id)
  //     )
  //   } catch (error) {
  //     throw error
  //   }
  // }

  return (
    <div>
      <p>{props.comment.post}</p>

      <button onClick={() => props.handleDelete(props.comment.id)}>
        Delete
      </button>
    </div>
  )
}
export default CommentCard
