const board = document.querySelector('.board');
const cell = document.querySelector('.cell');
const DEFAULT_PIXEL_SIZE = 2;

let pixelSize = DEFAULT_PIXEL_SIZE;

window.onload = function() {
    createBoard();
}

let isMouseDown = false;
document.body.onmousedown = () => (isMouseDown = true)
document.body.onmouseup = () => (isMouseDown = false)

const createBoard = function () {
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
    cell.classList.add('coloredCell');
    cell.style.backgroundColor = 'black';
};

const clearAll = function () {
    // looks o(1) pero o(n^2) yawa ka?
    board.innerHTML = '';
    createBoard();
    console.log("Board cleared");
}