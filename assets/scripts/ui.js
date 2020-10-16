'use strict'

const signUpSuccess = function (response) {
  $('#message').html('Sign Up of ' + response.user.email + ' is successful! ')
}
const signUpFail = function () {
  $('#message').html('Sign Up failed,  try again')
}

const signInSuccess = function (response) {
  $('#message').html('Sign In of ' + response.user.email + ' is successful! ')
}
const signInFail = function () {
  $('#message').html('Sign In failed,  try again')
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail
}
