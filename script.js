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

    //does player creation go here?
    const player1 = createPlayer('Player 1', 'X');
    let player1Turn = true;
    const player2 = createPlayer('Player 2', 'O');

    let squares = document.querySelectorAll('.square-class');

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
                check4Winner();
            }



        })
    })


    const boardFilled = () => {
        if (board.indexOf('') === -1) {
            return true;
        } else {
            return false;
        }
    }

    const check4Winner = () => {
        let xArray = getIndices(player1.marker);
        let oArray = getIndices(player2.marker);

        for (let i = 0; i < winningCombos.length; i++) {
            if (winningCombos[i].every(index => { return xArray.indexOf(index) !== -1; })) {
                console.log(player1.name + ' wins');
                break;
            } else if (winningCombos[i].every(index => { return oArray.indexOf(index) !== -1; })) {
                console.log(player2.name + ' wins');
                break;
            } else if (boardFilled()) {
                console.log('cat\'s game');
                break;
            }
        }
    }

    const getIndices = (marker) => {
        let xoArray = [];
        for (let i = 0; i < board.length; i++) {
            if (board[i] === marker) {
                xoArray.push(i);
            }
        }
        return xoArray;
    }



})();


//game play object
const gamePlay = (() => {
    // const player1 = createPlayer('Eric', 'X');
    // const player2 = createPlayer('Angela', 'O');


})();