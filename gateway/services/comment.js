const express = require('express');
const router = express.Router();

// routes
router.post('/post', post);
router.get('/v=:vId', getVideoComment);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;

function post(req, res, next){
    axios.post(process.env.COMMENTSERV_URL + '/post', req.body)
    .then(comment=>{
        res.json(comment.data)
    })
    .catch(err => next(err))
}

function getVideoComment(req, res, next) {
    axios.get(process.env.COMMENTSERV_URL + '/v=' + req.params.vId)
    .then(comment=>{
        res.json(comment.data)
    })
    .catch(err => next(err))
}

function getById(req, res, next) {
    axios.get(process.env.COMMENTSERV_URL + '/' + req.params.id)
    .then(comment=>{
        res.json(comment.data)
    })
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