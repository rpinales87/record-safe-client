const api = require('./api')
const ui = require('./ui')
// const store = require('../store')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onCreateRecord = event => {
  // console.log('event is: ', event)
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log('create record data is: ', data)
  api.createRecord(data)
    .then(ui.createRecordSuccess)
    //  store.record = response.record
    .catch(ui.faliure)
}

const onGetRecords = event => {
  console.log('get records is: ', event)
  event.preventDefault()
  api.getRecords()
    .then(ui.getRecordsSuccess)
    .catch(ui.failure)
}

const onUpdateRecord = event => {
  // console.log('event is: ', event)
  event.preventDefault()
  const data = getFormFields(event.target)
  const recordId = $(event.target).data('id')
  // console.log('update record data is: ', data)
  api.updateRecord(data, recordId)
    .then(ui.updateRecordSuccess)
    // .then(() => onGetRecords(event))
    //  store.record = response.record
    .catch(ui.faliure)
}

const onDestroyRecord = event => {
  event.preventDefault()
  const recordId = $(event.target).data('id')
  // console.log(recordId)
  api.destroyRecord(recordId)
    .then(() => onGetRecords(event))
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#get-records').on('click', onGetRecords)
  $('#content').on('click', '.remove', onDestroyRecord)
  $('#content').on('submit', '.update-record', onUpdateRecord)

  $('#add-record').on('submit', onCreateRecord)
  $('#add-record').submit(function (e) {
    e.preventDefault()
    $('#addRecordModal').modal('toggle')
    return false
  })
}

module.exports = {
  addHandlers,
  onCreateRecord,
  onUpdateRecord
}
