const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    universe: {
        type: String,
        required: true
    },
    stats: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    alive: {
        type: Boolean,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {collation: 'characters'});

const Character = mongoose.model('Character', CharacterSchema);

module.exports = Character;