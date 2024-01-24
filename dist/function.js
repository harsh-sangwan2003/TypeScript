"use strict";
const fn = (n, m) => {
    return n + m;
};
// Function with rest params
function func(...n) {
    return n;
}
const getDataType = (product) => {
    console.log(product);
};
const productOne = {
    name: "Macbook",
    stock: 46,
    price: 99999,
    photo: "samplephoto"
};
getDataType(productOne);
// never type
const errorHandler = () => {
    throw new Error();
};
const mode = "dark";
