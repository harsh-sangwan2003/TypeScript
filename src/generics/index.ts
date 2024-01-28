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

const human: Human = {

    name: "Harsh",
    email: "abc@gmail.com"
}

let res4 = fn2<Person>(human);
console.log(res4);