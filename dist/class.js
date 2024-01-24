"use strict";
class Player {
    constructor(height, weight, age) {
        this.height = height;
        this.weight = weight;
        this.age = age;
        this.getHeight = () => this.height;
    }
}
let p1 = new Player(90, 80, 19);
console.log(p1.getHeight());
console.log(p1.age);
