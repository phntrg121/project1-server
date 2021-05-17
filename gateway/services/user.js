const express = require('express');
const router = express.Router();
const axios = require('axios')

// routes
router.post('/signin', signIn);
router.post('/signup', signUp);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;

function signIn(req, res, next) {
    axios.post(process.env.USERSERV_URL + '/signin', req.body)
    .then(user=>{
        res.json(user.data)
    })
    .catch(err => next(err))
}

function signUp(req, res, next) {
    axios.post(process.env.USERSERV_URL + '/signup', req.body)
    .then(user =>{
        res.json(user.data)
    })
    .catch(err => next(err))
}

function getAll(req, res, next) {
    axios.get(process.env.USERSERV_URL + '/')
    .then(user=>{
        res.json(user.data)
    })
    .catch(err => next(err))
}

function getById(req, res, next) {
    axios.get(process.env.USERSERV_URL + '/' + req.params.id)
    .then(user=>{
        res.json(user.data)
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