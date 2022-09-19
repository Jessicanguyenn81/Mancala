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


  /*----- event listeners -----*/


  /*----- functions -----*/
function init() {
    board = [
    // 0 element of the first array is mancala goal
        [null, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, null]
    // element 6 is the mancala goal for player 2
    ]
    turn = 1
    winner = null
    render()
}