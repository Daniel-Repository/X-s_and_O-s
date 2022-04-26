const gameBoard = document.getElementById('game');
let gameElements = [];
let gameSquares = [0, 0, 0, 0, 0, 0, 0, 0, 0];


for (let i of gameBoard.children) {
    gameElements.push(i);
}

//Place X
for (let i = 0; i < gameElements.length; i++) {
    gameElements[i].addEventListener("click", () => {
        if (gameSquares[i] == 0) {
            const span = document.createElement('span');
            span.classList.add('cross');
            gameElements[i].appendChild(span);
            gameSquares[i] = 1;
            checkWinner();
            compTurn();
        }
    });
}

//Computer places O
let compTurn = () => {
    let randNum = Math.floor(Math.random() * 8);

    while (gameSquares[randNum] != 0) {
        randNum = Math.floor(Math.random() * 8);
    }

    if (gameSquares[randNum] == 0) {
        const span = document.createElement('span');
        span.classList.add('circle');
        gameElements[randNum].appendChild(span);
        gameSquares[randNum] = 2;
    }
}

//Check for winner (can refactor this)
let checkWinner = () => {
    if (gameSquares[0] == 1 && gameSquares[0] == gameSquares[1] && gameSquares[1] == gameSquares[2]) {
        endGame();
    }
    else if (gameSquares[3] == 1 && gameSquares[3] == gameSquares[4] && gameSquares[4] == gameSquares[5]) {
        endGame();
    }
    else if (gameSquares[6] == 1 && gameSquares[6] == gameSquares[7] && gameSquares[7] == gameSquares[8]) {
        endGame();
    }
    else if (gameSquares[0] == 1 && gameSquares[0] == gameSquares[3] && gameSquares[3] == gameSquares[6]) {
        endGame();
    }
    else if (gameSquares[1] == 1 && gameSquares[1] == gameSquares[4] && gameSquares[4] == gameSquares[7]) {
        endGame();
    }
    else if (gameSquares[2] == 1 && gameSquares[2] == gameSquares[5] && gameSquares[5] == gameSquares[8]) {
        endGame();
    }
    else if (gameSquares[0] == 1 && gameSquares[0] == gameSquares[4] && gameSquares[4] == gameSquares[8]) {
        endGame();
    }
    else if (gameSquares[2] == 1 && gameSquares[2] == gameSquares[4] && gameSquares[4] == gameSquares[6]) {
        endGame();
    }
}

let endGame = () => {
    //todo
}



