const db = require('../db');
const Playlist = db.Playlist;

module.exports = {
    create,
    getById,
    getAllFrom,
    update,
    remove
};

async function create(param){
    const list = new Playlist(param);
    // save user
    await list.save();

    const newList = await Playlist.findById(list._id);
    return {
        message: 'OK',
        data: newList
    }
}

async function getById(id) {
    const list = await Playlist.findById(id).limit(20)
    return {
        message: "OK",
        data: list
    }
}

async function getAllFrom(id) {
    const lists = await Playlist.find({creator: id}).limit(20)
    return {
        message: "OK",
        data: lists
    }
}

async function update(id, param) {
    const video = await Playlist.findById(id);

    Object.assign(video, param);

    await video.save();
}

async function remove(id) {
    await Video.findByIdAndRemove(id);
}