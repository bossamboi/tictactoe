//player factory
const createPlayer = (name, marker) => {
    return { name, marker };
}


//game board object
const gameBoard = (() => {

    let board = [];
    for (let i = 0; i < 9; i++) {
        board.push('');
    }

    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    //populate board with squares 
    let squareContainer = document.querySelector('#square-container');

    for (let i = 0; i < board.length; i++) {
        let squareDiv = document.createElement('div');
        squareDiv.textContent = board[i];
        squareDiv.classList.add('square-class');
        squareDiv.classList.add('hover');
        squareDiv.setAttribute('data-index', `${i}`);
        squareContainer.appendChild(squareDiv);
    }

    //player creation
    const player1 = createPlayer('Player 1', 'X');
    let player1Turn = true; //turn toggle
    const player2 = createPlayer('Player 2', 'O');

    let squares = document.querySelectorAll('.square-class');

    const button = document.querySelector('#restart');
    const message = document.querySelector('#message');

    const displayTurn = (player1Turn) => {
        return player1Turn ? message.textContent = 'X, your turn' : message.textContent = 'O, your turn';
    }

    const stopGame = () => {
        button.textContent = 'Play Again?';
        squares.forEach(square => {
            if (!square.textContent) {
                square.textContent = ' ';
                square.classList.remove('hover');
            }
        })
    }

    //check if board is filled
    const boardFilled = () => {
        if (board.indexOf('') === -1) {
            return true;
        } else {
            return false;
        }
    }

    //get array of marker indices
    const getIndices = (marker) => {
        let xoArray = [];
        for (let i = 0; i < board.length; i++) {
            if (board[i] === marker) {
                xoArray.push(i);
            }
        }
        return xoArray;
    }


    //compare winning combos to marker indices
    const check4Winner = () => {
        let xArray = getIndices(player1.marker);
        let oArray = getIndices(player2.marker);
        let winnerExists = false;

        for (let i = 0; i < winningCombos.length; i++) {
            if (winningCombos[i].every(index => { return xArray.indexOf(index) !== -1; })) {
                stopGame();
                message.textContent = player1.marker + ' wins';
                winnerExists = true;
                break;
            } else if (winningCombos[i].every(index => { return oArray.indexOf(index) !== -1; })) {
                message.textContent = player2.marker + ' wins';
                stopGame();
                winnerExists = true;
                break;
            }
        }

        if (boardFilled() && !winnerExists) {
            message.textContent = 'cat\'s game';
            console.log(board);
            stopGame();
        }
    }

    //game flow and interaction
    squares.forEach(square => {
        square.addEventListener('click', () => {
            if (!square.textContent) {
                if (player1Turn) {
                    square.textContent = player1.marker;
                    player1Turn = false;
                } else {
                    square.textContent = player2.marker;
                    player1Turn = true;
                }
                board[+(square.dataset.index)] = square.textContent;
                console.log(board);
                square.classList.remove('hover');
                displayTurn(player1Turn);
                check4Winner();
            }
        })
    })

    button.addEventListener('click', () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = '';
        }

        squares.forEach(square => {
            square.textContent = '';
            square.classList.add('hover');
        })

        player1Turn = true;
        message.textContent = 'X goes first';
        button.textContent = 'Restart';
    })
})();

