const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    videoId: { type: String, required: true },
    postedDate: { type: Date, default: Date.now },
    from: { type: String, required: true },
    avatar: { type: String, required: true},
    content: { type: String, required: true},
    replies: { type: [String], default: []},
    likes: { type: Number, default: 0},
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model('Comment', schema);