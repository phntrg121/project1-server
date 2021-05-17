const express = require('express');
const router = express.Router();
const axios = require('axios')

// routes
router.post('/upload', upload);
router.post('/related', getRelatedVideo);
router.get('/', getFirstPage);
router.get('/p=:page', getPage);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;

function upload(req, res, next){
    axios.post(process.env.VIDEOSERV_URL + '/upload', req.body)
    .then(video=>{
        res.json(video.data)
    })
    .catch(err => next(err))
}

function getRelatedVideo(req, res, next){
    axios.post(process.env.VIDEOSERV_URL + '/related', req.body)
    .then(video=>{
        res.json(video.data)
    })
    .catch(err => next(err))
}

function getFirstPage(req, res, next) {
    axios.get(process.env.VIDEOSERV_URL + '/')
    .then(video=>{
        res.json(video.data)
    })
    .catch(err => next(err))
}

function getPage(req, res, next) {
    axios.get(process.env.VIDEOSERV_URL + '/p=' + req.params.page)
    .then(video=>{
        res.json(video.data)
    })
    .catch(err => next(err))
}

function getById(req, res, next) {
    axios.get(process.env.VIDEOSERV_URL + '/' + req.params.id)
    .then(video=>{
        res.json(video.data)
    })
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