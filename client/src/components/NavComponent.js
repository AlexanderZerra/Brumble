import React from 'react'
import { Link } from 'react-router-dom'
const NavComponent = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid black',
        padding: '16px',
        width: '100%',
        justifyContent: 'space-around'
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/gyms">View All Gyms</Link>
      <Link to="/create">Create a Gym</Link>
    </div>
  )
}
export default NavComponent
