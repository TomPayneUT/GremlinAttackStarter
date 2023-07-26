interface Attackable {  //promise to have properties
    health: number;
    height?: number;
    name?: string;
}

class Castle implements Attackable{
    health: number = 1000;
    name: string = "Camelot";
    height: number = 10;

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

export class Gremlin implements Attackable {
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
            throw new Error(`${this.name} tried to move too far, but was stopped at ${this.location}.`);
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


export class MagicalGremlin extends Gremlin{
    spellPoints: number = 100;

    castSpell(): void {
        console.log("Sparks Fly!!");
    }

    move(): void {
        this.location = 9;
        console.log(`${this.name} has teleported to the castle wall!`);
    }
}

let camelot = new Castle();
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