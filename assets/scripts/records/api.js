const config = require('../config')
const store = require('../store')

const getRecords = (data) => {
  return $.ajax({
    url: config.apiUrl + '/records',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: ''
  })
}

module.exports = {
  getRecords
}
