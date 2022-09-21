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
//this shows which pod was clicked 
    console.log(evt.target.id)
    let bowlId = evt.target.id
    let afterTurn = lastMarblePosition(bowlId, board[bowlId])
    if(winner) return; 
    let currentIndex = bowlId
    let currentCount = board[bowlId]
    for (let i= 0; i < board[bowlId]; i++) {
        console.log(i)
        if (turn === 1) {
            //if player 1 is on index 13 they skip it and go to index 5
            if (currentIndex === 13) {
                currentIndex = 5
                currentCount--
            }
        }
        if (turn === -1) {
            //if player -1 is on index 6 they skip it and go to index 7
            if (currentIndex === 6) {
                currentIndex = 7
                currentCount--
            }
        }
        //this will subtract the marbles while increasing the board position
        if (currentIndex === 13) {
            board[currentIndex]++
            currentIndex = 0
            currentCount--
        } else {
            board[currentIndex]++
            currentCount--
            currentIndex++
        }
    }
    board[bowlId] = 0
    if (!afterTurn) {
        turn *= -1
    }
    render()
}







// function scoreBoard() {
//     document.querySelector(scoreboard1) = `Player 1: ${board[6]}`;
//     document.querySelector(scoreboard2)= `Player 2: ${board[13]}`;
// }




function lastMarblePosition(position, value){
    while (value !== 0) {
        value--
        position++
    }
    return position === 6 || position === 13
}











function render() {
    messageDisplayEl.innerText = `${PLAYER_LOOKUP[1]}'s Turn `
    // pseudocode update board state to show current value of each pod on board
    //pseudocode let marbles = the value inside each pod
    board.forEach((bowl, idx) => {
        document.getElementById(idx).innerText = bowl
    })
}
