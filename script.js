const board = document.querySelector('.board');
const cell = document.querySelector('.cell');
const value = document.querySelector("#value");
const input = document.querySelector("#sizeInput");
const COLOR = "black";
let pixelSize = 16;
let isMouseDown = false;
document.body.onmousedown = () => (isMouseDown = true);
document.body.onmouseup = () => (isMouseDown = false);

window.onload = function() {
    createBoard();
}

// UPDATES SIZE
value.textContent = input.value;
input.addEventListener("input", (event) => {
    value.textContent = Math.round(event.target.value);
    pixelSize = value.textContent;
    board.innerHTML = '';
    createBoard();
});

const createBoard = function () {
    board.innerHTML = '';

    for (let i = 0; i < pixelSize * pixelSize; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = 'cell_' + i;

        cell.addEventListener('mouseover', function () {
            if (isMouseDown) {
                colorCell(cell.id);
            }
        });

        cell.setAttribute("unselectable", "on");

        let size = (500 / pixelSize) + "px";
        cell.style.height = size;
        cell.style.width = size;

        board.appendChild(cell);
    }
    console.log("board has been created");
}

const colorCell = function (cellId) {
    const cell = document.querySelector('#' + cellId);
    cell.classList.add('cell');
    cell.style.backgroundColor = COLOR;
};

const clearAll = function () {
    // looks o(1) pero o(n^2) yawa ka?
    // cell.innerHTML = '';
    createBoard();
    cell.removeProperty('backgroundColor');
    console.log("Board cleared");
}