'use strict'
const api = require('./api')
const getFormFields = require('./../../lib/get-form-fields')
const ui = require('./ui')
const app = require('./app')

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
  console.log(event.target)
  console.log(data)
  const foo = 2
  console.log(foo)
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
  console.log(api.gameIndex())
  api.gameIndex()
    .then(ui.onGameIndexSuccess)
    .catch(ui.onGameIndexFail)

}
// ---------------------
const onGameCreate = function (event) {
  event.preventDefault()
  console.log('onGameCreae is firing')
  app.arr = ['', '', '', '', '', '', '', '', '']
  
  console.log(api.gameCreate())
  api.gameCreate()
    .then(ui.onGameCreateSuccess)
    .catch(ui.onGameCreateFail)
}

const onGameDestory = function (event) {
  event.preventDefault()
  // console.log('onGameDestory is firing')
  api.gameDestory()
    .then(ui.onGameDestorySuccess)
    .catch(ui.onGameDestoryFail)
}

const onGameShow = function (event) {
  event.preventDefault()
  console.log('onGameShow is firing')
  api.gameShow()
    .then(ui.onGameShowSuccess)
    .catch(ui.onGameShowFail)
    
  
}
// ---------------------
const onGameUpdate = function (data) {
  // event.preventDefault()
  // console.log('onGameUpdate is firing')
  // const data = event.target
  
  console.log(data)
  api.gameUpdate(data)
    .then(ui.onGameUpdateSuccess)
    .catch(ui.onGameUpdateFail)
}
module.exports = {
  onSignUp,
  onSignIn,
  onPasswordChange,
  onSignOut,
  onGameIndex,
  onGameCreate,
  onGameDestory,
  onGameShow,
  onGameUpdate,
  
}
