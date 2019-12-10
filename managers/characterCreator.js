'use strict';

const Patterns = require('../basic/Pattern');

function getRandomClass(race){
    let aPatterns = [];
    Patterns.wfrp_c.forEach((element) => {
       if(element.pass.includes(race)) aPatterns.push(element);
    });
    return aPatterns[Math.floor(Math.random()*aPatterns.length)];
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function roll(count,k){
    let result = 0;
    for(let i = 0; i <= count; i++){
        result += getRandomInt(1,k);
    }
    return result;
}

module.exports.getRandomClass = getRandomClass;
module.exports.roll = roll;