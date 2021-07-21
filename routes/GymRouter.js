const Router = require('express').Router()
const controller = require('../controllers/GymController')

Router.put('/:gym_id', controller.UpdateGym)
Router.post('/', controller.CreateGym)
Router.get('/', controller.GetAllGyms)
Router.get('/:gym_id', controller.GetGymById)

module.exports = Router
