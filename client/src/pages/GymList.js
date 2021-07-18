import { React } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

import GymCard from '../components/GymCard'

const GymList = (props) => {
  return (
    <div>
      <h1>All Gyms</h1>
      {props.gyms.map((gym, index) => (
        <GymCard key={index} gym={gym} />
      ))}
    </div>
  )
}
export default GymList
