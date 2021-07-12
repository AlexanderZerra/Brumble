const { User } = require('../models')

const GetAllUsers = async (req, res) => {
  try {
    let userlist = await User.findAll()
    res.send(userlist)
  } catch (error) {
    throw error
  }
}

const GetUserById = async (req, res) => {
  try {
    const { payload } = res.locals
    let userId = parseInt(payload.id)
    console.log(userId)
    let userFound = await User.findByPk(userId)
    res.send(userFound)
  } catch (error) {
    throw error
  }
}

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

const DeleteUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    await User.destroy({ wehre: { id: userId } })
    res.send({ message: `Later Bro` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllUsers,
  GetUserById,
  UpdateUser,
  DeleteUser
}
