import { React, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const CommentCard = (props) => {
  console.log(props.comment.post)
  return (
    <div>
      <p>{props.comment.post}</p>
      {/* <form onSubmit={handleSubmit}></form>
      <button>Submit</button>
      
      <button onClick={() => props.handleDelete(props.id)}>Delete</button> */}
    </div>
  )
}
export default CommentCard
