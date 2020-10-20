'use strict'
const events = require('./events')
const store = require('./store')

const signUpSuccess = function (response) {
  $('#message').html('Sign Up of ' + response.user.email + ' is successful! ')
}
const signUpFail = function () {
  $('#message').html('Sign Up failed,  try again')
}

const signInSuccess = function (response) {
  $('#message').html('Sign In of ' + response.user.email + ' is successful! ')
  store.user = response.user
  $('#board').show()
  $('#sign-in-form').hide()
  
  $('#message').delay(1000).fadeOut('slow')
  // events.onGameCreate() //<<<<< witout this signs in fine.
}


const signInFail = function (response) {
  $('#message').html('Sign In failed,  try again')
}

const changePasswordSuccess = function (response) {
  $('#message').html('Password Change Success, Let\'s play')
}

const changePasswordFail = function (response) {
  $('#message').html('Password Change failed,  try again')
}

const signOutSuccess = function () {
  $('#message').html('Sign Out Successfu,  Good Bye!')
}

const signOutFail = function (response) {
  $('#message').html('Sign Out Fail')
}

const onGameIndexSuccess = function (response) {
  const game = response.games
  console.log(response)
  console.log(response.games)
  $('#index-display').html(`<h1> Number of play: ${game.length}</h1>`)
 
}
const onGameIndexFail = function (response) {
  $('#index-display').html('Display Failed')
 
}

const onGameCreateSuccess = function (response) {
  // const game = response.games
  $('#board').show()
  $('.square-box').css("background-image","")
  store.game = response.game
  app.arr = ['', '', '', '', '', '', '', '', '']
  $('#square-box').on('click')
  // $('#index-display').html(`<h1>New Game ${store.game.cells}</h1>`)
 
}

const onGameCreateFail = function (response) {
  $('#message').html('Sorry, Create Game Unsuccessful')
}
const onGameUpdateSuccess = function (response) {
  console.log('onGameUpdateSuccess')
  store.game = response.game
  console.log(store.game)
  $('#index-display').html(`<h1>New Game ${store.game.cells}</h1>`)
  
}


module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  changePasswordSuccess,
  changePasswordFail,
  signOutSuccess,
  signOutFail,
  onGameIndexSuccess,
  onGameIndexFail,
  onGameCreateSuccess,
  onGameCreateFail,
  onGameUpdateSuccess
}
