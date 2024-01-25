let isMouseDown = false;
document.body.onmousedown = () => (isMouseDown = true)
document.body.onmouseup = () => (isMouseDown = false)

const createBoard = function () {
    const board = document.querySelector('.board');
    let ctr = 1;
    for (let i = 0; i < 16; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < 16; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.id = 'cell' + ctr;
            cell.draggable = false;

            // saon mani oy
            cell.addEventListener('mouseover', function () {
                if (isMouseDown) {
                    colorCell(cell.id);
                } else {
                    return;
                }
            });

            row.appendChild(cell);
            console.log("cell has been created");
            ctr++;
        }
        board.appendChild(row);
    }
}

window.onload = function() {
    createBoard();
}

const colorCell = function (cellId) {
    const cell = document.querySelector('#' + cellId);
    cell.style.backgroundColor = 'black';
    console.log("Haha");
};