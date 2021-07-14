const { Comment, User, Gym } = require('../models')

//
// This should allow you to add a comment
//

const AddComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body)
    res.send(comment)
  } catch (error) {
    throw error
  }
}

//
// This should get all comments
//

const GetAllComments = async (req, res) => {
  try {
    const comments = await Comment.findAll()
    res.send(comments)
  } catch (error) {
    throw error
  }
}

//
// Should allow you to update the comment as information comes to light
//

const UpdateComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id)
    let updatedComment = await Comment.update(req.body, {
      where: { id: commentId },
      returning: true
    })
    res.send(updatedComment)
  } catch (error) {
    throw error
  }
}

//
// Should allow you to get the comment by the user who posted it
//

const GetCommentByUserId = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.user_id)
    res.send(comment)
  } catch (error) {
    throw error
  }
}

//
//Should allow you to get the comment by the gym its posted on by the user
//

const GetCommentByGymId = async (req, res) => {
  try {
    const gymId = parseInt(req.params.gym_id)
    const comments = await Comment.findAll({
      where: { gym_id: gymId },
      include: [{ model: User, attributes: ['name'] }]
    })
    res.send(comments)
  } catch (error) {
    throw error
  }
}

//
//Should allow you to delete a comment
//

const DeleteComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id)
    await Comment.destroy({ where: { id: commentId } })
    res.send({ message: `Later Bropinions` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  AddComment,
  GetAllComments,
  GetCommentByGymId,
  GetCommentByUserId,
  DeleteComment,
  UpdateComment
}
