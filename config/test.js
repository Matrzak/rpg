'use strict';

function testFunction(req){
    console.log(req.flash("sm"));
}

module.exports.testFunction = testFunction;