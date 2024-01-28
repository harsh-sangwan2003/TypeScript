"use strict";
const fn2 = (n) => {
    return n;
};
let res = fn2(20);
let res2 = fn2("string");
let res3 = fn2(true);
const human = {
    name: "Harsh",
    email: "abc@gmail.com"
};
const human2 = {
    name: "Harsh",
    email: "abc@gmail.com",
    age: 13
};
let res4 = fn2(human);
console.log(res4);
const fn3 = (n, o) => {
    return {
        n, o
    };
};
let res5 = fn3(human, human2);
console.log(res5);
