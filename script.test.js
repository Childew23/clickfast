const { handleClick, handleTimer } = require('./script');

test("Vérifie si le score s'incrémente", () => {
    document.body.innerHTML = 
    `<h2 class="timer">5</h2>
    <p class="number">0</p>
    <button id="button-clicker">Cliquez !</button>`;
    
    let btnTest = document.getElementById('button-clicker');
    let scoreElement = document.querySelector('p.number');

    handleClick(btnTest, scoreElement);

    btnTest.click();
    btnTest.click();
    btnTest.click();
    expect(parseInt(scoreElement.textContent)).toBe(3);
})

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');
jest.spyOn(global, 'setInterval');

test("Vérifie que le timer décompte correctemnt", ()=>{
    document.body.innerHTML = 
    `<h2 class="timer">5</h2>
    <p class="number">0</p>
    <button id="button-clicker">Cliquez !</button>`
    let timerElement = document.querySelector('.timer');
    handleTimer(timerElement);

    expect(setInterval).not.toHaveBeenCalled();

    jest.runAllTimers();

    expect(setTimeout).toHaveBeenCalledTimes(1);
})