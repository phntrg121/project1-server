const mongoose = require('mongoose');
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(process.env.MONGODB_URL, connectionOptions);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('./user/user.model'),
    Channel: require('./channel/channel.model')
};