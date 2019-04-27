const api = require('./api')
const ui = require('./ui')

const onGetRecords = event => {
  event.preventDefault()
  api.getRecords()
    .then(ui.getRecordsSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#get-records').on('click', onGetRecords)
}

module.exports = {
  addHandlers
}
