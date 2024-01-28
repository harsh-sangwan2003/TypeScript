"use strict";
// Type assertion
// const btn = document.getElementById('btn') as HTMLElement;
// const btn = <document.getElementById('btn')!;
const btn = document.getElementById('btn');
btn.onclick;
const img = document.querySelector('img');
img.src;
const form = document.getElementById('form');
const input = document.querySelector('input');
form.onsubmit = (e) => {
    e.preventDefault();
    console.log(input.value);
};
