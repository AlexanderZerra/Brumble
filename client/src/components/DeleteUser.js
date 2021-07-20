// import React, { useState } from 'react'
// import axios from 'axios'
// import { BASE_URL } from '../globals'

// const DeleteUser = (props) => {
//   const [user, deleteProfile] = useState('')

//   const handleDelete = async (e) => {
//     try {
//       props.history.push(`/`)
//       await axios.delete(`${BASE_URL}/users/${userID}`)
//     } catch (error) {
//       throw error
//     }
//   }
//   return (
//     <div>
//       <form onSubmit={handleDelete}>
//         <button type="delete">Delete</button>
//       </form>
//     </div>
//   )
// }
