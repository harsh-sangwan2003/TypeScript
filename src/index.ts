// Type assertion

// const btn = document.getElementById('btn') as HTMLElement;
// const btn = <document.getElementById('btn')!;
const btn = <HTMLElement>document.getElementById('btn');
btn.onclick;

const img = <HTMLImageElement>document.querySelector('img');
img.src;

const form = document.getElementById('form') as HTMLFormElement;
const input = document.querySelector('input') as HTMLInputElement;

form.onsubmit = (e) => {

    e.preventDefault();
    const h2 = document.createElement('h2');
    const body = document.querySelector('body')!;
    const value = Number(input.value);

    h2.textContent = String(value + 20);
    body.append(h2);

}