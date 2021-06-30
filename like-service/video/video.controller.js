const express = require('express');
const router = express.Router();
const videoService = require('./video.service');

// routes
router.post('/create', create);
router.post('/check', check);
router.post('/like', like);
router.get('/:id', getByUserId);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;

function create(req, res, next){
    videoService.create(req.body)
    .then(list => res.json(list))
    .catch(err => next(err))
}

function check(req, res, next){
    videoService.check(req.body)
    .then(list => res.json(list))
    .catch(err => next(err))
}

function like(req, res, next){
    videoService.like(req.body)
    .then(list => res.json(list))
    .catch(err => next(err))
}

function getByUserId(req, res, next) {
    videoService.getByUserId(req.params.id)
    .then(list => res.json(list))
    .catch(err => next(err));
}

function update(req, res, next) {
    videoService.update(req.params.id, req.body)
    .then(list => res.json(list))
    .catch(err => next(err));
}

function remove(req, res, next) {
    videoService.remove(req.params.id)
    .then(list => res.json(list))
    .catch(err => next(err));
}