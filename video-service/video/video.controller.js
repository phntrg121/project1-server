const express = require('express');
const router = express.Router();
const videoService = require('./video.service');

// routes
router.post('/related', getRelatedVideo);
router.get('/', getFirstPage);
router.get('/p=:page', getPage);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;

function getRelatedVideo(req, res, next){
    videoService.getRelatedVideo(req.body)
    .then(video => res.json(video))
    .catch(err => next(err))
}

function getFirstPage(req, res, next) {
    videoService.getFirstPage()
    .then(videos => res.json(videos))
    .catch(err => next(err));
}

function getPage(req, res, next) {
    videoService.getPage(req.params.page)
    .then(videos => res.json(videos))
    .catch(err => next(err));
}

function getById(req, res, next) {
    videoService.getById(req.params.id)
    .then(video => res.json(video))
    .catch(err => next(err));
}

function update(req, res, next) {
    videoService.update(req.params.id, req.body)
    .then(video => res.json(video))
    .catch(err => next(err));
}

function remove(req, res, next) {
    videoService.remove(req.params.id)
    .then(video => res.json(video))
    .catch(err => next(err));
}