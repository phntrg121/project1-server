const express = require('express');
const router = express.Router();
const commentService = require('./comment.service');

// routes
router.post('/post', post);
router.get('/v=:vId', getVideoComment);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;

function post(req, res, next){
    commentService.post(req.body)
    .then(cmt => res.json(cmt))
    .catch(err => next(err))
}

function getVideoComment(req, res, next) {
    commentService.getVideoComment(req.params.vId)
    .then(cmts => res.json(cmts))
    .catch(err => next(err))
}

function getById(req, res, next) {
    commentService.getById(req.params.id)
    .then(cmt => res.json(cmt))
    .catch(err => next(err))
}

function update(req, res, next) {
    commentService.update(req.params.id, req.body)
    .then(cmt => res.json(cmt))
    .catch(err => next(err))
}

function remove(req, res, next) {
    commentService.remove(req.params.id)
    .then(cmt => res.json(cmt))
    .catch(err => next(err))
}