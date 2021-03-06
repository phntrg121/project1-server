const express = require('express');
const router = express.Router();
const subService = require('./subscription.service');

// routes
router.post('/create', create);
router.get('/subscribers/:id', getSubscriber);
router.get('/subscriptions/:id', getSubscription);
router.post('/subscribe', subscribe);
router.post('/check', check);

module.exports = router;

function create(req, res, next) {
    subService.create(req.body)
    .then(sub => res.json(sub))
    .catch(err => next(err))
}

function getSubscriber(req, res, next) {
    subService.getSubscriber(req.params.id)
    .then(sub => res.json(sub))
    .catch(err => next(err))
}

function getSubscription(req, res, next) {
    subService.getSubscription(req.params.id)
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