const express = require('express');
const router = express.Router();
const notificationService = require('./notification.service');

// routes
router.post('/create', create);
router.get('/:id', getByUserId);
router.put('/:id', pushNotification);

module.exports = router;

function create(req, res, next){
    notificationService.create(req.body)
    .then(history => res.json(history))
    .catch(err => next(err))
}

function getByUserId(req, res, next) {
    notificationService.getByUserId(req.params.id)
    .then(histories => res.json(histories))
    .catch(err => next(err));
}

function pushNotification(req, res, next) {
    notificationService.pushNotification(req.params.id, req.body)
    .then(history => res.json(history))
    .catch(err => next(err));
}