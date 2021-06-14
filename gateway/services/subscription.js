const express = require('express');
const router = express.Router();
const axios = require('axios')

// routes
router.post('/subscription/create/:id', create);
router.get('/subscription/subscribers/:id', getSubscriber);
router.get('/subscription/subscriptions/:id', getSubscription);
router.post('/subscription/subscribe', subscribe);
router.post('/subscription/check', check);

module.exports = router;

function create(req, res, next) {
    axios.post(process.env.SUBSCRIPTIONSERV_URL + '/subscription/create', req.body)
    .then(subscription=>{
        res.json(subscription.data)
    })
    .catch(err => next(err))
}

function getSubscriber(req, res, next) {
    axios.get(process.env.SUBSCRIPTIONSERV_URL + '/subscription/subscribers/' + req.params.id)
    .then(subscription=>{
        res.json(subscription.data)
    })
    .catch(err => next(err))
}

function getSubscription(req, res, next) {
    axios.get(process.env.SUBSCRIPTIONSERV_URL + '/subscription/subscriptions/' + req.params.id)
    .then(subscription=>{
        res.json(subscription.data)
    })
    .catch(err => next(err))
}

function subscribe(req, res, next) {
    axios.post(process.env.SUBSCRIPTIONSERV_URL + '/subscription/subscribe', req.body)
    .then(subscription=>{
        res.json(subscription.data)
    })
    .catch(err => next(err))
}

function check(req, res, next) {
    axios.post(process.env.SUBSCRIPTIONSERV_URL + '/subscription/check', req.body)
    .then(subscription=>{
        res.json(subscription.data)
    })
    .catch(err => next(err))
}