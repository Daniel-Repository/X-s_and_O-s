const gameBoard = document.getElementById('game');
let gameElements = [];
let gameSquares = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let gameOver = false;


for (let i of gameBoard.children) {
    gameElements.push(i);
}

//Place X
for (let i = 0; i < gameElements.length; i++) {
    gameElements[i].addEventListener("click", () => {
        if (gameSquares[i] == 0 && gameOver == false) {
            const span = document.createElement('span');
            span.classList.add('cross');
            gameElements[i].appendChild(span);
            gameSquares[i] = 1;
            checkWinner("Player 1");
            compTurn();
        }
    });
}

//Computer places O
let compTurn = () => {
    if (gameOver == false) {
        let randNum = Math.floor(Math.random() * 8);

        while (gameSquares[randNum] != 0) {
            randNum = Math.floor(Math.random() * 8);
        }

        if (gameSquares[randNum] == 0) {
            const span = document.createElement('span');
            span.classList.add('circle');
            gameElements[randNum].appendChild(span);
            gameSquares[randNum] = 2;
            checkWinner("Player 2");
        }
    }
}

//Check for winner (can refactor this)
let checkWinner = (winner) => {
    if (gameSquares[0] != 0 && gameSquares[0] == gameSquares[1] && gameSquares[1] == gameSquares[2]) {
        endGame(winner);
    }
    else if (gameSquares[3] != 0 && gameSquares[3] == gameSquares[4] && gameSquares[4] == gameSquares[5]) {
        endGame(winner);
    }
    else if (gameSquares[6] != 0 && gameSquares[6] == gameSquares[7] && gameSquares[7] == gameSquares[8]) {
        endGame(winner);
    }
    else if (gameSquares[0] != 0 && gameSquares[0] == gameSquares[3] && gameSquares[3] == gameSquares[6]) {
        endGame(winner);
    }
    else if (gameSquares[1] != 0 && gameSquares[1] == gameSquares[4] && gameSquares[4] == gameSquares[7]) {
        endGame(winner);
    }
    else if (gameSquares[2] != 0 && gameSquares[2] == gameSquares[5] && gameSquares[5] == gameSquares[8]) {
        endGame(winner);
    }
    else if (gameSquares[0] != 0 && gameSquares[0] == gameSquares[4] && gameSquares[4] == gameSquares[8]) {
        endGame(winner);
    }
    else if (gameSquares[2] != 0 && gameSquares[2] == gameSquares[4] && gameSquares[4] == gameSquares[6]) {
        endGame(winner);
    }
}

//Actions to take once the game ends
let endGame = (winner) => {
    gameOver = true;
    console.log(`Winner is: ${winner}!`);
    alert(`Winner is: ${winner}!`);
}

//Reset game
let resetGame = () => {
    gameSquares = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let i of gameElements) {
        i.replaceChildren();
    }

    gameOver = false;
}


