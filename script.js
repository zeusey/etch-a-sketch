const container = document.querySelector('.container');

let amount = 16

function drawBoard(amount) {
    for (j = 0; j < amount; j++) {
        for (i = 0; i < amount; i++) {
            let div = document.createElement('div');
            div.classList.add('square');
            div.style.height = `${600/amount}px`;
            div.style.width = `${600/amount}px`;
            container.appendChild(div);
        };
    };
    let divs = document.querySelectorAll('.square');
    divs.forEach((div) => {
        div.addEventListener('mouseover', () => {
        div.classList.add('hover');
    });
});
}

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

const btn = document.querySelector('#clear');
btn.addEventListener('click', () => {
    removeGrid();
    amount = prompt('Enter the number of squares: ')
    drawBoard(amount);
});

drawBoard(amount);


