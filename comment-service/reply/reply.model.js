const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    commentId: { type: String, required: true },
    postedDate: { type: Date, default: Date.now },
    from: { type: String, required: true },
    content: { type: String, required: true},
    likes: { type: Number, default: 0},
    parent: { type: String, default: ''},
    childs: { type: {String}}
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model('Reply', schema);