require('dotenv/config');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1', require('./user/user.controller'));

const port = process.env.PORT || 3000;

const server = app.listen(port, function() {
   console.log('Server is listening on port ' + port);
});
