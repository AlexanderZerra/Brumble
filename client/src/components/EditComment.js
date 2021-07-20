import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const EditComment = (props) => {
  const [edit, setEdit] = useState('')

  const handleCommentChange = (e) => {
    setEdit(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.put(`${BASE_URL}/comment/${props.comment.id}`, {
      post: edit
    })
    const updateCommentArray = props.comments.map((comment) => {
      if (comment.id === props.comment.id) {
        return res.data[1][0]
      }
      return comment
    })
    props.setComments(updateCommentArray)
    setEdit('')
    console.log(res.data[1][0])
  }

  return (
    <div className="editcomment">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter New Text"
          type="text"
          value={edit}
          onChange={handleCommentChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default EditComment
