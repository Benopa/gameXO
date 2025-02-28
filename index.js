const container = document.getElementById('buttonsContainer');
let hod = 1;
const gameBord = [];
const gameString = [];
for (let j = 0; j <= 2; j++) {
    for ( let i = 0; i <= 2; i++) {
    let button = document.createElement('button');
    button.textContent = `Поле ${i}`;
    button.classList.add('btn', 'button');
    button.addEventListener('click', () => {
        if (hod === 1) {
            button.textContent = 'X';
            button.classList.remove('btn-success');
            button.classList.add('btn-danger');
            hod = 0;
        } else {
            button.textContent = '0';
            button.classList.remove('btn-danger');
            button.classList.add('btn-success');
            hod = 1;
        }
        button.setAttribute('disabled', '');

    gameString.push(button[i]);
    });
    container.appendChild(button); 
    }
    gameBord.push(gameString[j]);
}

container.style.fontSize = "100px";
