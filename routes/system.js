const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('../auth/auth');
const Character = require("../models/Character");
const ObjectId = require('mongoose').Types.ObjectId;

function getRankAttributes(permissions){
    let values = [];
    switch (permissions) {
        case 0:
            values = ["Gracz", "secondary"];
            break;
        case 1:
            values = ["Game Master", "success"];
            break;
        case 2:
            values = ["Moderator", "info"];
            break;
        case 3:
            values = ["Administrator", "danger"];
            break;
        default:
            values = ["Gracz", "secondary"];
            break;
    }
    return values;
}

router.get('/', ensureAuthenticated, (req, res) => {
    res.render('dashboard', {user: req.user, rankA: getRankAttributes(req.user.rank)});
});
router.get('/characters', ensureAuthenticated, (req,res) => {
    let characters = [];
    Character.find({owner: req.user.nick}).then((character) => {
        character.forEach((element) => {characters.push(element);});
        res.render('characters', {characters: characters});
    });
});

router.get('/characters/info/*', ensureAuthenticated, (req,res) => {
    let p = req.params[0];
    if(!ObjectId.isValid(p)) return res.redirect('/system');
    Character.findById(p).then((found) => {
        if(found === undefined) return res.redirect('/system');
        if(found.owner !== req.user.nick) return res.redirect('/system');
        res.render('view', {character: found});
    });
});

router.get('/characters/create', ensureAuthenticated, (req,res) => {
    res.render('create');
});

router.post('/characters/create', (req,res) => {
    var dog = req.body;
    console.log(dog);
    res.send("Dog added!");
});

module.exports = router;
