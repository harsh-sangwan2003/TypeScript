const fn2 = <T>(n: T): T => {

    return n;
}

let res = fn2(20);
let res2 = fn2("string");
let res3 = fn2(true);

type Human = {

    name: string,
    email: string
}

type Human2 = {

    name: string,
    email: string,
    age: number
}

const human: Human = {

    name: "Harsh",
    email: "abc@gmail.com"
}

const human2: Human2 = {

    name: "Harsh",
    email: "abc@gmail.com",
    age: 13
}

let res4 = fn2<Person>(human);
console.log(res4);

const fn3 = <T, U extends T>(n: T, o: U): { n: T, o: U } => {

    return {
        n, o
    }
}

let res5 = fn3<Human, Human2>(human, human2);
console.log(res5);