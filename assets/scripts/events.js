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

module.exports = {
  onSignUp,
  onSignIn,
  onPasswordChange
}
