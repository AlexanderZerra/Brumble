import React from 'react'

const CommentCard = (props) => {
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
