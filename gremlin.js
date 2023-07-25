"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagicalGremlin = exports.Gremlin = void 0;
var Castle = /** @class */ (function () {
    function Castle() {
        this.health = 1000;
        this.name = "Camelot";
        this.height = 10;
    }
    return Castle;
}());
var Gremlin = exports.Gremlin = /** @class */ (function () {
    //methods - function
    function Gremlin(name, speed) {
        if (name === void 0) { name = "Gremmy"; }
        if (speed === void 0) { speed = 1; }
        //properties - var, let
        this.health = 100;
        this.location = 0;
        this.name = name;
        this._speed = speed;
    }
    Gremlin.prototype.move = function (howFar) {
        if (howFar === void 0) { howFar = this._speed; }
        this.location += howFar;
        console.log("".concat(this.name, " is now at location ").concat(this.location));
    };
    Object.defineProperty(Gremlin.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (speed) {
            if (speed <= 3) {
                this._speed = speed;
            }
            else {
                console.log("Gremlins cannot go that fast");
            }
        },
        enumerable: false,
        configurable: true
    });
    Gremlin.max_location = 9;
    return Gremlin;
}());
var MagicalGremlin = /** @class */ (function (_super) {
    __extends(MagicalGremlin, _super);
    function MagicalGremlin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spellPoints = 100;
        return _this;
    }
    MagicalGremlin.prototype.castSpell = function () {
        console.log("Sparks Fly!!");
    };
    MagicalGremlin.prototype.move = function () {
        this.location = 9;
        console.log("".concat(this.name, " has teleported to the castle wall!"));
    };
    return MagicalGremlin;
}(Gremlin));
exports.MagicalGremlin = MagicalGremlin;
var al = new Gremlin("Al");
// al.name = "Al";
al.speed = 10000000000000;
// al.setSpeed(3);
var sue = new Gremlin("Sue", 2);
// sue.speed = 2;
var gremmy = new Gremlin();
al.move(4);
al.move();
sue.move();
sue.move();
console.log(Gremlin.max_location);
var barrier = { name: "Outer Wall", height: 10, health: 500 };
var ItemPack = /** @class */ (function () {
    function ItemPack() {
        this.things = [];
    }
    ItemPack.prototype.getItem = function (num) {
        return this.things[num];
    };
    return ItemPack;
}());
var gremPack = new ItemPack();
var wordsPack = new ItemPack();
gremPack.things[0] = al;
wordsPack.things[1] = "Hello";
var theThing = gremPack.getItem(0);
theThing.move();
