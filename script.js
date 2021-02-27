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
        squareDiv.classList.add('square-class');
        squareContainer.appendChild(squareDiv);
    }



})();






//game play object