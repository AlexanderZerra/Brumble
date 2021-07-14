const Router = require('express').Router()

const GymRouter = require('./GymRouter')
const UserRouter = require('./UserRouter')
const CommentRouter = require('./CommentRouter')

Router.use('/gym', GymRouter)
Router.use('/user', UserRouter)
Router.use('/comment', CommentRouter)

module.exports = Router
