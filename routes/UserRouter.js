const Router = require('express').Router()
const Controller = require('../controllers/UserController')

Router.get('/', controller.GetAllUsers)
Router.get('/user/:user_id', controller.GetUserById)
Router.delete('/:user_id', controller.DeleteUser)
Router.put('/:user_id', controller.UpdateUser)

module.exports = Router
