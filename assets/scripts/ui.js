'use strict'

const store = require('./store')


const signUpSuccess = function (response) {
  $('#message').html('Sign Up of ' + response.user.email + ' is successful! ')
  store.user = response.user
  $('#sign-up-form').hide()
  $('#sign-in-form').show()

  $('#message').delay(1000).fadeOut('slow')
}
const signUpFail = function () {
  $('#message').html('Sign Up failed,  try again')
  $('#sign-up-form')[0].reset()
}

const signInSuccess = function (response) {
  $('#message').html('Sign In of ' + response.user.email + ' is successful! ')
  store.user = response.user
  $('#sign-out-form').show()
  $('#game-create').show()
  $('#sign-in-form').hide()
  $('#message').delay(1000).fadeOut('slow')
}

const signInFail = function (response) {
  $('#message').html('Sign In failed,  try again')
}

const changePasswordSuccess = function (response) {
  $('#message').show()
  $('#message').html('Password Change Success')
  $('#message').delay(5000).fadeOut('slow')
  $('#sign-in-form').hide()
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  
}

const changePasswordFail = function (response) {
  $('#message').show()
  $('#message').html('Password Change failed,  try again')
}

const signOutSuccess = function () {
  $('#message').html('Sign Out Successful,  Good Bye!')
  $('#message').show()
  $('#sign-in-form').show()
  $('#board').hide()
  $('#sign-out-form').hide()
  $('#index-display').hide()
  $('#game-create').hide()
}

const signOutFail = function (response) {
  $('#message').html('Signed Out')
  $('#message').show()
  $('#sign-in-form').show()
  $('#sign-out-form').hide()
 
}

const onGameIndexSuccess = function (response) {
  const game = response.games

  $('#index-display').html(`<h1> GAME #: ${game.length}</h1>`)
 
}
const onGameIndexFail = function (response) {
  $('#index-display').html('Display Failed')
 
}

const onGameCreateSuccess = function (response) {

  
  store.game = response.game
  const cells = response.game.cells

  $('#board').show()
  $('.square-box').css("background-image","")
  $('#game-index').show()
 
}

const onGameCreateFail = function (response) {
  $('#message').html('Sorry, Create Game Unsuccessful')
}
const onGameUpdateSuccess = function (response) {

  store.game = response.game
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
