const recordsTemplate = require('../templates/records.handlebars')
const store = require('../store')
// const events = require('./events')

const createRecordSuccess = response => {
  // console.log('create record Success is: ', response)
  $('form').trigger('reset')
  $('.message').text('Record created.')
}

const updateRecordSuccess = response => {
  // console.log('update record Success is: ', response)
  $('.update-message').text('Record updated.')
  // $('form').trigger('reset')
}

const getRecordsSuccess = response => {
  console.log('get records is: ', response)
  if (response.records.length === 0) {
    $('.message').text('You don\'t have any record.')
  } else {
    store.records = response.records
    const showRecordsHtml = recordsTemplate({ records: response.records })
    $('.content').html(showRecordsHtml)
    $('.message').empty()
  }
}

const failure = error => {
  console.error(error)
}

module.exports = {
  failure,
  createRecordSuccess,
  updateRecordSuccess,
  // destroyRecordSuccess,
  getRecordsSuccess
}
