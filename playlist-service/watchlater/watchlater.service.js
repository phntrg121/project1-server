const db = require('../db');
const Watchlater = db.Watchlater;

module.exports = {
    create,
    getByUserId,
    update,
    remove
};

async function create(param){
    const list = new Watchlater({creator: param.userId});
    // save user
    await list.save();

    const newList = await Watchlater.findById(list._id);
    return {
        message: 'OK',
        data: newList
    }
}

async function getByUserId(id) {
    const list = await Watchlater.findOne({creator: id})
    return {
        message: "OK",
        data: list
    }
}

async function update(id, param) {
    const list = await Watchlater.findById(id);

    Object.assign(video, param);

    await list.save();
}

async function remove(id) {
    await Watchlater.findByIdAndRemove(id);
}