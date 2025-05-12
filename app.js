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
        btn.disabled = true
    }, 5000);
}
let btn = document.querySelector('#button-clicker');
let scoreElement = document.querySelector('.number');
let timerElement = document.querySelector('.timer');

handleClick(btn, scoreElement);

handleTimer(timerElement);