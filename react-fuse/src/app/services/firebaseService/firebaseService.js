import { COLLECTIONS } from 'app/helpers'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'
import config from './firebaseServiceConfig'

class FirebaseService {
  init(success) {
    if (Object.entries(config).length === 0 && config.constructor === Object) {
      if (process.env.NODE_ENV === 'development') {
        // Missing Firebase Configuration at src/app/services/firebaseService/firebaseServiceConfig.js
      }
      success(false)
      return
    }

    if (firebase.apps.length) {
      return
    }
    firebase.initializeApp(config)
    this.db = firebase.database()
    this.auth = firebase.auth()
    this.firestore = firebase.firestore()
    this.storage = firebase.storage()

    // eslint-disable-next-line no-restricted-globals
    // if (window.location.hostname === 'localhost') {
    //   firebase.firestore().settings({
    //     host: 'localhost:4000',
    //     ssl: false,
    //   })
    //   // firebase.database().useEmulator('localhost', 9000)
    //   // this.auth.useEmulator('http://localhost:9099/', { disableWarnings: true })
    // }
    success(true)
  }

  getUserData = (userId) => {
    if (!firebase.apps.length) {
      return false
    }
    return new Promise((resolve, reject) => {
      this.db
        .ref(`${COLLECTIONS.USERS}/${userId}`)
        .once('value')
        .then((snapshot) => {
          const user = snapshot.val()
          resolve(user)
        })
    })
  }

  updateUserData = (user) => {
    if (!firebase.apps.length) {
      return false
    }
    return this.db.ref(`${COLLECTIONS.USERS}/${user.uid}`).set(user)
  }

  onAuthStateChanged = (callback) => {
    if (!this.auth) {
      return
    }
    this.auth.onAuthStateChanged(callback)
  }

  signOut = () => {
    if (!this.auth) {
      return
    }
    this.auth.signOut()
  }
}

const instance = new FirebaseService()

export default instance
