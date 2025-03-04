const container = document.getElementById('buttonsContainer');
let hod = 'X';
const gameBord = [];

// function checkWin(hod) {
//     if 
// }

for (let j = 0; j <= 2; j++) {
    const gameString = [];
    for ( let i = 0; i <= 2; i++) {
    let button = document.createElement('button');
    button.textContent = `Поле ${i}`;
    button.classList.add('btn', 'button');
    button.addEventListener('click', () => {
        button.textContent = hod;
        // checkWin(hod);
        if (hod === 'X') {
            button.classList.remove('btn-success');
            button.classList.add('btn-danger');
            hod = '0';
        } else {
            button.classList.remove('btn-danger');
            button.classList.add('btn-success');
            hod = 'X';
        }
        button.setAttribute('disabled', '');
        // if (win) { }

    });
    container.appendChild(button); 
    gameString.push(button);
    }
    gameBord.push(gameString);
}
console.log(gameBord);
// const winPlay = [(gameBord[0][0].texContent === gameBord[0][1].texContent === gameBord[0][2].texContent === hod),
//                 (gameBord[1][0].texContent === gameBord[1][1].texContent === gameBord[1][2].texContent === hod),
//                 (gameBord[2][0].texContent === gameBord[2][1].texContent === gameBord[2][2].texContent === hod),
//                 (gameBord[0][0].texContent === gameBord[1][0].texContent === gameBord[2][0].texContent === hod),
//                 (gameBord[0][1].texContent === gameBord[1][1].texContent === gameBord[2][1].texContent === hod),
//                 (gameBord[0][2].texContent === gameBord[1][2].texContent === gameBord[2][2].texContent === hod),
//                 (gameBord[0][0].texContent === gameBord[1][1].texContent === gameBord[2][2].texContent === hod),
//                 (gameBord[0][2].texContent === gameBord[1][1].texContent === gameBord[2][0].texContent === hod)];




container.style.fontSize = "100px";
