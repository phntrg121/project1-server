const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: { type: String, required: true },
    thumbnail: { type: String, required: true },
    uploadedDate: { type: Date, default: Date.now },
    videoURL: { type: String, required: true },
    description: { type: String, default: "No description"},
    uploaderId: { type: String, required: true },
    views: { type: Number, default: 0},
    likes: { type: Number, default: 0},
    tags: { type: [String], default: []}
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model('Video', schema);