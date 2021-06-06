const express = require('express');
const router = express.Router();
const axios = require('axios')

// routes
router.post('/comment/post', postComment);
router.get('/comment/video=:id', getVideoComments);
router.get('/comment/:id', getCommentById);
router.put('/comment/:id', updateComment);
router.delete('/comment/:id', removeComment);

router.post('/reply/post', postReply);
router.get('/reply/comment=:id', getCommentReplies);
router.get('/reply/:id', getReplyById);
router.put('/reply/:id', updateReply);
router.delete('/reply/:id', removeReply);

module.exports = router;

//Comment

function postComment(req, res, next){
    axios.post(process.env.COMMENTSERV_URL + '/comment/post', req.body)
    .then(comment=>{
        res.json(comment.data)
    })
    .catch(err => next(err))
}

function getVideoComments(req, res, next) {
    axios.get(process.env.COMMENTSERV_URL + '/comment/video=' + req.params.id)
    .then(comment=>{
        res.json(comment.data)
    })
    .catch(err => next(err))
}

function getCommentById(req, res, next) {
    axios.get(process.env.COMMENTSERV_URL + '/comment/' + req.params.id)
    .then(comment=>{
        res.json(comment.data)
    })
    .catch(err => next(err))
}

function updateComment(req, res, next) {
    commentService.update(req.params.id, req.body)
    .then(cmt => res.json(cmt))
    .catch(err => next(err))
}

function removeComment(req, res, next) {
    commentService.remove(req.params.id)
    .then(cmt => res.json(cmt))
    .catch(err => next(err))
}

// Reply

function postReply(req, res, next){
    axios.post(process.env.COMMENTSERV_URL + '/reply/post', req.body)
    .then(comment=>{
        res.json(comment.data)
    })
    .catch(err => next(err))
}

function getCommentReplies(req, res, next) {
    axios.get(process.env.COMMENTSERV_URL + '/reply/comment=' + req.params.id)
    .then(comment=>{
        res.json(comment.data)
    })
    .catch(err => next(err))
}

function getReplyById(req, res, next) {
    axios.get(process.env.COMMENTSERV_URL + '/reply/' + req.params.id)
    .then(comment=>{
        res.json(comment.data)
    })
    .catch(err => next(err))
}

function updateReply(req, res, next) {
    commentService.update(req.params.id, req.body)
    .then(cmt => res.json(cmt))
    .catch(err => next(err))
}

function removeReply(req, res, next) {
    commentService.remove(req.params.id)
    .then(cmt => res.json(cmt))
    .catch(err => next(err))
}