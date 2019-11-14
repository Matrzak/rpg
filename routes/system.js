const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('../auth/auth');
const Character = require("../models/Character");
const ObjectId = require('mongoose').Types.ObjectId;

router.get('/', ensureAuthenticated, (req, res) => {
    res.render('dashboard', {nick: req.user.nick});
});
router.get('/characters', ensureAuthenticated, (req,res) => {
    let characters = [];
    Character.find({owner: req.user.nick}, (err, character) => {
        character.forEach((element) => {characters.push(element);});
    }).then(() => {
        req.user.characters = characters;
        res.render('characters', {user: req.user});
    });
});

router.get('/characters/info/*', ensureAuthenticated, (req,res) => {
    let p = req.params[0];
    if(!ObjectId.isValid(p)) return res.redirect('/system');
    let c = undefined;
    Character.findById(p, (err, found) => {
       if(found) c = found;
    }).then(() => {
        if(c === undefined) return res.redirect('/system');
        if(c.owner !== req.user.nick) return res.redirect('/system');
        res.render('view', {character: c});
    });
});

module.exports = router;
