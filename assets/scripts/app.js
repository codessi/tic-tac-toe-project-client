'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events')

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
  $('#sign-in-form').hide()
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
    // $(e.target).text('X')
    index = e.target.id
    arr[index] = 'x'
    console.log(index)
    
    checkforwin()
    updateGame(index, 'x', over)
    player = 'o'
    $(e.target).off('click')

    // $(e.target).prop('disabled', true)
    // const index = Number($(e.target).attr('id'))
    // game[index] = 'X'
    } else if (over === false) {
    
    $(e.target).css('background-image', 'url(./../../public/o.png)')
    // $(e.target).text('o')
    
    index = e.target.id
    arr[index] = 'o'
    // console.log(arr)
    
    checkforwin()
    updateGame(index, 'o', over)
    player = 'x'
    $(e.target).off('click')
    }
  }
   
 
  

  
  
)

const checkforwin = function () {

  if (arr[0] !== "" & arr[0] === arr[1] & arr[0] === arr[2]) {
    over = true
    $('#index-display').html(`<h1>Player <strong>"${player}"</strong> won</h1>`)
  } else if (arr[3] !== "" & arr[3] === arr[4] & arr[3] === arr[5]) {
    over = true
    $('#index-display').html(`<h1>Player <strong>"${player}"</strong> won</h1>`)
  } else if (arr[6] !== "" & arr[6] === arr[7] & arr[6] === arr[8]) {
    over = true
    $('#index-display').html(`<h1>Player <strong>"${player}"</strong> won</h1>`)
  } else if (arr[0] !== "" & arr[0] === arr[3] & arr[0] === arr[6]) {
    over = true
    $('#index-display').html(`<h1>Player <strong>"${player}"</strong> won</h1>`)
  } else if (arr[1] !== "" & arr[1] === arr[4] & arr[1] === arr[7]) {
    over = true
    $('#index-display').html(`<h1>Player <strong>"${player}"</strong> won</h1>`)
  } else if (arr[2] !== "" & arr[2] === arr[5] & arr[2] === arr[8]) {
    over = true
    $('#index-display').html(`<h1>Player <strong>"${player}"</strong> won</h1>`)
  } else if (arr[0] !== "" & arr[0] === arr[4] & arr[0] === arr[8]) {
    over = true
    $('#index-display').html(`<h1>Player <strong>"${player}"</strong> won</h1>`)
  } else if (arr[2] !== "" & arr[2] === arr[4] & arr[2] === arr[6]) {
    over = true
    $('#index-display').html(`<h1>Player <strong>"${player}"</strong> won</h1>`)
  } 
  if (arr.indexOf("") === -1) {
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

module.exports =
{
  arr
}
