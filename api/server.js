// server.js

const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB');

const usersRoute = require('./routes/users.route');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { console.log('MongoDB : Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/users', usersRoute);

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'URLs to trust of allow');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
});

let port = 3300; // process.env.PORT || 4000;

const server = app.listen(port, function() {
    console.log('Listening on port ' + port);
});