'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events')

$(() => {
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-up-form').hide()
  $('#sign-up-link').on('click', function (e) {
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
    $('#change-password-link').hide()
    $('#sign-up-link').hide()
  })

  $('#sign-out-form').on('submit', events.onSignOut)
  $('#sign-out-form').hide()
  $('#game-index').on('click', events.onGameIndex) 
  $('#game-index').hide()

  $('#game-create').on('click', events.onGameCreate)
  // game cre   (  arr = ['','','','','','','','',''])
  $('#game-create').hide()
  $('#game-destory').on('click', events.onGameDestory)
  $('#game-destory').hide()
  $('#game-show').on('click', events.onGameShow)
  $('#game-show').hide()
  $('#board').hide()
  $('#display').hide()
  $('#number-display').hide()
})

$('.square-box').on('click', events.gameLogic)
