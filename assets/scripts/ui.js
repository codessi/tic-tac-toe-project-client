'use strict'
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
module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  changePasswordSuccess,
  changePasswordFail,
  signOutSuccess,
  signOutFail
}
