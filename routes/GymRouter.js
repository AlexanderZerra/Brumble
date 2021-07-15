const Router = require('express').Router()
const controller = require('../controllers/GymController')

Router.put('/:gym_id', controller.UpdateGym)
Router.post('/', controller.CreateGym)
Router.get('/', controller.GetAllGyms)
Router.get('/:gym_id', controller.GetGymById)
// Router.get('/:user_id', controller.GetGymByUserId)
module.exports = Router
