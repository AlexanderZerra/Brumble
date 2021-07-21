import React, { useState } from 'react'

import EditComment from '../components/EditComment'

const CommentCard = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div>
      <p>{props.comment.post}</p>
      {toggle ? (
        <EditComment
          setToggle={setToggle}
          comment={props.comment}
          comments={props.comments}
          setComments={props.setComments}
        />
      ) : null}
      <button onClick={() => setToggle(!toggle)}>edit</button>
      <button onClick={() => props.handleDelete(props.comment.id)}>
        Delete
      </button>
    </div>
  )
}
export default CommentCard
