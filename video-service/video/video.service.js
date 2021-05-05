const db = require('../db');
const Video = db.Video;

module.exports = {
    upload,
    getPage,
    getFirstPage,
    getById,
    getRelatedVideo,
    update,
    remove
};


async function upload(videoParam) {
    const video = new Video(videoParam);

    // save video
    await video.save();

    const newVideo = await Video.findOne(video)
    return {
        message: 'OK',
        data: newVideo
    }
}
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

async function getRelatedVideo(tagParam){
    let combine = []
    for (let i = 0; i < tagParam.tags.length; i++){
        let videos = await Video.find({ _id: {$ne: tagParam.videoId}, tags: tagParam.tags[i]}).limit(5)
        combine = combine.concat(videos)
    }
    //remove duplicates
    let unique = removeDuplicateObjectFromArray(combine, "_id")
    console.log(unique)
    return {
        message: "OK",
        data: unique
    }
}

async function getFirstPage(page) {
    return await Video.find().limit(20);
}

async function getPage(page) {
    return await Video.find().limit(20);
}

async function getById(id) {
    const video = await Video.findById(id);
    return{
        message: video? "OK": "Video not found",
        data: video
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