"use strict";
const person = [
    {
        name: "abhi",
        age: 12
    },
    {
        name: "kash",
        age: 12
    },
    {
        name: "steve",
        age: 12
    }
];
const filterByPeople = (arr, property, value) => {
    return arr.filter(item => item[property] === value);
};
const filterByName = filterByPeople(person, "name", "abhi");
console.log(filterByName);
