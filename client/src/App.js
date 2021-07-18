import './styles/App.css'
import React, { useState, useEffect } from 'react'

import axios from 'axios'
import { BASE_URL } from './globals'

import { Route, Switch } from 'react-router-dom'

// import GymPage from './pages/GymPage'
import HomePage from './pages/HomePage'
import GymList from './pages/GymList'
import GymDetails from './pages/GymDetails'
import CreateGym from './pages/CreateGym'

import NavComponent from './components/NavComponent'
// import ProfilePage from './pages/ProfilePage'

function App() {
  const [gyms, setGyms] = useState([])

  const getAllGyms = async (id) => {
    const res = await axios.get(`${BASE_URL}/gym`)
    console.log(res.data)
    setGyms(res.data)
  }
  useEffect(() => {
    getAllGyms()
  }, [])

  return (
    <div className="App">
      <NavComponent />
      <Switch>
        <Route exact path="/" component={(props) => <HomePage {...props} />} />
        <Route
          exact
          path="/gyms"
          component={(props) => <GymList {...props} gyms={gyms} />}
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
      </Switch>
    </div>
  )
}

export default App
