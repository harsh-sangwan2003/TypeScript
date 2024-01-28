// Type assertion

// const btn = document.getElementById('btn') as HTMLElement;
// const btn = <document.getElementById('btn')!;
const btn = <HTMLElement> document.getElementById('btn');
btn.onclick;

const img = <HTMLImageElement> document.querySelector('img');
img.src;