const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  dueDate: {
    type: String,
    required: true
  },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Todo', TodoSchema)
