const recordsTemplate = require('../templates/records.handlebars')
const store = require('../store')

const getRecordsSuccess = response => {
  console.log('get records is: ', response)
  store.records = response.records
  // $('.content').text(store.records)
  const showRecordsHtml = recordsTemplate({ records: response.records })
  $('.content').html(showRecordsHtml)
}

const failure = error => {
  console.error(error)
}

module.exports = {
  failure,
  getRecordsSuccess
}
