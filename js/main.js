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
  init()

  function init() {
    turn = 1;
    board = [4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0];
    winner = null
    render()
}

function handleResetClick(){
    console.log('Reset Button clicked')
}


function handleBoardClick(evt) {
    const returnIds = ['scoreboard1', '13', 'player-one', 'player-two', 'scoreboard2', '6']
    const startingIdx = evt.target.id
    if (returnIds.includes(startingIdx) || !board[startingIdx]) return 
    let numOfMoves = board[startingIdx]
    let currentIdx = Number(startingIdx) + 1
    board[startingIdx] = 0
    for (let i = 0; i < numOfMoves; i++) {
        const skip = (turn === 1 && currentIdx === 13) || (turn === -1 && currentIdx === 6)
        if (skip) {
            i -= 1
        } else {
            board[currentIdx] += 1
        }
        if (currentIdx + 1 === board.length){
                currentIdx = 0
        } else {
                currentIdx++ 
            }
    } 
    turn *= -1
    render()
   
}



function render() {
    messageDisplayEl.innerText = `${PLAYER_LOOKUP[1]}'s Turn `
    // pseudocode update board state to show current value of each pod on board
    //pseudocode let marbles = the value inside each pod
    board.forEach((bowl, idx) => {
        document.getElementById(idx).innerText = bowl
    })
}
