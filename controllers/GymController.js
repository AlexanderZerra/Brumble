const { Gym, Comment } = require('../models/')
const { Op } = require('sequelize')

//
// This should allow you to get all gyms (as in a search to see all the gyms)
//

const GetAllGyms = async (req, res) => {
  try {
    let gymlist = await Gym.findAll()
    res.send(gymlist)
  } catch (error) {
    throw error
  }
}

//
// This should allow you to get specific gyms related to your search
//

const GetGymById = async (req, res) => {
  try {
    const gym = await Gym.findAll({
      where: { id: req.params.gym_id },
      include: [{ model: Comment, attributes: ['post'] }]
    })
    res.send(gym)
  } catch (error) {
    throw error
  }
}

//
// Should allow a user to update the gym they go to to add any additional features/comments
//

const UpdateGym = async (req, res) => {
  try {
    let gymId = parseInt(req.params.gym_id)
    let updatedGym = await Gym.update(req.body, {
      where: { id: gymId },
      returning: true
    })
    res.send(updatedGym)
  } catch (error) {
    throw error
  }
}

//
//Allows you to search for all Gyms by any criteria
//

const GetAllGymsBySearch = async (req, res) => {
  let query = req.params.query
  let compstring = `%${query}%`
  const results = await Gym.findAll({
    where: {
      [Op.or]: [
        { name: { [Op.iLike]: compstring } },
        { description: { [Op.iLike]: compstring } }
      ]
    }
  })
  res.send(results)
}

//
//Allows you to get get gyms by location
//

const GetGymByLocation = async (req, res) => {
  try {
    let gymLocation = parseInt(req.params.location)
    let gymsByLocation = await Gym.findAll({
      where: { location: gymLocation },
      returning: true
    })
    res.send(gymsByLocation)
  } catch (error) {
    throw error
  }
}

//
// Hopefully allow the gym id to be stored in user id to allow the user to pick their gym in their "saved"
//OR
// Allow the "owner of the gym" to post about "thier" gym and then users can post onto that gym ?
//

const GetGymByUserId = async (req, res) => {
  try {
    const gym = await Gym.findByPk(req.params.user_id)
    res.send(gym)
  } catch (error) {
    throw error
  }
}

const CreateGym = async (req, res) => {
  try {
    const gym = await Gym.create(req.body)
    res.send(gym)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllGyms,
  GetGymById,
  UpdateGym,
  GetAllGymsBySearch,
  GetGymByLocation,
  GetGymByUserId,
  CreateGym
}
