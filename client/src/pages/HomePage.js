import React from 'react'
const HomePage = (props) => {
  console.log(props.gyms)
  return (
    <div>
      <h1>Welcome to Brumble.</h1>
      <p>Click to find a gym</p>
      <button>sign up</button>
    </div>
  )
}
export default HomePage
