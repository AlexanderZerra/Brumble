const Router = require('express').Router()
const controller = require('../controllers/GymController')

Router.put('/:gym_id', controller.UpdateGym)
// Router.get('')
module.exports = Router
