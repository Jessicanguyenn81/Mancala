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
  
//   boardEl.addEventListener('click', handleBoardClick)

  /*----- functions -----*/
  init() 

  function init() {
    turn = 1;
    board = [4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0];
    winner = 0
    boardEl.addEventListener('click', handleBoardClick)
    render(winner);
}

function handleResetClick(){
    init()
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
    winner = checkWin()
    render(winner);
} 


function render(winner) {
    if (winner === 0) {
        if (turn === 1) {
            messageDisplayEl.innerText = `${PLAYER_LOOKUP[1]}'s Turn `      
        } else {
            messageDisplayEl.innerText = `${PLAYER_LOOKUP[-1]}'s Turn ` 
        }
    } else if (winner === 2) {
        messageDisplayEl.innerText = "It's a Draw"
        boardEl.removeEventListener('click', handleBoardClick)
    } else {
        messageDisplayEl.innerText = `${PLAYER_LOOKUP[winner]} Wins! `      
        boardEl.removeEventListener('click', handleBoardClick)
    }
    board.forEach((bowl, idx) => {
        document.getElementById(idx).innerText = bowl
    })

}

function checkWin() {
    let player1Win = 0
    let player2Win = 0
    for (let i= 0; i <= 5; i++){
        if (board[i] === 0) {
            player1Win += 1
        } 
        if (board[i + 7] === 0) {
            player2Win += 1
        }
    }
    if (player1Win === 6) {
        if (board[6] > board[13]) {
             return 1;
        } else if (board[6] === board [13]) {
            return 2;
        }  else {
            return -1;
        }
    }

    if (player2Win === 6) {
        if (board[13] > board[6]) {
             return -1;
        } else if (board[6] === board [13]) {
            return 2;
        } else {
            return 1;
        }
    }

    return 0;
}



