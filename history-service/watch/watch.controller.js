const express = require('express');
const router = express.Router();
const watchService = require('./watch.service');

// routes
router.post('/create', create);
router.get('/:id', getByUserId);
router.put('/:id', push);

module.exports = router;

function create(req, res, next){
    watchService.create(req.body)
    .then(history => res.json(history))
    .catch(err => next(err))
}

function getByUserId(req, res, next) {
    watchService.getByUserId(req.params.id)
    .then(histories => res.json(histories))
    .catch(err => next(err));
}

function push(req, res, next) {
    watchService.push(req.params.id, req.body)
    .then(history => res.json(history))
    .catch(err => next(err));
}