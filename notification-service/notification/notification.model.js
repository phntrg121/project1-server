const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    type: { type: String, required: true},
    header: { type: String, required: true},
    body: { type: String, required: true},
    createdDate: { type: Date, default: Date.now},
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model('Notification', schema);