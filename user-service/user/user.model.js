const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    email: { type: String, unique: true, required: true },
    username: { type: String, required: true },
    hash: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    avatar: {type: String, default: "https://firebasestorage.googleapis.com/v0/b/ytclapp-fe413.appspot.com/o/images%2Fdefualt_avatar.jpg?alt=media&token=91a62be1-34c5-4912-92e1-da8a5e75d147" }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('User', schema);