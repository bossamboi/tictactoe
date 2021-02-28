//player factory
const createPlayer = (name, marker) => {
    return {name, marker};
}


//game board object
const gameBoard = (() => {
    
    let board = [];
    for (let i = 0; i < 9; i++) {
        board.push('');
    }

    console.log(board);

    //populate board with squares 
    let squareContainer = document.querySelector('#square-container');

    for (let i = 0; i < board.length; i++) {
        let squareDiv = document.createElement('div');
        squareDiv.textContent = board[i];
        squareDiv.classList.add('square-class');
        squareDiv.classList.add('hover');
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
                square.classList.remove('hover');
            }

        })
    } )

    



})();


//game play object
const gamePlay = (() => {
    // const player1 = createPlayer('Eric', 'X');
    // const player2 = createPlayer('Angela', 'O');


})();