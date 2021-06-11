const express = require('express');
const router = express.Router();
const playlistService = require('./playlist.service');

// routes
router.post('/create', create);
router.get('/:id', getById);
router.get('/user/:id', getAllFrom);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;

function create(req, res, next){
    playlistService.create(req.body)
    .then(list => res.json(list))
    .catch(err => next(err))
}

function getById(req, res, next) {
    playlistService.getById(req.params.id)
    .then(list => res.json(list))
    .catch(err => next(err));
}

function getAllFrom(req, res, next) {
    playlistService.getAllFrom(req.params.id)
    .then(lists => res.json(lists))
    .catch(err => next(err));
}

function update(req, res, next) {
    playlistService.update(req.params.id, req.body)
    .then(list => res.json(list))
    .catch(err => next(err));
}

function remove(req, res, next) {
    playlistService.remove(req.params.id)
    .then(list => res.json(list))
    .catch(err => next(err));
}