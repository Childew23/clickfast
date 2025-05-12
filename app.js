const { handleClick, handleTimer } = require('./script');

let btn = document.querySelector('#button-clicker');
let scoreElement = document.querySelector('.number');
let timerElement = document.querySelector('.timer');

handleClick(btn, scoreElement);

handleTimer(timerElement);