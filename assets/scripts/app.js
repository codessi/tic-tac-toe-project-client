'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events')

$(() => {
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-up-form').hide()
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onPasswordChange)
  $('#change-password-form').hide()
  $('#sign-out-form').on('submit', events.onSignOut)
  $('#sign-out-form').hide()
  $('#game-index').on('click', events.onGameIndex)
  $('#game-index').hide()
  $('#game-create').on('click', events.onGameCreate)
  // $('#game-create').hide()
 
  $('#game-destory').on('click', events.onGameDestory)
  $('#game-destory').hide()
  $('#game-show').on('click', events.onGameShow)
  $('#game-show').hide()
   // -------------
//   $('#game-update').on('click', events.onGameUpdate)
})

const arr = ['', '', '', '', '', '', '', '', '']
let player = 'x'
let counter = 0
let over = false
let index

$('.square-box').on('click', function (e) {
  if (player === 'x' & over === false) {
    $(e.target).css('background-image', 'url(./../../public/x.png)')
    $(e.target).text('X')
    index = e.target.id
    arr[index] = 'x'
    console.log(index)
    player = 'o'
    
    updateGame(index, 'x', over)

    // $(e.target).prop('disabled', true)
    // const index = Number($(e.target).attr('id'))
    // game[index] = 'X'
    } else { if (over === false) {
    
    $(e.target).css('background-image', 'url(./../../public/o.png)')
    $(e.target).text('o')
    
    index = e.target.id
    arr[index] ='o'
    // console.log(arr)
    player = 'x'
    updateGame(index, 'o', over)
    }
  }
  $(e.target).off('click')
  checkforwin()
  console.log(over)
  
  
})

const checkforwin = function () {
  

  if (arr[0] !== "" & arr[0] === arr[1] & arr[0] === arr[2]) {
    over = true
    $('#display').text('player ' + player + ' won')
  }

  else if (arr[3] !== "" & arr[3] === arr[4] & arr[3] === arr[5]) {
    over = true
    $('#display').text('player ' + player + ' won')
  }

  else if (arr[6] !== "" & arr[6] === arr[7] & arr[6] === arr[8]) {
    over = true
    $('#display').text('player ' + player + ' won')
  }
  else if (arr[0] !== "" & arr[0] === arr[3] & arr[0] === arr[6]) {
    over = true
    $('#display').text('player ' + player + ' won')
  }
  else if (arr[1] !== "" & arr[1] === arr[4] & arr[1] === arr[7]) {
    over = true
    $('#display').text('player ' + player + ' won')
  }
  else if (arr[2] !== "" & arr[2] === arr[5] & arr[2] === arr[8]) {
    over = true
    $('#display').text('player ' + player + ' won')
  }
  else if (arr[0] !== "" & arr[0] === arr[4] & arr[0] === arr[8]) {
    over = true
    $('#display').text('player ' + player + ' won')
  }
  else if (arr[2] !== "" & arr[2] === arr[4] & arr[2] === arr[6]) {
    over = true
    $('#display').text('player ' + player + ' won')
  } 
  if (arr.indexOf("") === -1) {
    $('#display').text('It\'s a tie!')
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

module.exports =
{
  arr
}
