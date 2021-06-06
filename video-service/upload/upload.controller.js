const express = require('express');
const router = express.Router();
const uploadService = require('./upload.service');

// routes

router.post('', upload);
router.get('/channel=:id', getUploads);

module.exports = router;


function upload(req, res, next){
    uploadService.upload(req.body)
    .then(video => res.json(video))
    .catch(err => next(err))
}

function getUploads(req, res, next) {
    uploadService.getUploads(req.params.id)
    .then(video => res.json(video))
    .catch(err => next(err));
}