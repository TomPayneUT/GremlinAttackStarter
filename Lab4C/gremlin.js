"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagicalGremlin = exports.Gremlin = void 0;
class Castle {
    constructor() {
        this.health = 1000;
        this.name = "Camelot";
        this.height = 10;
    }
    static getCastle() {
        if (!Castle.instance) {
            Castle.instance = new Castle;
        }
        console.log(`You just got the one and only Castle Camelot.`);
        return Castle.instance;
    }
    spyGremlin(target) {
        //const gremReport: Readonly<Gremlin> = target;
        return target;
    }
    shoot(target) {
        target.health -= 25;
        if ('spellPoints' in target) {
            target.spellPoints -= 25;
        }
        console.log(target);
    }
}
class GremlinTooFarError extends Error {
    constructor(message = "Gremlin tried to move too far") {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class Gremlin {
    //methods - function
    constructor(name = "Gremmy", speed = 1) {
        //properties - var, let
        this.health = 100;
        this.location = 0;
        this.name = name;
        this._speed = speed;
    }
    move(howFar = this._speed) {
        if (this.location + howFar < 10) {
            this.location += howFar;
            console.log(`${this.name} is now at location ${this.location}`);
        }
        else {
            this.location = 9;
            throw new GremlinTooFarError(`${this.name} tried to move too far, but was stopped at ${this.location}.`);
        }
    }
    set speed(speed) {
        if (speed <= 3) {
            this._speed = speed;
        }
        else {
            console.log("Gremlins cannot go that fast");
        }
    }
    get speed() {
        return this._speed;
    }
}
Gremlin.max_location = 9;
exports.Gremlin = Gremlin;
class MagicalGremlin extends Gremlin {
    constructor() {
        super(...arguments);
        this.spellPoints = 100;
    }
    castSpell() {
        console.log("Sparks Fly!!");
    }
    move() {
        this.location = 9;
        console.log(`${this.name} has teleported to the castle wall!`);
    }
}
exports.MagicalGremlin = MagicalGremlin;
//let camelot = new Castle(); //Castle constructor is private, so we cannot make a new Castle this way
let camelot = Castle.getCastle(); //will always return the singleton
let al = new Gremlin("Al");
let sue = new Gremlin("Sue", 2);
let gremmy = new Gremlin();
let merlin = new MagicalGremlin("Merlin");
al.move(4);
al.move();
sue.move();
sue.move();
let alReport = camelot.spyGremlin(al);
//alReport.health = 95;  //this line won't work since alReport is readonly
console.log(alReport);
//camelot.shoot("Wrong Type");
camelot.shoot(al);
camelot.shoot(merlin);
//al.move(10); //This line will crash the app
try {
    al.move(10);
}
catch (e) {
    let err = e;
    console.log(err.message);
}
let anotherCastle = Castle.getCastle(); //this variable points to the same singleton Castle Camelot
