const board = document.querySelector('.board');
const cell = document.querySelector('.cell');
// =======================
const value = document.querySelector("#value");
const input = document.querySelector("#sizeInput");
value.textContent = input.value;
input.addEventListener("input", (event) => {
    value.textContent = Math.round(event.target.value);
    pixelSize = event.target.value;
    clearAll();
});
// =======================
const COLOR = "black";

let pixelSize = 16;

window.onload = function() {
    createBoard();
}

let isMouseDown = false;
document.body.onmousedown = () => (isMouseDown = true);
document.body.onmouseup = () => (isMouseDown = false);
// document.body.onmouseleave = () => (isMouseDown = false);

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

// sizeSelector.addEventListener("input", () => {
//     createBoard();
// });

const colorCell = function (cellId) {
    const cell = document.querySelector('#' + cellId);
    cell.classList.add('coloredCell');
    cell.style.backgroundColor = COLOR;
};

const clearAll = function () {
    // looks o(1) pero o(n^2) yawa ka?
    board.innerHTML = '';
    createBoard();
    console.log("Board cleared");
}