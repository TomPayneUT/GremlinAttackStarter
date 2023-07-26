"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagicalGremlin = exports.Gremlin = void 0;
class Castle {
    constructor() {
        this.health = 1000;
        this.name = "Camelot";
        this.height = 10;
    }
    spyGremlin(target) {
        //const gremReport: Readonly<Gremlin> = target;
        return target;
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
        this.location += howFar;
        console.log(`${this.name} is now at location ${this.location}`);
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
let camelot = new Castle();
let al = new Gremlin("Al");
let sue = new Gremlin("Sue", 2);
let gremmy = new Gremlin();
al.move(4);
al.move();
sue.move();
sue.move();
let alReport = camelot.spyGremlin(al);
//alReport.health = 95;
console.log(alReport);
