// Une fois que le HTML ressemble à ce que vous voulez : 
// 1. Faire une variable count, qui stockera le nombre de clics
// 2. Faire un eventListener sur le bouton

let timer = 5;
let count = 0;
let intervalId;

function handleClick(button, scoreElement) {
    button.addEventListener('click', () => {
        count++;
        scoreElement.textContent = count;
    })
}

function handleTimer(timerElement) {
    intervalId = setInterval(() => {
        timer--;
        timerElement.textContent = timer;
    }, 1000);

    setTimeout(() => {
        clearInterval(intervalId);
    }, 5000);
}


module.exports = { handleClick, handleTimer }