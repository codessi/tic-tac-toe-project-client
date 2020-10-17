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
  $('#game-update').on('submit', events.onGameUpdate)
})

  
 /*  {"game":
  {"cells":["","","","","","","","",""],
  "over":false,"_id":"5f89fc05772a0a00170d786a","owner":"5f897fd3772a0a00170d7715","createdAt":"2020-10-16T20:01:09.682Z","updatedAt":"2020-10-16T20:01:09.682Z",
  "__v":0}}  */

