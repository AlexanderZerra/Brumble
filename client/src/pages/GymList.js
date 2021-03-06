import { React } from 'react'

import GymCard from '../components/GymCard'

const GymList = (props) => {
  return (
    <body className="allgympic">
      <div>
        <h1 className="allgymshead">All Gyms</h1>
        {props.gyms.map((gym, index) => (
          <GymCard key={index} gym={gym} />
        ))}
      </div>
    </body>
  )
}
export default GymList
