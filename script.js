const board = document.querySelector('.board');
const cell = document.querySelector('.cell');
const value = document.querySelector("#value");
const input = document.querySelector("#sizeInput");
const colorSelect = document.querySelector("#colorSelect");
const rainbowDiv = document.querySelector("#rainbow");
const eraserDiv = document.querySelector("#eraser");
const selectDiv = document.querySelector("#selectDiv");

let rainbow = false;
let eraser = false;
let COLOR = "#000000";
let setColor = "black";
let pixelSize = 16;
let isMouseDown = false;
document.body.onmousedown = () => (isMouseDown = true);
document.body.onmouseup = () => (isMouseDown = false);

window.onload = function() {
    createBoard();
    value.textContent = pixelSize + " x " + pixelSize;
    eraserDiv.style.backgroundColor = "#F0E7F2";
    eraserDiv.style.color = "black";
    selectDiv.style.backgroundColor = "#F0E7F2";
    selectDiv.style.color = "black";
    rainbowDiv.style.backgroundColor = "#000000";
    rainbowDiv.style.color = "white";
}

// Updates size
value.textContent = input.value;
input.addEventListener("input", (event) => {
    let newPixelSize = Math.ceil(event.target.value);
    value.textContent = newPixelSize + " x " + newPixelSize;
    pixelSize = newPixelSize;
    board.innerHTML = '';
    createBoard();
});

// Updates color
colorSelect.addEventListener("input",(event => {
    COLOR = event.target.value;
    setColor = COLOR;
    rainbow = false;
    eraser = false;
    eraserDiv.style.backgroundColor = "#F0E7F2";
    selectDiv.style.backgroundColor = "#000000";
    rainbowDiv.style.backgroundColor = "#F0E7F2";
}))


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
        cell.setAttribute("user-select","none");

        let size = (500 / pixelSize) + "px";
        cell.style.height = size;
        cell.style.width = size;
        cell.style.backgroundColor = "white";

        board.appendChild(cell);
    }
}

const colorCell = function (cellId) {
    const cell = document.querySelector('#' + cellId);
    cell.classList.add('cell');
    if (rainbow) {
        let r = Math.floor(Math.random() * 256).toString(16).padStart(2,'0');
        let g = Math.floor(Math.random() * 256).toString(16).padStart(2,'0');
        let b = Math.floor(Math.random() * 256).toString(16).padStart(2,'0');

        COLOR = `#${r}${g}${b}`;
    } else if (eraser) {
        COLOR = '#FFFFFF';
    }
    cell.style.backgroundColor = COLOR;
};

const rainbowMode = function () {
    rainbow = true;
    eraser = false;
    eraserDiv.style.backgroundColor = "#F0E7F2";
    eraserDiv.style.color = "black";
    selectDiv.style.backgroundColor = "#F0E7F2";
    selectDiv.style.color = "black";
    rainbowDiv.style.backgroundColor = "#000000";
    rainbowDiv.style.color = "white";
}

const eraserMode = function () {
    eraser = true;
    rainbow = false;
    if (eraser) COLOR = setColor;
    eraserDiv.style.backgroundColor = "#000000";
    eraserDiv.style.color = "white";
    selectDiv.style.backgroundColor = "#F0E7F2";
    selectDiv.style.color = "black";
    rainbowDiv.style.backgroundColor = "#F0E7F2";
    rainbowDiv.style.color = "black";
}

const selectColor = function () {
    eraser = false;
    rainbow = false;
    COLOR = setColor;
    eraserDiv.style.backgroundColor = "#F0E7F2";
    eraserDiv.style.color = "black";
    selectDiv.style.backgroundColor = "#000000";
    selectDiv.style.color = "white";
    rainbowDiv.style.backgroundColor = "#F0E7F2";
    rainbowDiv.style.color = "black";
}

const clearAll = function () {
    createBoard();
}