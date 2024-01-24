"use strict";
class Player {
    constructor(height, weight, age) {
        this.height = height;
        this.weight = weight;
        this.age = age;
        this.id = String(Math.random() * 10);
    }
    get getHeight() {
        return this.height;
    }
    ;
    set setHeight(val) {
        this.height = val;
    }
}
class Player2 extends Player {
    constructor(height, weight, age, special) {
        super(height, weight, age);
        this.special = special;
    }
}
let p1 = new Player(90, 80, 19);
let p2 = new Player2(90, 80, 12, true);
console.log(p2.getHeight);
p2.setHeight = 12;
console.log(p2.getHeight);
console.log(p2.id);
