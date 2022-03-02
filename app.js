const squareTopLeft = document.getElementById('square-top-left');
const squareTopMiddle = document.getElementById('square-top-middle');
const squareTopRight = document.getElementById('square-top-right');
const squareMiddleLeft = document.getElementById('square-middle-left');
const squareMiddle = document.getElementById('square-middle-middle');
const squareMiddleRight = document.getElementById('square-middle-right');
const squareBottomLeft = document.getElementById('square-bottom-left');
const squareBottomMiddle = document.getElementById('square-bottom-middle');
const squareBottomRight = document.getElementById('square-bottom-right');

const gameBoard = document.getElementById('game');
const gameSquares = [];

for (let i of gameBoard.children) {
    gameSquares.push(i);
}

for (let i of gameSquares) {
    i.addEventListener("click", () => {
        const span = document.createElement('span');
        span.classList.add('cross');
        i.appendChild(span);
    });
}




