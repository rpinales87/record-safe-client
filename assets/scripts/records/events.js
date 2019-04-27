const api = require('./api')
const ui = require('./ui')

const onGetRecords = event => {
  event.preventDefault()
  api.getRecords()
    .then(ui.getRecordsSuccess)
    .catch(ui.failure)
}

const onDestroyRecord = event => {
  event.preventDefault()
  const recordId = $(event.target).data('id')
  console.log(recordId)
  api.destroyRecord(recordId)
    .then(() => onGetRecords(event))
    .cath(ui.failure)
}

const addHandlers = () => {
  $('#get-records').on('click', onGetRecords)
  $('#content').on('click', '.remove', onDestroyRecord)
}

module.exports = {
  addHandlers
}
