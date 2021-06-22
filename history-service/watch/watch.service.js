const db = require('../db');
const Watch = db.Watch;

module.exports = {
    create,
    getByUserId,
    push,
};

async function create(param){
    const history = new Watch({userId: param.userId});
    // save user
    await history.save()

    const newHistory = await Watch.findById(history._id);
    return {
        message: 'OK',
        data: newHistory
    }
}

async function push(id, params){
    const history = await Watch.findOne({userId: id, videos: { $elemMatch: { videoId: params.videoId }}})

    if(!history){        
        await Watch.findOneAndUpdate(
            { userId: id },
            { $push: { videos: {videoId: params.videoId, lastWatched: new Date(params.lastWatched)} } }
        );
    }
    else{
        const video = history.videos.find(video => video.videoId == params.videoId)
        const index = history.videos.indexOf(video)
        history.videos[index].lastWatched = new Date(params.lastWatched)
        history.markModified('videos');
        await history.save()
    }
}

async function getByUserId(id) {
    const history = await Watch.findOne({userId: id}).limit(20)
    const sorted = history.videos.sort((a,b)=>{
        return b.lastWatched - a.lastWatched
    })

    return {
        message: "OK",
        data: sorted
    }
}