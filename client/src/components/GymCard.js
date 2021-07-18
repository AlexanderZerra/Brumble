import React from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../globals'

const GymCard = (props) => {
  const { gym } = props

  return (
    <Link to={`/gyms/${gym.id}`}>
      <div className="gym-card">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-around'
          }}
        >
          <h3>{gym.name}</h3>
          <p>Location:{gym.location}</p>
          <p>Rating:{gym.rating}</p>
        </div>
        <img src={gym.image} className="gym-photo"></img>
      </div>
    </Link>
  )
}
export default GymCard
