class Player {

    readonly id : string;

    constructor(private height: number, protected weight: number, public age: number) {

        this.id = String(Math.random()*10);
    }

    get getHeight() {

        return this.height;
    };

    set setHeight(val: number) {

        this.height = val;
    }
}

class Player2 extends Player {

    special: boolean;

    constructor(height: number, weight: number, age: number, special: boolean) {

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