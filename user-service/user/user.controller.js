const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// routes
router.post('/signin', signIn);
router.post('/signup', signUp);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;

function signIn(req, res, next) {
    userService.authenticate(req.body)
        //.then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .then(user => res.json(user))
        .catch(err => next(err))
}

function signUp(req, res, next) {
    userService.create(req.body)
        .then(user => res.json(user))
        .catch(err => next(err))
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    userService.getById(req.user.sub)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(users => res.json(users))
        .catch(err => next(err));
}

function remove(req, res, next) {
    userService.remove(req.params.id)
        .then(users => res.json(users))
        .catch(err => next(err));
}