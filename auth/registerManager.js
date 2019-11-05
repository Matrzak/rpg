'use strict';

const User = require('../models/User');
const bcrypt = require('bcryptjs');

function registerNewAccount(req, res){
    const {email,nick,passwords} = req.body;
    let errors = [];
    if(!email || !nick || !passwords[0] || !passwords[1]){
        errors.push("Prosze wypelnic wszystkie pola!");
    }
    if(passwords[0] !== passwords[1]){
        errors.push("Podane hasla nie sa takie same!");
    }
    if(passwords[0].length < 6){
        errors.push("Haslo musi miec minimalnie 6 znakow!");
    }
    let password = passwords[0];
    let p1 = passwords[1];
    if(errors.length > 0) return res.render('register',{errors, nick, email, password, p1});

    User.findOne({$or: [ {email: email}, {nick: nick} ]})
        .then(user => {
           if(user && user.email === email){
               errors.push("Taki adres email jest juz zarejestrowany!");
               return res.render('register',{errors, nick, email, password, p1});
           }
           if(user && user.nick === nick){
               errors.push("Uzytkownik z takim nickiem juz istnieje!");
               return res.render('register',{errors, nick, email, password, p1});
           }
           const newUser = new User({email,nick,password,rank: 0});
           bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newUser.password, salt, (err, hash) => {
               if(err){ return console.log(err) }
               newUser.password = hash;
               newUser.save()
                   .then(user => {
                       req.flash('regComplete', 'Rejestracja zostala zakonczona poprawnie, mozesz sie teraz zalogowac!');
                       res.redirect('/login');
                   })
                   .catch(err => console.log(err));
           }));
        });

}

module.exports.registerNewAccount = registerNewAccount;