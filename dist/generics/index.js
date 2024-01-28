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
let res4 = fn2(human);
console.log(res4);
