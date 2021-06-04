const express = require('express');
const router = express.Router();
const axios = require('axios')

// routes
router.post('/create/:id', create);
router.get('/subscribers/:id', getSubscriber);
router.get('/subscriptions/:id', getSubscription);
router.post('/subscribe', subscribe);
router.post('/check', check);

module.exports = router;

function create(req, res, next) {
    axios.post(process.env.SUBSCRIPTIONSERV_URL + '/create/' + req.params.id)
    .then(subscription=>{
        res.json(subscription.data)
    })
    .catch(err => next(err))
}

function getSubscriber(req, res, next) {
    axios.get(process.env.SUBSCRIPTIONSERV_URL + '/subscribers/' + req.params.id)
    .then(subscription=>{
        res.json(subscription.data)
    })
    .catch(err => next(err))
}

function getSubscription(req, res, next) {
    axios.get(process.env.SUBSCRIPTIONSERV_URL + '/subscriptions/' + req.params.id)
    .then(subscription=>{
        res.json(subscription.data)
    })
    .catch(err => next(err))
}

function subscribe(req, res, next) {
    axios.post(process.env.SUBSCRIPTIONSERV_URL + '/subscribe', req.body)
    .then(subscription=>{
        res.json(subscription.data)
    })
    .catch(err => next(err))
}

function check(req, res, next) {
    axios.post(process.env.SUBSCRIPTIONSERV_URL + '/check', req.body)
    .then(subscription=>{
        res.json(subscription.data)
    })
    .catch(err => next(err))
}