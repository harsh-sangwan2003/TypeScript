"use strict";
const myObj = {
    name: "Harsh",
    email: "abc@gmail.com"
};
const getName = (key) => {
    return myObj[key];
};
// keyof or keyIndex
const getEmail = (key) => {
    return myObj[key];
};
console.log(getName("email"));
let key = "name";
console.log(myObj[key]);
