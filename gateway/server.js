require('dotenv/config');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/users', require('./services/user.js'));
app.use('/videos', require('./services/video.js'));
app.use('/comments', require('./services/comment'));
app.use('/subscriptions', require('./services/subscription'));

const port = process.env.PORT || 3000;

const server = app.listen(port, function() {
   console.log('Server is listening on port ' + port);
   console.log('user_url: ' + process.env.USERSERV_URL)
   console.log('video_url: ' + process.env.VIDEOSERV_URL)
   console.log('comment_url: ' + process.env.COMMENTSERV_URL)
   console.log('subscription_url: ' + process.env.SUBSCRIPTIONSERV_URL)
});