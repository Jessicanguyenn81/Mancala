 /*----- constants -----*/
const PLAYER_LOOKUP = {
    '1' : 'Player 1',
    '-1' : 'Player 2'
}

  /*----- state variables -----*/
let turn, board, winner

  /*----- cached elements  -----*/
const messageDisplayEl = document.querySelector('h2')
const resetBtnEl = document.querySelector('button')
const boardEl = document.getElementById('board')
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
//this shows which pod was clicked 
    console.log(evt.target.id)
    let bowlId = evt.target.id
    if(winner) return; 
    let currentIndex = bowlId
    let currrentCount = board[bowlId]
    
}



function render() {
    messageDisplayEl.innerText = `${PLAYER_LOOKUP[1]}'s Turn `
    // pseudocode update board state to show current value of each pod on board
    //pseudocode let marbles = the value inside each pod
    board.forEach((bowl, idx) => {
        if(bowl){
            
        } else {

        }
    })
}
