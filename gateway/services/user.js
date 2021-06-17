const express = require('express');
const router = express.Router();
const axios = require('axios')

// routes
router.post('/user/signin', signIn);
router.post('/user/signup', signUp);
router.get('/user/', getAllUser);
router.get('/user/:id', getUserById);
router.put('/user/:id', updateUser);
router.delete('/user/:id', removeUser);

router.post('/channel/create', createChannel);
router.get('/channel/:id', getChannelByUserId);
router.put('/channel/:id', updateChannel);
router.delete('/channel/:id', removeChannel);

module.exports = router;

function signIn(req, res, next) {
    axios.post(process.env.USERSERV_URL + '/user/signin', req.body)
    .then(user=>{
        res.json(user.data)
    })
    .catch(err => next(err))
}

function signUp(req, res, next) {
    axios.post(process.env.USERSERV_URL + '/user/signup', req.body)
    .then(user =>{
        res.json(user.data)
    })
    .catch(err => next(err))
}

function getAllUser(req, res, next) {
    axios.get(process.env.USERSERV_URL + '/user/')
    .then(user=>{
        res.json(user.data)
    })
    .catch(err => next(err))
}

function getUserById(req, res, next) {
    axios.get(process.env.USERSERV_URL + '/user/' + req.params.id)
    .then(user=>{
        res.json(user.data)
    })
    .catch(err => next(err))
}

function updateUser(req, res, next) {
    axios.put(process.env.USERSERV_URL + '/user/' + req.params.id, req.body)
    .then(user=>{
        res.json(user.data)
    })
    .catch(err => next(err))
}

function removeUser(req, res, next) {
    axios.delete(process.env.USERSERV_URL + '/user/' + req.params.id)
    .then(user=>{
        res.json(user.data)
    })
    .catch(err => next(err))
}





function createChannel(req, res, next) {
    axios.post(process.env.USERSERV_URL + '/channel/create', req.body)
    .then(channel=>{
        res.json(channel.data)
    })
    .catch(err => next(err))
}

function getChannelByUserId(req, res, next) {
    axios.get(process.env.USERSERV_URL + '/channel/' + req.params.id)
    .then(channel=>{
        res.json(channel.data)
    })
    .catch(err => next(err))
}

function updateChannel(req, res, next) {
    axios.put(process.env.USERSERV_URL + '/channel/' + req.params.id, req.body)
    .then(channel=>{
        res.json(channel.data)
    })
    .catch(err => next(err))
}

function removeChannel(req, res, next) {
    axios.delete(process.env.USERSERV_URL + '/channel/' + req.params.id)
    .then(channel=>{
        res.json(channel.data)
    })
    .catch(err => next(err))
}