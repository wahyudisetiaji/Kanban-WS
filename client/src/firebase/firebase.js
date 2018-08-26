import firebase from 'firebase'

var config = {
  apiKey: '< apiKey>',
  authDomain: '< authDomain >',
  databaseURL: '< databaseURL >',
  projectId: '< projectId >',
  storageBucket: '< storageBucket >',
  messagingSenderId: '< messagingSenderId >'
}

firebase.initializeApp(config)

var db = firebase.database()

export default db
