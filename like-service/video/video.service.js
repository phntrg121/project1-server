const db = require('../db');
const Video = db.Video;

module.exports = {
    create,
    getByUserId,
    check,
    like,
    update,
    remove
};

async function create(param){
    const list = new Video({creator: param.userId});
    // save user
    await list.save();

    const newList = await Video.findById(list._id);
    return {
        message: 'OK',
        data: newList
    }
}

async function check(param){
    const video = await Video.findOne({userId: param.userId, video: param.videoId})
    return {
        message: "OK",
        data: video? true : false
    }
}

async function like(param){
    const video = await Video.findOne({creator: param.userId, videos: param.videoId})
    
    if(!video){        
        await Video.findOneAndUpdate(
            { creator: param.userId },
            { $inc: { videoCount : 1 }, $push: { videos: param.videoId } }
        );
        return {
            message: 'OK',
            data: true
        }
    }
    else{
        await Video.findOneAndUpdate(
            { creator: param.userId },
            { $inc: { videoCount : -1 }, $pull: { videos: param.videoId } }
        );
        return {
            message: 'OK',
            data: false
        }
    }
}

async function getByUserId(id) {
    const list = await Video.findOne({creator: id})
    return {
        message: "OK",
        data: list
    }
}

async function update(id, param) {
    const list = await Video.findById(id);

    Object.assign(video, param);

    await list.save();
}

async function remove(id) {
    await Video.findByIdAndRemove(id);
}