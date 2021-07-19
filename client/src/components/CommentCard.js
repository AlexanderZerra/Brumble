import React from 'react'

import EditComment from '../components/EditComment'

const CommentCard = (props) => {
  return (
    <div>
      <p>{props.comment.post}</p>
      <EditComment
        comment={props.comment}
        comments={props.comments}
        setComments={props.setComments}
      />

      <button onClick={() => props.handleDelete(props.comment.id)}>
        Delete
      </button>
    </div>
  )
}
export default CommentCard
