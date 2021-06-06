const express = require('express');
const router = express.Router();
const replyService = require('./reply.service');

// routes
router.post('/post', post);
router.get('/comment=:id', getCommentReplies);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;

function post(req, res, next){
    replyService.post(req.body)
    .then(cmt => res.json(cmt))
    .catch(err => next(err))
}

function getCommentReplies(req, res, next) {
    replyService.getCommentReplies(req.params.id)
    .then(cmts => res.json(cmts))
    .catch(err => next(err))
}

function getById(req, res, next) {
    replyService.getById(req.params.id)
    .then(cmt => res.json(cmt))
    .catch(err => next(err))
}

function update(req, res, next) {
    replyService.update(req.params.id, req.body)
    .then(cmt => res.json(cmt))
    .catch(err => next(err))
}

function remove(req, res, next) {
    replyService.remove(req.params.id)
    .then(cmt => res.json(cmt))
    .catch(err => next(err))
}