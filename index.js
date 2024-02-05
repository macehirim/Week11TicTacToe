const allSquares = Array.from($(".square"));
console.log(allSquares)

let board = ['', '', '', '', '', '', '', '', '']

let currentPlayer = 'X';

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


function takeSquare(id) {
    document.getElementById(id).innerHTML = currentPlayer
    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    }
    let squareID = document.addEventListener('click', e => {
        console.log(e.target.id )}, false);
  }

function checkWinner () {
    for (let i = 0; i < winCombos.length; i++) {
        let combo = winCombos[i];
        let comboA = board[combo[0]];
        let comboB = board[combo[1]]
        let comboC = board[combo[2]]
    }
}

function resetGame() {
  for (let i=0; i <= 9; i++) {
    document.getElementById(i).innerHTML = ''
  }
}