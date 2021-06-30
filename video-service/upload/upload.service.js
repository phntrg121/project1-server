const db = require('../db');
const Upload = db.Upload;
const Video = db.Video;

module.exports = {
    upload,
    getUploads,
    getAllUploads,
};

async function upload(videoParam) {
    const video = new Video(videoParam);

    // save video
    await video.save();

    const newVideo = await Video.findOne({_id: video._id})

    await addUpload({userId: videoParam.uploaderId, videoId: newVideo._id})

    return {
        message: 'OK',
        data: newVideo
    }
}

async function addUpload(uploadParam){
    const up = await Upload.findOne({userId: uploadParam.userId})

    if(!up){
        upload = new Upload({userId: uploadParam.userId})
        await upload.save();
    }

    await Upload.findOneAndUpdate(
        { userId: uploadParam.userId },
        { $push: { videos: uploadParam.videoId } }
    ); 
}

async function removeUpload(upload){
    if(!up){
        upload = new Upload({userId: uploadParam.userId})
        await upload.save();
    }
    else{
        await Upload.findOneAndUpdate(
            { userId: uploadParam.userId },
            { $pull: { videos: uploadParam.videoId } }
        ); 
    }
}

async function getUploads(id) {
    const upload = await Upload.findOne({ userId: id })
    if(!upload){
        return {
            message: "OK",
            data: upload
        }
    }
    else{
        let videos = []
        for(let i in upload.videos){
            const video = await Video.findOne({_id: upload.videos[i], visibility: "public"})
            if(video) videos.push(video)
        }
        return {
            message: "OK",
            data: videos
        }
    }
    
}

async function getAllUploads(id) {
    const upload = await Upload.findOne({ userId: id })
    if(!upload){
        return {
            message: "OK",
            data: upload
        }
    }
    else{
        let videos = []
        for(let i in upload.videos){
            const video = await Video.findOne({_id: upload.videos[i]})
            if(video) videos.push(video)
        }
        return {
            message: "OK",
            data: videos
        }
    }
    
}