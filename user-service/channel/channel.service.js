const bcrypt = require('bcrypt');
const db = require('../db');
const Channel = db.Channel;

module.exports = {
    create,
    getByUserId,
    update,
    remove
};

async function getByUserId(id) {
    const channel = await Channel.findOne({userId: id});
    if(!channel) return {
        message: "channel not found",
        data: null
    }
    return {
        message: "OK",
        data: channel
    }
}

async function create(param) {
    if (await Channel.findOne({userId: param.UserId})) {
        return {
            message: 'Channel is already used',
            data: null
        }
    }

    const channel = new Channel(param);

    await channel.save();

    const newChannel = await Channel.findOne({_id: channel._id});
    return {
        message: 'OK',
        data: newChannel
    }
}

async function update(id, params) {
    const channel = await Channel.findById(id);

    // validate
    if (!channel) return {
        message: 'Channel not found',
        data: null
    }

    const updateChannel = await Channel.findOneAndUpdate({ _id:  id}, params, { new: true })

    return {
        message: 'OK',
        data: updateChannel
    }
}  

async function remove(id) {
    await User.findByIdAndRemove(id);
}