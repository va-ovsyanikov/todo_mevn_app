const express = require('express')

const router = express.Router()

const TodoModel = require('../model/model')

const moment = require('moment')

router.post('/save/', async (req, res) => {
    try {
      
        moment.locale('be');
        const newItemTodo = new TodoModel(
            {
                title: req.body.title,
                date: moment(new Date(Date.now())).format('LLL'),
                completed:false
            })
        const todoNew = await newItemTodo.save()
        res.status(200).send(todoNew)
    } catch (err) {
        res.status(400).send(err)
    }
})

router.get('/get/', async (_, res) => {
    try {
        const todo = await TodoModel.find().lean()
        res.status(200).send(todo)
    } catch (err) {
        res.status(400).send(err)
    }
})

router.get('/get/:id', async (req, res) => {
    try {
        const todoId = req.params._id
        const todo = await TodoModel.findById(todoId)
        res.status(200).send(todo)
    } catch (err) {
        res.status(400).send(err)
    }
})


router.delete('/delete/:id', async (req, res) => {
    try {
        const todoId = req.params.id
        const todo = await TodoModel.findByIdAndDelete(todoId)
        res.status(200).send(todo)
    } catch (err) {
        res.status(400).send(err)
    }
})


router.post('/complete/:id', async (req, res) => {
    try {
        const todoId = req.params.id
        const data = req.body.completed
        const todo = await  TodoModel.findByIdAndUpdate(todoId, {completed: data})
        res.status(200).send(todo)
    } catch (err) {
        res.status(400).send(err + "Ошибка")
    }















    
})





module.exports = router