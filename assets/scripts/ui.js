'use strict'
const events = require('./events')
const store = require('./store')
// const app=require('/app')

const signUpSuccess = function (response) {
  $('#message').html('Sign Up of ' + response.user.email + ' is successful! ')
  store.user = response.user
  // $('#game-create').show()
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
  
  // $('#number-display').show()
  // $('#board').show()
  console.log('signin response is '+ response)
  console.log(response.games)
  // $('#number-display').html(`Game No. ${store.game.length}`)  
  $('#sign-in-form').hide()
  
  $('#message').delay(1000).fadeOut('slow')
  // events.onGameCreate() //<<<<< witout this signs in fine.
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
  
  console.log(response)
  console.log(response.games)
  $('#number-display').html(`<h1> Number of play: ${game.length}</h1>`)
 
}
const onGameIndexFail = function (response) {
  $('#index-display').html('Display Failed')
 
}

const onGameCreateSuccess = function (response) {
  // let arr = store.game.cells
  store.game = response.game
  // const arr = store.game.cells
  const cells = response.game.cells
  // console.log(store.game)
  // console.log('this is cells' , cells)
  // console.log(app.arr)
  $('#board').show()
  $('.square-box').css("background-image","")
  $('#index-display').html(`<h1>Lets Play!</h1>`)
 
}

const onGameCreateFail = function (response) {
  $('#message').html('Sorry, Create Game Unsuccessful')
}
const onGameUpdateSuccess = function (response) {
  console.log('onGameUpdateSuccess')
  store.game = response.game
  console.log(store.game.cells)
  console.log(store.game)
  
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
