const express = require('express')
const router = express.Router()
const axios = require('axios')

// routes
router.post('/video/create', create)
router.post('/video/check', check)
router.post('/video/like', like)
router.get('/video/:id', getByUserId)
router.put('/video/:id', update)
router.delete('/video/:id', remove)

module.exports = router

function create(req, res, next) {
    axios.post(process.env.LIKESERV_URL + '/video/create', req.body)
    .then(list=>{
        res.json(list.data)
    })
    .catch(err => next(err))
}

function check(req, res, next) {
    axios.post(process.env.LIKESERV_URL + '/video/check', req.body)
    .then(list=>{
        res.json(list.data)
    })
    .catch(err => next(err))
}

function like(req, res, next) {
    axios.post(process.env.LIKESERV_URL + '/video/like', req.body)
    .then(list=>{
        res.json(list.data)
    })
    .catch(err => next(err))
}

function getByUserId(req, res, next) {
    axios.get(process.env.LIKESERV_URL + '/video/' + req.params.id)
    .then(list=>{
        res.json(list.data)
    })
    .catch(err => next(err))
}

function update(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function remove(req, res, next) {
    userService.remove(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}