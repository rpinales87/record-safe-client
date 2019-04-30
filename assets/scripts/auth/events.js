'use strict'
const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  // console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// event handlers
const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-up').submit(function (e) {
    e.preventDefault()
    $('#signUpModal').modal('toggle')
    return false
  })

  $('#sign-in').on('submit', onSignIn)
  $('#sign-in').submit(function (e) {
    e.preventDefault()
    $('#signInModal').modal('toggle')
    return false
  })

  $('#change-password').on('submit', onChangePassword)
  $('#change-password').submit(function (e) {
    e.preventDefault()
    $('#changePasswordModal').modal('toggle')
    return false
  })

  $('#sign-out').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
