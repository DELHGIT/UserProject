// server.js

let map = require('lodash/map');
let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let cors = require('cors');
let mongoose = require('mongoose');
let config = require('./DB');
let http = require('http');
let session = require('express-session');

let usersRoute = require('./routes/users.route') ;
//let usersRoute = require('./routes/UserRouter');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { console.log('MongoDB : Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);

const app = express();
//Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());
app.use('/users', usersRoute);
app.use(session({
    secret: 'keyboard_ED_cat', // un code , on peut mettre n importe quoi
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.all('*', (req, res, next) => {
    res.writeHead(200, { 'Content-Type': 'application/json' }, { 'Access-Control-Allow-Origin': '*' }, { 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE' }, { 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' })
        /*res.header('Content-Type', 'application/json');
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');*/
    if (req.method == 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

//Routes
app.get('/', (res, respo) => {
    respo.send('Tester le serveur : je suis à la racine')

})
console.log('Bonjour, je lance le serveur.')

let port = 3300; // process.env.PORT || 4000;

const server = app.listen(port, () => {
    console.log('Listening on port ' + port); 
});