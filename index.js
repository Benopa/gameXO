const container = document.getElementById('buttonsContainer');
let activeButton = null;
const field = [];
for (let j = 0; j <=3; j++) {
    field.push()
}
for ( let i = 0; i <= 9; i++) {
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
    })
    container.appendChild(button); 
}
container.style.fontSize = "100px";
container.style.setProperty('100px');