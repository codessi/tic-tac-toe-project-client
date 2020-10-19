
const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
  // console.log('sign up is firing')
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}

const signOut = function (data) {
  console.log('signOut is firing ')
  return $.ajax({ 
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'DELETE',
    data
  })
}

const gameIndex = function () {
  // console.log('gameIndex is firing')
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET'
  })
}
// console.log(gameIndex())
// ----------------
const gameCreate = function (data) {
  // console.log('gameIndex is firing')
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'POST',
    data
  })
}
// ------------------------
const gameDestory = function (data) {
  // console.log('gameDestory is firing')
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'DELETE'
  })
}

const gameShow = function (data) {
  // console.log('gameIndex is firing')
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET'
  })
}
// -----------------  ----
const gameUpdate = function (data) {
  console.log('gameUpdate is firing')
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  gameIndex,
  gameCreate,
  gameDestory,
  gameShow,
  gameUpdate
}
 