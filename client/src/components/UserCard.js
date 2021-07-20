import React from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../globals'

const UserCard = (props) => {
  const { user } = props

  return (
    <Link to={`/users/${user.id}`}>
      <div className="user-card">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-around'
          }}
        >
          <h3>{user.name}</h3>
          <p>Location:{user.location}</p>
          <p>{user.image}</p>
        </div>
      </div>
    </Link>
  )
}
export default UserCard
