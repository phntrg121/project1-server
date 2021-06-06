const mongoose = require('mongoose');
const replyModel = require('./reply/reply.model');
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(process.env.MONGODB_URL, connectionOptions);
mongoose.Promise = global.Promise;

module.exports = {
    Comment: require('./comment/comment.model'),
    Reply: require('./reply/reply.model')
};