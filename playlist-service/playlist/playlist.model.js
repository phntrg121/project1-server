const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, required: true },
    cover: { type: String, default: ""},
    latestUpdate: { type: Date, default: Date.now },
    creator: { type: String, required: true },
    videos: { type: [String], default: [] },
    videoCount: { type: Number, default: 0 }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model('Playlist', schema);