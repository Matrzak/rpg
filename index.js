'use strict';
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const passport = require('passport');
const flash = require('connect-flash-plus');
const session = require('express-session');

const app = express();

require('./auth/passport')(passport);

const database = require('./database/db');
database.openConnection();

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({ extended: true }));


app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);
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
