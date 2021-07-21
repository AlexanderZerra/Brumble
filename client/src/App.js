import './styles/App.css'
import React, { useState, useEffect } from 'react'

import axios from 'axios'
import { BASE_URL } from './globals'

import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/HomePage'
import GymList from './pages/GymList'
import GymDetails from './pages/GymDetails'
import CreateGym from './pages/CreateGym'
import CreateUser from './pages/CreateUser'
import UserList from './pages/UserList'

import NavComponent from './components/NavComponent'

function App() {
  const [gyms, setGyms] = useState([])
  const [users, setUsers] = useState([])

  const getAllUsers = async (id) => {
    const res = await axios.get(`${BASE_URL}/user`)

    setUsers(res.data)
  }

  const getAllGyms = async (id) => {
    const res = await axios.get(`${BASE_URL}/gym`)

    setGyms(res.data)
  }
  useEffect(() => {
    getAllGyms()
    getAllUsers()
  }, [])

  return (
    <div className="App">
      <div className="nav">
        <NavComponent />
      </div>
      <Switch>
        <Route exact path="/" component={(props) => <HomePage {...props} />} />
        <Route
          exact
          path="/gyms"
          component={(props) => <GymList {...props} gyms={gyms} />}
        />
        <Route
          exact
          path="/users"
          component={(props) => <UserList {...props} users={users} />}
        />
        <Route
          exact
          path="/gyms/:id"
          component={(props) => <GymDetails {...props} gyms={gyms} />}
        />
        <Route
          exact
          path="/create"
          component={(props) => <CreateGym {...props} gyms={gyms} />}
        />
        <Route
          exact
          path="/create/user"
          component={(props) => <CreateUser {...props} gyms={gyms} />}
        />
      </Switch>
    </div>
  )
}

export default App
