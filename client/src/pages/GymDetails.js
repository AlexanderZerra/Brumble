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

  console.log(gym)
  const getGym = async () => {
    const res = await axios.get(`${BASE_URL}/gym/${props.match.params.id}`)
    console.log(props.match.params.id)
    setComments(res.data[0].Comments)
    setGym(res.data[0])
  }
  useEffect(() => {
    getGym()
  }, [])
  return (
    <div>
      <h1>Gym Details</h1>
      <button>Delete</button>
      <button>Edit</button>
      <h1>Comments</h1>
      {comments
        ? comments.map((comment, index) => (
            <CommentCard key={index} comment={comment}></CommentCard>
          ))
        : null}
      <CreateComment setComments={setComments} gymId={props.match.params.id} />
    </div>
  )
}
export default GymDetails
