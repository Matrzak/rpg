const config = require('../config/database');
const mongoose = require('mongoose');

let db = mongoose.connection;

let connectionString = () => {
    let x = `mongodb://${config.user == null ? "" : config.user+":"}${config.password == null ? "" : config.password+"@"}${config.host+":"+config.port+"/"+config.database}`;
    console.log(x);
    return x;
};

openConnection = () => {
    mongoose.connect(connectionString(), {useNewUrlParser: true});
};

db.on('error', () => {
    console.error.bind(console, 'connection error:');
    process.exit(1);
});
db.once('open', function() {
    console.log("Polaczyles sie kozaku!");
});




module.exports.openConnection = openConnection;
module.exports.connectionString = connectionString;
