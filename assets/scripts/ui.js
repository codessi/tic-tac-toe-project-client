'use strict'
const store = require('./store')
// const store = require('./store')
const signUpSuccess = function (response) {
  $('#message').html('Sign Up of ' + response.user.email + ' is successful! ')
}
const signUpFail = function () {
  $('#message').html('Sign Up failed,  try again')
}

const signInSuccess = function (response) {
  $('#message').html('Sign In of ' + response.user.email + ' is successful! ')
  store.store.user = response.user
}

const signInFail = function () {
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
  $('#index-display').html(`<h1>${game}</h1>`)
  // {"games":[]}
}
const onGameIndexFail = function (response) {
  $('#index-display').html('Display Failed')
  // {"games":[]}
}

const onGameCreateSuccess = function (response) {
  // const game = response.games
  store.store2 = response
  const game = store.store2.game
  console.log(store.store2)
  console.log(store.store2.game._id)
  console.log(store.store)
  console.log(store.store.user.token)
  $('#index-display').html(`<h1>show something ${game}</h1>`)
  // {"games":[]}
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
  onGameCreateSuccess
}
