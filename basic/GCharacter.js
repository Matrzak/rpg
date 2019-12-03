'use strict';
const cManager = require('../managers/characterCreator');
const Patterns = require('./Pattern');
class GCharacter{

    constructor(params) {
        this.name = params.name;
        this.stats = params.stats;
        this.profession = undefined;
        this.race = params.race;
        this.sex = 0;
    }

    newRandomCharacter(){
        this.statisticByRace();
        this.rollStats();
        this.createSecondStatistics(Patterns.secondPattern);
        this.upgradeStatistics(cManager.getRandomClass());
    }

    convertRace() {
        if (this.race === 1) return "Czlowiek";
        if (this.race === 2) return "Elf";
        if (this.race === 3) return "Krasnolud";
        if (this.race === 4) return "Niziolek";
    }

    rollStats() {
        for (var key in this.stats) this.stats[key] += cManager.roll(1, 10);
    }

    createSecondStatistics(pattern) {
        this.stats = Object.assign({}, this.stats, pattern);
        this.stats["ZYW"] += this.getHealthByRace();
        this.stats["PP"] = this.getDestinyPointsByRace();
        this.stats["SZ"] = this.getSpeedByRace();
    }

    upgradeStatistics(c) {
        for (var key in this.stats) {
            if (c.stats[key] === null || c.stats[key] === undefined) continue;
            this.stats[key] += c.stats[key];
        }
        this.stats["S"] = Number((this.stats["K"]).toString()[0]);
        this.stats["WT"] = Number((this.stats["ODP"]).toString()[0]);
    }

    statisticByRace() {
        let statistic = {};
        switch (this.race) {
            case 1:
            default:
                statistic = {"WW": 20,"US": 20,"K": 20,"ODP": 20,"ZR": 20,"INT": 20,"SW": 20,"OGD": 20};
                break;
            case 2:
                statistic = {"WW": 20,"US": 30,"K": 20,"ODP": 20,"ZR": 30,"INT": 20,"SW": 20,"OGD": 20};
                break;
            case 3:
                statistic = {"WW": 30,"US": 20,"K": 20,"ODP": 30,"ZR": 10,"INT": 20,"SW": 20,"OGD": 10};
                break;
            case 4:
                statistic = {"WW": 10,"US": 30,"K": 10,"ODP": 10,"ZR": 30,"INT": 20,"SW": 20,"OGD": 30};
                break;
        }
        this.stats = statistic;
    }

    getDestinyPointsByRace() {
        let race = this.race;
        let r = cManager.roll(0, 10);
        let po = undefined;
        if (r >= 1 && r <= 4) {
            if (race === 1) po = 2;
            if (race === 2) po = 1;
            if (race === 3) po = 1;
            if (race === 4) po = 2;
        }
        if (r >= 5 && r <= 7) {
            if (race === 1) po = 3;
            if (race === 2) po = 2;
            if (race === 3) po = 2;
            if (race === 4) po = 2;
        }
        if (r >= 8 && r <= 10) {
            if (race === 1) po = 3;
            if (race === 2) po = 2;
            if (race === 3) po = 3;
            if (race === 4) po = 3;
        }
        return po;
    }

    getSpeedByRace(){
        if(this.race === 1) return 4;
        if(this.race === 2) return 5;
        if(this.race === 3) return 3;
        if(this.race === 4) return 4;
    }

    getHealthByRace() {
        let race = this.race;
        let r = cManager.roll(0, 10);
        let hp = undefined;
        if (r >= 1 && r <= 3) {
            if (race === 1) hp = 10;
            if (race === 2) hp = 9;
            if (race === 3) hp = 11;
            if (race === 4) hp = 8;
        }
        if (r >= 4 && r <= 6) {
            if (race === 1) hp = 11;
            if (race === 2) hp = 10;
            if (race === 3) hp = 12;
            if (race === 4) hp = 9;
        }
        if (r >= 7 && r <= 9) {
            if (race === 1) hp = 12;
            if (race === 2) hp = 11;
            if (race === 3) hp = 13;
            if (race === 4) hp = 10;
        }
        if (r === 10) {
            if (race === 1) hp = 13;
            if (race === 2) hp = 12;
            if (race === 3) hp = 14;
            if (race === 4) hp = 11;
        }
        return hp;
    }
}

module.exports = GCharacter;