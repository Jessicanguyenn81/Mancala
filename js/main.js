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
    board = [4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0];
    winner = null;
    render();
}

function handleResetClick(){
    console.log('Reset Button clicked')
}

function handleBoardClick(evt) {
    console.log(evt.target)
}

function render() {
    messageDisplayEl.innerText = `${PLAYER_LOOKUP[turn].name}'s Turn `
    
}














// function dropMarbles(pod) {
//     let idx = pod.dataset.number;
//     let turn = pod.classList.contains('pod');
//     let marbles = board [idx];
//     board[idx]= 0; 
// }


