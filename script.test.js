const { handleClick } = require('./script');

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
