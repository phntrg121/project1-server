const express = require('express')
const router = express.Router()
const axios = require('axios')

// routes
router.post('/upload', upload)
router.get('/upload/public/channel=:id', getUploads)
router.get('/upload/channel=:id', getAllUploads)

router.post('/video/related', getRelatedVideo)
router.get('/video', getVideos)
router.get('/video/page=:page', getMore)
router.get('/video/:id', getById)
router.post('/video/search', search)
router.put('/video/:id', update)
router.put('/video/view/:id', putView)
router.put('/video/like/:id', putLike)
router.put('/video/comment/:id', putComment)
router.put('/video/visibility/:id', setVisibility)
router.delete('/video/:id', remove)

module.exports = router

function upload(req, res, next){
    axios.post(process.env.VIDEOSERV_URL + '/upload', req.body)
    .then(video=>{
        res.json(video.data)
    })
    .catch(err => next(err))    
}

function getUploads(req, res, next){
    axios.get(process.env.VIDEOSERV_URL + '/upload/public/channel=' + req.params.id)
    .then(upload=>{
        res.json(upload.data)
    })
    .catch(err => next(err))
}

function getAllUploads(req, res, next){
    axios.get(process.env.VIDEOSERV_URL + '/upload/channel=' + req.params.id)
    .then(upload=>{
        res.json(upload.data)
    })
    .catch(err => next(err))
}

function getRelatedVideo(req, res, next){
    axios.post(process.env.VIDEOSERV_URL + '/video/related', req.body)
    .then(video=>{
        res.json(video.data)
    })
    .catch(err => next(err))
}

function getVideos(req, res, next) {
    axios.get(process.env.VIDEOSERV_URL + '/video')
    .then(video=>{
        res.json(video.data)
    })
    .catch(err => next(err))
}

function getMore(req, res, next) {
    axios.get(process.env.VIDEOSERV_URL + '/video/page=' + req.params.page)
    .then(video=>{
        res.json(video.data)
    })
    .catch(err => next(err))
}

function getById(req, res, next) {
    axios.get(process.env.VIDEOSERV_URL + '/video/' + req.params.id)
    .then(video=>{
        res.json(video.data)
    })
    .catch(err => next(err))
}

function search(req, res, next){
    axios.post(process.env.VIDEOSERV_URL + '/video/search', req.body)
    .then(video=>{
        res.json(video.data)
    })
    .catch(err => next(err))    
}

function update(req, res, next) {
    videoService.update(req.params.id, req.body)
    .then(video => res.json(video))
    .catch(err => next(err))
}

function putView(req, res, next){
    axios.put(process.env.VIDEOSERV_URL + '/video/view/' + req.params.id, req.body)
    .then(video=>{
        res.json(video.data)
    })
    .catch(err => next(err))    
}

function putLike(req, res, next){
    axios.put(process.env.VIDEOSERV_URL + '/video/like/' + req.params.id, req.body)
    .then(video=>{
        res.json(video.data)
    })
    .catch(err => next(err))    
}

function putComment(req, res, next){
    axios.put(process.env.VIDEOSERV_URL + '/video/comment/' + req.params.id, req.body)
    .then(video=>{
        res.json(video.data)
    })
    .catch(err => next(err))    
}

function setVisibility(req, res, next){
    axios.put(process.env.VIDEOSERV_URL + '/video/visibility/' + req.params.id, req.body)
    .then(video=>{
        res.json(video.data)
    })
    .catch(err => next(err))    
}


function remove(req, res, next) {
    videoService.remove(req.params.id)
    .then(video => res.json(video))
    .catch(err => next(err))
}