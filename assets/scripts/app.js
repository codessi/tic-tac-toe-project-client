'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events')
const ui = require('./ui')
const store = require('./store')

$(() => {
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-up-form').hide()
  $('#sign-up-link').on('click', function(e){
    e.preventDefault()
    $('#sign-up-form').show()
    $('#sign-in-form').hide()
  })
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onPasswordChange)
  $('#change-password-form').hide()
  $('#change-password-link').on('click', function (e) {
    e.preventDefault()
  $('#change-password-form').show()

  })

  $('#sign-out-form').on('submit', events.onSignOut)
  $('#sign-out-form').hide()
  $('#game-index').on('click', events.onGameIndex) 
  $('#game-index').hide()


  $('#game-create').on('click', events.onGameCreate)
  $('#game-create').hide()
 
  $('#game-destory').on('click', events.onGameDestory)
  $('#game-destory').hide()
  $('#game-show').on('click', events.onGameShow)
  $('#game-show').hide()
  $('#board').hide()
  $('#display').hide()
  $('#number-display').hide()

})

// let arr = ['','','','','','','','','']
// let arr = store.game
let player = 'x'
let counter = 0
// let over = false
let index
// console.log(arr)
$('.square-box').on('click', function (e) {
  index = e.target.id
  console.log(index)
  
  if (store.game.cells[index]==='' && player === 'x' && store.game.over === false) {
    updateGame(index, 'x', store.game.over)
    $(e.target).css('background-image', 'url(./../../public/x.png)')
    console.log(index)
    console.log(store.game.cells)
    player = 'o'
    checkforwin()
    


    } else if (store.game.cells[index]==='' && player === 'o' && store.game.over === false) {
    
    $(e.target).css('background-image', 'url(./../../public/o.png)')

    index = e.target.id
    // arr[index] = 'o'

    updateGame(index, 'o', store.game.over)
    player = 'x'
    checkforwin()
    // $(e.target).off('click')
 
    }
    console.log(store.game.cells)
  }
)

const checkforwin = function () {
  if (store.game.cells[0] !== "" & store.game.cells[0] === store.game.cells[1] & store.game.cells[0] === store.game.cells[2]) {
    store.game.over = true
    $('#index-display').html(`<h1>Player <strong>"${player}"</strong> won</h1>`)
    // arr= ['', '', '', '', '', '', '', '', '']
  } else if (store.game.cells[3] !== "" & store.game.cells[3] === store.game.cells[4] & store.game.cells[3] === store.game.cells[5]) {
    store.game.over = true
    $('#index-display').html(`<h1>Player <strong>"${player}"</strong> won</h1>`)
  } else if (store.game.cells[6] !== "" & store.game.cells[6] === store.game.cells[7] & store.game.cells[6] === store.game.cells[8]) {
    store.game.over = true
    $('#index-display').html(`<h1>Player <strong>"${player}"</strong> won</h1>`)
  } else if (store.game.cells[0] !== "" & store.game.cells[0] === store.game.cells[3] & store.game.cells[0] === store.game.cells[6]) {
    store.game.over = true
    $('#index-display').html(`<h1>Player <strong>"${player}"</strong> won</h1>`)
  } else if (store.game.cells[1] !== "" & store.game.cells[1] === store.game.cells[4] & store.game.cells[1] === store.game.cells[7]) {
    store.game.over = true
    $('#index-display').html(`<h1>Player <strong>"${player}"</strong> won</h1>`)
  } else if (store.game.cells[2] !== "" & store.game.cells[2] === store.game.cells[5] & store.game.cells[2] === store.game.cells[8]) {
    store.game.over = true
    $('#index-display').html(`<h1>Player <strong>"${player}"</strong> won</h1>`)
  } else if (store.game.cells[0] !== "" & store.game.cells[0] === store.game.cells[4] & store.game.cells[0] === store.game.cells[8]) {
    store.game.over = true
    $('#index-display').html(`<h1>Player <strong>"${player}"</strong> won</h1>`)
  } else if (store.game.cells[2] !== "" & store.game.cells[2] === store.game.cells[4] & store.game.cells[2] === store.game.cells[6]) {
    store.game.over = true
    $('#index-display').html(`<h1>Player <strong>"${player}"</strong> won</h1>`)
  }
  if (store.game.cells.indexOf("") === -1) {
    store.game.over = true
    $('#index-display').html(`<h1><strong>It\'s Tie!!!</strong></h1>`)
  }
}
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

// module.exports =
// {
//   arr
// }
