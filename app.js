'use strict';
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const passport = require('passport');
const flash = require('connect-flash-plus');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();

const GCharacter = require('./basic/GCharacter');
const cManager = require('./managers/characterCreator');
require('./auth/passport')(passport);

//DB
const database = require('./database/db');
database.openConnection();

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({secret: 'secret',resave: true,saveUninitialized: true}));
app.use(flash());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());


//PUBLIC DIR
app.use(express.static(__dirname + '/public'));
app.use("/public", express.static(__dirname + "/public"));

//ROUTES
app.use('/', require('./routes/index.js'));
app.use('/system', require('./routes/system.js'));

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`Rzucam 1k${port}!`);
});
