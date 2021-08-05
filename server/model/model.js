const mongoose = require('mongoose')

const {Schema, model} = mongoose

const todoSchema = new Schema({
        title:String,
        date: String,
        completed: Boolean
     
})

const TodoModel = model('todoModel', todoSchema)

module.exports = TodoModel