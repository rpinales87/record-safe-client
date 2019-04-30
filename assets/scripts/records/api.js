const config = require('../config')
const store = require('../store')

const createRecord = (data) => {
  return $.ajax({
    url: config.apiUrl + '/records',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: {
      'record': {
        'title': data.title,
        'artist': data.artist,
        'genre': data.genre,
        'year': data.year
      }
    }
  })
}

const updateRecord = (data, recordId) => {
  return $.ajax({
    url: config.apiUrl + `/records/${recordId}`,
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: {
      'record': {
        'title': data.title,
        'artist': data.artist,
        'genre': data.genre,
        'year': data.year
      }
    }
  })
}

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
  createRecord,
  updateRecord,
  getRecords,
  destroyRecord
  // updateRecord
}
