// Une fois que le HTML ressemble à ce que vous voulez : 
// 1. Faire une variable count, qui stockera le nombre de clics
// 2. Faire un eventListener sur le bouton

let count = 0;
let btn = document.querySelector('#button-clicker');
let timer = 5;
let intervalId;

btn.addEventListener('click', () => {
    count++;
    document.querySelector('p.number').textContent = count;
})

intervalId = setInterval(() => {
    timer--;
    document.querySelector('h2.timer').textContent = timer;
}, 1000);

setTimeout(() => { 
    clearInterval(intervalId);
    btn.disabled = true;
 }, 5000);