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
    //returnIds is so when you click it doesn't affect anything besides the pods
    const returnIds = ['scoreboard1', '13', 'player-one', 'player-two', 'scoreboard2', '6']
    const startingIdx = evt.target.id
    if (returnIds.includes(startingIdx) || !board[startingIdx]) return 
    let numOfMoves = board[startingIdx]
    let currentIdx = Number(startingIdx) + 1
    board[startingIdx] = 0
    for (let i = 0; i < numOfMoves; i++) {
        //this allows player 1 to skip idx 13 mancala and player 2 to skip 
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
    checkWin()
    render()
   
}


function render() {
    if (turn === 1){
        messageDisplayEl.innerText = `${PLAYER_LOOKUP[1]}'s Turn `      
    } else {
        messageDisplayEl.innerText = `${PLAYER_LOOKUP[-1]}'s Turn ` 
    }
    board.forEach((bowl, idx) => {
        document.getElementById(idx).innerText = bowl
    })
}

function checkWin() {
    if (board[0] === 0 && board[1] === 0 && board[2] === 0 && board[3] === 0 && board[4] === 0 && board[5] === 0) {
        if (board[6] > board[13]) {
            return 1;
        } else {
            return -1;
        }
    } else if (board[7] === 0 && board[8] === 0 && board[9] === 0 && board[10] === 0 && board[11] === 0 && board[12] === 0) {
        if (board[6] > board[13]) {
            return 1;
        } else {
            return -1;
        }
    } else {
        return false;
    }
}

