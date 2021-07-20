import { React } from 'react'

import UserCard from '../components/UserCard'

const UserList = (props) => {
  return (
    <body className="alluser">
      <div>
        <h1 className="allusers">All Users</h1>
        <p className="userp">
          Here is a list of Bros that provide sound information to help you
        </p>
        {props.users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </body>
  )
}
export default UserList
