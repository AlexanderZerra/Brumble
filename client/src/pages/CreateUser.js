import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

//user id is your code to add gyms

const CreateUser = (props) => {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [bio, setBio] = useState('')
  const [image, setImage] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleLocationChange = (e) => {
    setLocation(e.target.value)
  }
  const handleUserNameChange = (e) => {
    setUserName(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handleBioChange = (e) => {
    setBio(e.target.value)
  }
  const handleImageChange = (e) => {
    setImage(e.target.value)
  }
}
