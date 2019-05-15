const recordsTemplate = require('../templates/records.handlebars')
const store = require('../store')
// const events = require('./events')
// const events = require('./events')

const createRecordSuccess = response => {
  // console.log('create record Success is: ', response)
  $('form').trigger('reset')
  $('.message').text("New record added to 'Your Records'.")
}

const updateRecordSuccess = response => {
  // console.log('update record Success is: ', response)
  $('.update-message').text('Record updated, please reload your records.')
  $('.update-backdrop').remove()
  // $('.modal').modal('hide')
  // $('#get-records').trigger('click')
//  $('#content').on('click', '.close-modal', () => events.onGetRecords())
}

const getRecordsSuccess = response => {
  // console.log('get records is: ', response)
  if (response.records.length === 0) {
    $('.message').text('You don\'t have any records.')
    store.records = response.records
    const showRecordsHtml = recordsTemplate({ records: response.records })
    $('.content').html(showRecordsHtml)
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
