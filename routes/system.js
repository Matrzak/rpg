const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('../auth/auth');

router.get('/', ensureAuthenticated, (req, res) => res.render('dashboard', {nick: req.user.nick}));

module.exports = router;
