import { React } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import axios from 'axios'

import { BASE_URL } from '../globals'

import CommentCard from '../components/CommentCard'
import CreateComment from '../components/CreateComment'

const GymDetails = (props) => {
  const [gym, setGym] = useState({})
  const [comments, setComments] = useState([])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/comment/${id}`)
      setComments(comments.filter((comment) => comment.id !== id))
    } catch (error) {
      throw error
    }
  }

  console.log(gym)
  console.log(comments)
  const getGym = async () => {
    const res = await axios.get(`${BASE_URL}/gym/${props.match.params.id}`)

    setComments(res.data[0].Comments)
    setGym(res.data[0])
  }
  useEffect(() => {
    getGym()
  }, [])
  return (
    <div>
      <div className="backgroundcolor">
        {/* <h1 className="gymdetails">Gym Details</h1> */}
        {/* <button className="delete">Delete</button> */}
        {/* <button className="edit">Edit</button> */}
        <h1 className="gymcomments">Comments</h1>
        {comments
          ? comments.map((comment, index) => (
              <CommentCard
                key={index}
                comment={comment}
                comments={comments}
                setComments={setComments}
                handleDelete={handleDelete}
              ></CommentCard>
            ))
          : null}
        <CreateComment
          setComments={setComments}
          gymId={props.match.params.id}
        />
      </div>
    </div>
  )
}
export default GymDetails
