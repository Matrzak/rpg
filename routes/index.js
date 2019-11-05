const express = require('express');
const router = express.Router();
const registerManager = require('../auth/registerManager');

router.get('/', (req, res) => res.render('welcome'));
router.get('/login', (req,res) => res.render('login', {message: req.flash('regComplete')}));
router.get('/register', (req,res) => res.render('register'));

router.post('/register', (req, res) => {
    registerManager.registerNewAccount(req,res);
});
module.exports = router;
