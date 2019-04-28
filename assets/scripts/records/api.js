const config = require('../config')
const store = require('../store')

// const title = document.getElementById('new-title').value
// const artist = document.getElementById('new-artist').value
// const genre = document.getElementById('new-genre').value
// const year = document.getElementById('new-year').value

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

// const updateRecord = (title, artist, genre, year) => {
//   return $.ajax({
//     url: config.Url + '/records/' + store.record.id,
//     method: 'PATCH',
//     headers: {
//       'Authorization': 'Token token=' + store.user.token
//     },
//     data: {
//       'title': title,
//       'artist': artist,
//       'genre': genre,
//       'year': year
//     }
//   })
// }

module.exports = {
  createRecord,
  getRecords,
  destroyRecord
  // updateRecord
}
