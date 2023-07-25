interface Attackable {  //promise to have properties
    health: number;
    height?: number;
    name?: string;
}

class Castle implements Attackable{
    health: number = 1000;
    name: string = "Camelot";
    height: number = 10;
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

let al = new Gremlin("Al");
// al.name = "Al";
al.speed = 10000000000000;
// al.setSpeed(3);
let sue = new Gremlin("Sue", 2);
// sue.speed = 2;
let gremmy = new Gremlin();


al.move(4);
al.move();
sue.move();
sue.move();
console.log(Gremlin.max_location);

let barrier: Attackable = {name: "Outer Wall", height: 10, health: 500};



class ItemPack<T>{
    things: T[] = [];

    getItem(num: number): T {
        return this.things[num];
    }
}

let gremPack = new ItemPack<Gremlin>();
let wordsPack = new ItemPack<string>();

gremPack.things[0] = al;
wordsPack.things[1] = "Hello";

let theThing = gremPack.getItem(0);
theThing.move();
