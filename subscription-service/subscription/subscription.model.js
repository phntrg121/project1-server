const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    userId: { type: String, unique: true, required: true },
    subscriberCount: { type: Number, default: 0},
    subscribers: { type: [String], required: true },
    subscriptionCount: { type: Number, default: 0 },
    subscriptions: { type: [String], default: []}
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model('Subscription', schema);