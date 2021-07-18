import { React } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import axios from 'axios'

import { BASE_URL } from '../globals'

import CommentCard from '../components/CommentCard'

const GymDetails = (props) => {
  const [gym, setGym] = useState({})
  // const [editGym, setEditGym] = useState({
  //   name: '',
  //   userId: '',
  //   location: '',
  //   description: '',
  //   image: '',
  //   rating: '',
  //   spotter: ''
  // })
  console.log(gym)
  const getGym = async () => {
    const res = await axios.get(`${BASE_URL}/gym/${props.match.params.id}`)
    console.log(res.data[0])
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
      {gym.Comments
        ? gym.Comments.map((comment, index) => (
            <CommentCard key={index} comment={comment}></CommentCard>
          ))
        : null}
    </div>
  )
}
export default GymDetails
