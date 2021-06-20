const express = require('express');
const router = express.Router();
const channelService = require('./channel.service');

// routes
router.post('/create', create);
router.get('/:id', getByUserId);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;

function create(req, res, next) {
    channelService.create(req.body)
    .then(user => res.json(user))
    .catch(err => next(err))
}

function getByUserId(req, res, next) {
    channelService.getByUserId(req.params.id)
    .then(user => res.json(user))
    .catch(err => next(err));
}

function update(req, res, next) {
    channelService.update(req.params.id, req.body)
    .then(channel => res.json(channel))
    .catch(err => next(err));
}

function remove(req, res, next) {
    channelService.remove(req.params.id)
    .then(channel => res.json(channel))
    .catch(err => next(err));
}