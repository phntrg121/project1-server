const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    creator: { type: String, required: true, unique: true },
    cover: { type: String, default: ""},
    latestUpdate: { type: Date, default: Date.now },
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

module.exports = mongoose.model('Watchlater', schema);