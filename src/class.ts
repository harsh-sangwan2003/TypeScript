class Player {

    constructor(private height: number, protected weight: number, public age: number) { }

    getHeight = () => this.height;
}

let p1 = new Player(90,80,19);
console.log(p1.getHeight());
console.log(p1.age);