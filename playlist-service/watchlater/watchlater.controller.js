const express = require('express');
const router = express.Router();
const watchlaterService = require('./watchlater.service');

// routes
router.post('/create', create);
router.get('/:id', getByUserId);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;

function create(req, res, next){
    watchlaterService.create(req.body)
    .then(list => res.json(list))
    .catch(err => next(err))
}

function getByUserId(req, res, next) {
    watchlaterService.getByUserId(req.params.id)
    .then(list => res.json(list))
    .catch(err => next(err));
}

function update(req, res, next) {
    watchlaterService.update(req.params.id, req.body)
    .then(list => res.json(list))
    .catch(err => next(err));
}

function remove(req, res, next) {
    watchlaterService.remove(req.params.id)
    .then(list => res.json(list))
    .catch(err => next(err));
}