const express = require('express')
const router = express.Router()
const axios = require('axios')

// routes
router.post('/watch/create', create)
router.get('/watch/:id', getByUserId)
router.put('/watch/:id', push)

module.exports = router

function create(req, res, next) {
    axios.post(process.env.HISTORYSERV_URL + '/watch/create', req.body)
    .then(history=>{
        res.json(history.data)
    })
    .catch(err => next(err))
}

function getByUserId(req, res, next) {
    axios.get(process.env.HISTORYSERV_URL + '/watch/' + req.params.id)
    .then(history=>{
        res.json(history.data)
    })
    .catch(err => next(err))
}

function push(req, res, next) {
    axios.put(process.env.HISTORYSERV_URL + '/watch/' + req.params.id, req.body)
    .then(history=>{
        res.json(history.data)
    })
    .catch(err => next(err))
}