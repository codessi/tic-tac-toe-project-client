'use strict'
const api = require('./api')
const getFormFields = require('./../../lib/get-form-fields')
const ui = require('./ui')
const store = require('./store')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

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
    // .then(onGameCreate)
    .catch(ui.signInFail)
}

const onPasswordChange = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFail)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    // .then(() => location.reload())
    .catch(ui.signOutFail)
}

const onGameIndex = function (event) {
  event.preventDefault()

  api.gameIndex()
    .then(ui.onGameIndexSuccess)
    .catch(ui.onGameIndexFail)

}

const onGameCreate = function (event) {
  event.preventDefault()

  api.gameCreate()
    .then(ui.onGameCreateSuccess)
    .then(() => player = 'x')
    .then(onGameIndex)
    .catch(ui.onGameCreateFail)
}

const onGameDestory = function (event) {
  event.preventDefault()
  api.gameDestory()
    .then(ui.onGameDestorySuccess)
    .catch(ui.onGameDestoryFail)
}

const onGameShow = function (event) {
  event.preventDefault()
  api.gameShow()
    .then(ui.onGameShowSuccess)
    .catch(ui.onGameShowFail)

}

const onGameUpdate = function (data) {

  api.gameUpdate(data)
    .then(ui.onGameUpdateSuccess)
    .then(checkforwin)
    .catch(ui.onGameUpdateFail)
}

let player = 'x'
let index

function gameLogic (e) {
  index = e.target.id

  if (store.game.cells[index]==='' && player === 'x' && store.game.over === false) {
    $(e.target).css('background-image', "url('public/x.png')")
    updateGame(index, player, store.game.over)
    checkforwin()
    $('#index-display').html(`<h1> ${(player = player === 'x' ? 'o' : 'x').toUpperCase()}\'s turn </h1>`)
  } else if (store.game.cells[index] === '' && player === 'o' && store.game.over === false) {
    $(e.target).css('background-image', "url('public/o.png')")

    index = e.target.id

    updateGame(index, player, store.game.over)
    checkforwin()

    $('#index-display').html(`<h1> ${(player=player === 'x' ? 'o' : 'x').toUpperCase()}\'s turn </h1>`)
  }
}

const checkforwin = function () {
  if (store.game.cells[0] !== '' & store.game.cells[0] === store.game.cells[1] & store.game.cells[0] === store.game.cells[2]) {
    store.game.over = true
    $('#index-display').html(`<h1>Player <strong>${store.game.cells[index].toUpperCase()}</strong> won</h1>`)
  } else if (store.game.cells[3] !== '' & store.game.cells[3] === store.game.cells[4] & store.game.cells[3] === store.game.cells[5]) {
    store.game.over = true
    $('#index-display').html(`<h1>Player <strong>${store.game.cells[index].toUpperCase()}</strong> won</h1>`)
  } else if (store.game.cells[6] !== '' & store.game.cells[6] === store.game.cells[7] & store.game.cells[6] === store.game.cells[8]) {
    store.game.over = true
    $('#index-display').html(`<h1>Player <strong>${store.game.cells[index].toUpperCase()}</strong> won</h1>`)
  } else if (store.game.cells[0] !== '' & store.game.cells[0] === store.game.cells[3] & store.game.cells[0] === store.game.cells[6]) {
    store.game.over = true
    $('#index-display').html(`<h1>Player <strong>${store.game.cells[index].toUpperCase()}</strong> won</h1>`)
  } else if (store.game.cells[1] !== '' & store.game.cells[1] === store.game.cells[4] & store.game.cells[1] === store.game.cells[7]) {
    store.game.over = true
    $('#index-display').html(`<h1>Player <strong>${store.game.cells[index].toUpperCase()}</strong> won</h1>`)
  } else if (store.game.cells[2] !== '' & store.game.cells[2] === store.game.cells[5] & store.game.cells[2] === store.game.cells[8]) {
    store.game.over = true
    $('#index-display').html(`<h1>Player <strong>${store.game.cells[index].toUpperCase()}</strong> won</h1>`)
  } else if (store.game.cells[0] !== '' & store.game.cells[0] === store.game.cells[4] & store.game.cells[0] === store.game.cells[8]) {
    store.game.over = true
    $('#index-display').html(`<h1>Player <strong>${store.game.cells[index].toUpperCase()}</strong> won</h1>`)
  } else if (store.game.cells[2] !== '' & store.game.cells[2] === store.game.cells[4] & store.game.cells[2] === store.game.cells[6]) {
    store.game.over = true
    $('#index-display').html(`<h1>Player <strong>${store.game.cells[index].toUpperCase()}</strong> won</h1>`)
  }
  if (store.game.cells.indexOf('') === -1) {
    store.game.over = true
    $('#index-display').html('<h1><strong>It\'s Tie!!!</strong></h1>')
  }
}

const updateGame = function (index, value, over) {
  const data = {
    game: {
      cell: {
        index: index,
        value: value
      },
      over: over
    }
  }
  onGameUpdate(data)
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
  checkforwin,
  gameLogic
}
