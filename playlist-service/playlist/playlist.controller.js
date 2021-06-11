const express = require('express');
const router = express.Router();
const playlistService = require('./playlist.service');

// routes
router.post('/related', getRelatedVideo);
router.get('', getFirstPage);
router.get('/page=:page', getPage);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;

function getRelatedVideo(req, res, next){
    playlistService.getRelatedVideo(req.body)
    .then(video => res.json(video))
    .catch(err => next(err))
}

function getFirstPage(req, res, next) {
    playlistService.getFirstPage()
    .then(videos => res.json(videos))
    .catch(err => next(err));
}

function getPage(req, res, next) {
    playlistService.getPage(req.params.page)
    .then(videos => res.json(videos))
    .catch(err => next(err));
}

function getById(req, res, next) {
    playlistService.getById(req.params.id)
    .then(video => res.json(video))
    .catch(err => next(err));
}

function update(req, res, next) {
    playlistService.update(req.params.id, req.body)
    .then(video => res.json(video))
    .catch(err => next(err));
}

function remove(req, res, next) {
    playlistService.remove(req.params.id)
    .then(video => res.json(video))
    .catch(err => next(err));
}