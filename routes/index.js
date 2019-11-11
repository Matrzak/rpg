const express = require('express');
const router = express.Router();
const passport = require('passport');
const registerManager = require('../auth/registerManager');
const {forwardAuthenticated} = require('../auth/auth');

router.get('/', (req, res) => res.render('welcome'));
router.get('/login', forwardAuthenticated, (req,res) => {
    res.render('login', {regComplete: req.flash('regComplete'), message: req.flash('error')})
});
router.get('/register', forwardAuthenticated, (req,res) => res.render('register'));

router.get('/logout', (req,res) => {
    req.logout();
    res.redirect('/');
});

router.post('/register', (req, res) => {
    registerManager.registerNewAccount(req,res);
});

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/system',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
});

module.exports = router;
