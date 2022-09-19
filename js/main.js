 /*----- constants -----*/
const PLAYER_LOOKUP = {
    '1': {
        name: 'Player 1'
    },
    '-1': {
        name: 'Player 2'
    }
}

  /*----- state variables -----*/
let turn, board, winner

  /*----- cached elements  -----*/
const messageDisplayEl = document.querySelector('h2')
const resetBtnEl = document.querySelector('button')
const boardEl = document.getElementById('both-players')
  /*----- event listeners -----*/
  resetBtnEl.addEventListener('click', handleResetClick)
  
  boardEl.addEventListener('click', handleBoardClick)

  /*----- functions -----*/
function init() {
    turn = 1;
    board = [
    // 0 element of the first array is mancala goal
        [null, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, null]
    // element 6 is the mancala goal for player 2
    ];
    winner = null;
    render();
}

function handleResetClick(){
    console.log('Reset Button clicked')
}

function handleBoardClick(evt) {
    console.log(evt.target)
}

