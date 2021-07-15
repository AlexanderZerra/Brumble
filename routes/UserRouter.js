const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.GetAllUsers)
Router.get('/:user_id', controller.GetUserById)
Router.delete('/:user_id', controller.DeleteUser)
Router.put('/:user_id', controller.UpdateUser)
Router.post('/', controller.CreateUser)

module.exports = Router
