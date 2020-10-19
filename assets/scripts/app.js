'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events')

$(() => {
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onPasswordChange)
  $('#sign-out-form').on('submit', events.onSignOut)
  $('#game-index').on('click', events.onGameIndex)
  $('#game-create').on('click', events.onGameCreate)
 
  $('#game-destory').on('click', events.onGameDestory)
  $('#game-show').on('click', events.onGameShow)
   // -------------
//   $('#game-update').on('click', events.onGameUpdate)
})

  
 /*  {"game":
  {"cells":["","","","","","","","",""],
  "over":false,"_id":"5f89fc05772a0a00170d786a","owner":"5f897fd3772a0a00170d7715","createdAt":"2020-10-16T20:01:09.682Z","updatedAt":"2020-10-16T20:01:09.682Z",
  "__v":0}}  */
const boardArr = ['', '', '', '', '', '', '', '', '']
let player = 'x'
let counter = 0
let over = false
let index 

$('.square-box').on('click', function (e) {
  if (player === 'x') {
    $(e.target).css('background-image', 'url(./../../public/x.png)')
    $(e.target).text('X')
    index = e.target.id
    boardArr[index]='x'
    // console.log(boardArr)
    player = 'o'
    updateGame(index,'x',over)

    // $(e.target).prop('disabled', true)
    // const index = Number($(e.target).attr('id'))
    // game[index] = 'X'
    } else {
    
    $(e.target).css('background-image', 'url(./../../public/o.png)')
    $(e.target).text('o')
    index = e.target.id
    boardArr[index] ='o'
    // console.log(boardArr)
    player = 'x'
    updateGame(index, 'o', over)
  }
})

const updateGame = function (index, value, over) {
  const data = {
    'game': {
      'cell': {
        'index': `${index}`,
        'value': `${value}`
      },
      'over': `${over}`
    }
  }
  events.onGameUpdate(data)
}
