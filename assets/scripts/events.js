'use strict'
const api = require('./api')
const getFormFields = require('./../../lib/get-form-fields')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  // console.log('onSignUp is firing')
  const form = event.target
  const data = getFormFields(form)

  // console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
}

const onPasswordChange = function (event) {
  event.preventDefault()
  console.log('onPasswordChange is firing ')
  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFail)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('onSignOut is firing')
  // const form = event.target
  // const data = getFormFields(form)

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail)
}

const onGameIndex = function (event) {
  event.preventDefault()
  // console.log('onGameIndex is firing')
  api.gameIndex()
    .then(ui.onGameIndexSuccess)
    .catch(ui.onGameIndexFail)
}

module.exports = {
  onSignUp,
  onSignIn,
  onPasswordChange,
  onSignOut,
  onGameIndex
}
