const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    nick: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    rank: {
        type: Number,
        required: true
    },
    characters: {
        type: Array,
        required: true
    }
}, {strict: false});

const User = mongoose.model('User', UserSchema);

module.exports = User;