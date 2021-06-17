const express = require('express')
const router = express.Router()
const videoService = require('./video.service')

// routes
router.post('/related', getRelatedVideos)
router.get('', getVideos)
router.get('/page=:page', getMore)
router.get('/:id', getById)
router.post('/search', search)
router.put('/:id', update)
router.delete('/:id', remove)

module.exports = router

function getRelatedVideos(req, res, next){
    videoService.getRelatedVideos(req.body)
    .then(videos => res.json(videos))
    .catch(err => next(err))
}

function getVideos(req, res, next) {
    videoService.getVideos()
    .then(videos => res.json(videos))
    .catch(err => next(err))
}

function getMore(req, res, next) {
    videoService.getMore(req.params.page)
    .then(videos => res.json(videos))
    .catch(err => next(err))
}

function getById(req, res, next) {
    videoService.getById(req.params.id)
    .then(video => res.json(video))
    .catch(err => next(err))
}

function search(req, res, next){
    videoService.search(req.body)
    .then(videos => res.json(videos))
    .catch(err => next(err))
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