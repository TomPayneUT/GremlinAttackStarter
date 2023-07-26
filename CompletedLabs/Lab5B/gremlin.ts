interface Attackable {  //promise to have properties
    health: number;
    height?: number;
    name?: string;
}

class Castle implements Attackable{
    health: number = 1000;
    name: string = "Camelot";
    height: number = 10;
    static instance: Castle;

    private constructor(){

    }

    static getCastle(): Castle {
        if(!Castle.instance){
            Castle.instance = new Castle;
        }

        console.log(`You just got the one and only Castle Camelot.`)
        return Castle.instance;
    }

    spyGremlin(target: Gremlin): Readonly<Gremlin> {
        //const gremReport: Readonly<Gremlin> = target;
        return target;
    }

    shoot(target: Attackable) {
        target.health -= 25;
        if ('spellPoints' in target) {
            (target.spellPoints as number) -= 25;
        }
        console.log(target);
    }
}

class GremlinTooFarError extends Error {
    constructor(message: string = "Gremlin tried to move too far") {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

class Gremlin implements Attackable {
    //properties - var, let
    health: number = 100;
    location: number = 0;
    private _speed: number;
    name: string;
    static max_location: number = 9;

    //methods - function
    constructor(name: string = "Gremmy", speed: number = 1) {
        this.name = name;
        this._speed = speed;
    }

    move(howFar: number = this._speed): void {
        if(this.location + howFar < 10) {
            this.location += howFar;
            console.log(`${this.name} is now at location ${this.location}`);
        } else {
            this.location = 9;
            throw new GremlinTooFarError(`${this.name} tried to move too far, but was stopped at ${this.location}.`);
        }
    }

    set speed(speed: number){
        if(speed <= 3){
            this._speed = speed;
        } else {
            console.log("Gremlins cannot go that fast");
        }
    }

    get speed(): number {
        return this._speed;
    }

}

class Magical {
    enchant(): void {
        console.log(`This glows with power!`);
    }
}

class MagicalGremlin extends Gremlin{
    spellPoints: number = 100;

    castSpell(): void {
        console.log("Sparks Fly!!");
    }

    move(): void {
        this.location = 9;
        console.log(`${this.name} has teleported to the castle wall!`);
    }
}

function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach((baseCtor) => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
        Object.defineProperty(
          derivedCtor.prototype,
          name,
          Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
            Object.create(null)
        );
      });
    });
  }

interface MagicalGremlin extends Gremlin, Magical {}
applyMixins(MagicalGremlin, [Gremlin, Magical]);

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

let alReport = camelot.spyGremlin(al)
//alReport.health = 95;  //this line won't work since alReport is readonly
console.log(alReport);

//camelot.shoot("Wrong Type");
camelot.shoot(al);
camelot.shoot(merlin);

//al.move(10); //This line will crash the app

try{
    al.move(10)
} catch (e) {
    let err = e as Error
    console.log(err.message);
}

let anotherCastle = Castle.getCastle(); //this variable points to the same singleton Castle Camelot

merlin.enchant();