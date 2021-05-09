const express = require('express');
const router = express.Router();
const subService = require('./subscription.service');

// routes
router.post('/create/:id', create);
router.get('/:id', getSub);
router.get('/count/:id', getSubCount);
router.post('/subscribe', subscribe);
router.post('/check', check);

module.exports = router;

function create(req, res, next) {
    subService.create(req.params.id)
    .then(sub => res.json(sub))
    .catch(err => next(err))
}

function getSub(req, res, next) {
    subService.getSub(req.params.id)
    .then(sub => res.json(sub))
    .catch(err => next(err))
}

function getSubCount(req, res, next) {
    subService.getSubCount(req.params.id)
    .then(sub => res.json(sub))
    .catch(err => next(err))
}

function subscribe(req, res, next) {
    subService.subscribe(req.body)
    .then(sub => res.json(sub))
    .catch(err => next(err))
}

function check(req, res, next) {
    subService.check(req.body)
    .then(sub => res.json(sub))
    .catch(err => next(err))
}