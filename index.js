const conteiner = document.getElementById('buttonsContainer');
let activeButton = null;
for ( let i = 0, i <= 9; i++) {
    let button = document.createElement('button');
    button.textContent = `Поле ${i}`;
    button.classList.add('btn', 'btn-danger');
    button.addEventListener('click', () => {
        if ( activeButton === button) {
            activeButton.classList.remove('btn-success');
            activeButton.classList.add('btn-danger');
            activeButton = null;
            return;
        }
        if (activeButton) {
            activeButton.classList.remove('btn-success');
            activeButton.classList.add('btn-danger');
        }
        button.classList.remove('btn-danger');
        button.classList.add('btn-success');
        activeButton = button;
    })
    container.appendChild(button); 
}
container.style.fontSize = "100px";
container.style.setProperty('100px');