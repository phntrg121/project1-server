const express = require('express');
const router = express.Router();
const axios = require('axios')

// routes
router.post('/playlist/create', createPlaylist);
router.get('/playlist/:id', getPlaylistById);
router.get('/playlist/user/:id', getAllPlaylistFrom);
router.put('/playlist/:id', updatePlaylist);
router.delete('/playlist/:id', removePlaylist);

router.post('/watchlater/create', createWL);
router.get('/watchlater/:id', getWLByUserId);
router.put('/watchlater/:id', updateWL);
router.delete('/watchlater/:id', removeWL);

module.exports = router;

function createPlaylist(req, res, next) {
    axios.post(process.env.PLAYLIST_URL + '/playlist/create', req.body)
    .then(list=>{
        res.json(list.data)
    })
    .catch(err => next(err))
}

function getPlaylistById(req, res, next) {
    axios.get(process.env.PLAYLIST_URL + '/playlist/' + req.params.id)
    .then(list=>{
        res.json(list.data)
    })
    .catch(err => next(err))
}

function getAllPlaylistFrom(req, res, next) {
    axios.get(process.env.PLAYLIST_URL + '/playlist/user/' + req.params.id)
    .then(list=>{
        res.json(list.data)
    })
    .catch(err => next(err))
}

function updatePlaylist(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function removePlaylist(req, res, next) {
    userService.remove(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}




function createWL(req, res, next) {
    axios.post(process.env.PLAYLIST_URL + '/watchlater/create', req.body)
    .then(list=>{
        res.json(list.data)
    })
    .catch(err => next(err))
}

function getWLByUserId(req, res, next) {
    axios.get(process.env.PLAYLIST_URL + '/watchlater/' + req.params.id)
    .then(list=>{
        res.json(list.data)
    })
    .catch(err => next(err))
}

function updateWL(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function removeWL(req, res, next) {
    userService.remove(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}