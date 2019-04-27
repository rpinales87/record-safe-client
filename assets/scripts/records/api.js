const config = require('../config')
const store = require('../store')

const getRecords = data => {
  return $.ajax({
    url: config.apiUrl + '/records',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: ''
  })
}

const destroyRecord = recordId => {
  return $.ajax({
    url: config.apiUrl + `/records/${recordId}`,
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getRecords,
  destroyRecord
}
