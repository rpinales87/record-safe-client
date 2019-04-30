'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
//  console.log('sign up success ran with the data: ', data)
  $('.message').text('Sign up success, please sign in.')
  $('form').trigger('reset')
  $('')
}

const signUpFailure = function (data) {
//  console.log('sign up failure ran with the data: ', data)
  $('.message').text('Sign up failed, please try again.')
  $('form').trigger('reset')
}

// events handlers for successfull sign in
const signInSuccess = function (data) {
//  console.log('sign in success ran with the data: ', data)
  store.user = data.user
  $('.sView').show()
  $('.lView').hide()
  $('.message').text('Sign in success.')
  $('form').trigger('reset')
}

const signInFailure = function (data) {
//  console.log('sign in failure ran with the data: ', data)
  $('.message').text('Something went wrong, please try again.')
  $('form').trigger('reset')
}

const changePasswordSuccess = function (data) {
//  console.log('change password success ran with the data: ', data)
  $('.message').text('Password successfuly updated.')
  $('form').trigger('reset')
  // store.user = data.user
}

const changePasswordFailure = function (data) {
//  console.log('change password failure ran with the data: ', data)
  $('.message').text('Something went wrong, please try again.')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
//  console.log('Sign out successfull!')
  $('.sView').hide()
  $('.lView').show()
  $('.content').empty()
  $('.message').empty()
  $('form').trigger('reset')
  store.user = null
}

const signOutFailure = function () {
//  console.log('Sign out failed!')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
