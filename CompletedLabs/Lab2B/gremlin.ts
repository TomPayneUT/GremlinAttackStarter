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
        this.location += howFar;
        console.log(`${this.name} is now at location ${this.location}`);
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
