const container = document.getElementById('buttonsContainer');
let activeButton = null;
const gameBord = [];
const gameString = [];
for (let j = 0; j <= 2; j++) {
    for ( let i = 0; i <= 2; i++) {
    let button = document.createElement('button');
    button.textContent = `Поле ${i}`;
    button.classList.add('btn', 'button');
    button.addEventListener('click', () => {
        if ( activeButton === button) {
            activeButton.classList.remove('btn-success');
            activeButton.classList.add('btn-danger');
            button.textContent = 'X';
            activeButton = null;
            return;
        }
        button.classList.remove('btn-danger');
        button.classList.add('btn-success');
        button.textContent = '0';
        activeButton = button;
    gameString = gameString.push(activeButton[i]);
    })
    container.appendChild(button); 
    }

    gameBord = gameBord.push(gameString[j]);

}

container.style.fontSize = "100px";
