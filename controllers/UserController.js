const { User } = require('../models')

//
// This should get all users. Maybe need this functionality if used as a social app ? like query all the users with the name A ?
//
const GetAllUsers = async (req, res) => {
  try {
    let userlist = await User.findAll()
    res.send(userlist)
  } catch (error) {
    throw error
  }
}

//
//This gets the user by id...Maybe need this functionality to view a user ?
//

const GetUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.user_id)
    res.send(user)
  } catch (error) {
    throw error
  }
}

//
//This should allow the user to update their profile as needed
//

const UpdateUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let updatedUser = await User.update(req.body, {
      where: { id: userId },
      returning: true
    })
    res.send(updatedUser)
  } catch (error) {
    throw error
  }
}

//
//If a user feels they need to delete their profile.
//

const DeleteUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    await User.destroy({ where: { id: userId } })
    res.send({ message: `Later Bro` })
  } catch (error) {
    throw error
  }
}

//
// Allows you to create a user
//

const CreateUser = async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.send(user)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllUsers,
  GetUserById,
  UpdateUser,
  DeleteUser,
  CreateUser
}
