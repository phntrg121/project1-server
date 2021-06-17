const db = require('../db');
const Video = db.Video;

module.exports = {
    getVideos,
    getMore,
    getById,
    getRelatedVideos,
    search,
    update,
    remove
};


function removeDuplicateObjectFromArray(array, key) {
    var check = {};
    var res = [];
    array.forEach(element => {
        if(!check[element[key]]) {
            check[element[key]] = true;
            res.push(element);
        }
    });
    return res;
}

async function getRelatedVideos(params){
    let combine = []
    for (let i = 0; i < params.tags.length; i++){
        let videos = await Video.find({ _id: {$ne: params.videoId}, tags: params.tags[i]}).limit(5)
        combine = combine.concat(videos)
    }
    //remove duplicates
    let unique = removeDuplicateObjectFromArray(combine, "_id")
    return {
        message: "OK",
        data: unique
    }
}

async function getVideos() {
    const videos = await Video.find().limit(20)
    return {
        message: "OK",
        data: videos
    }
}

async function getMore(current) {
    const videos = await Video.find().limit(20).skip(current)
    return {
        message: "OK",
        data: videos
    }
}

async function getById(id) {
    const video = await Video.findById(id);
    return{
        message: video? "OK": "Video not found",
        data: video
    }
}

async function search(query) {
    const videos = await Video.find({$text:{$search: '\"' + query.query + '\"'}}).limit(60)

    const filtered = videos.filter(video=>{
        // return video.tags.includes('summer')
        return true
    })

    return {
        message: "OK",
        data: filtered
    }
}

async function update(id, videoParam) {
    const video = await Video.findById(id);

    Object.assign(video, videoParam);

    await video.save();
}

async function remove(id) {
    await Video.findByIdAndRemove(id);
}