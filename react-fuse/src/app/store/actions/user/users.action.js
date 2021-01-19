import { convertObjectToArray } from 'app/helpers'
import firebaseService from 'app/services/firebaseService'
import { showMessage } from 'app/store/actions/fuse'

export const GET_USERS = 'GET USERS'
export const GET_USER = 'GET USER'
export const SET_USERS_SEARCH_TEXT = 'SET USERS SEARCH TEXT'
export const REMOVE_USERS = 'REMOVE USERS'
export const SAVE_USER = 'SAVE USER'

export const getUsers = () => {
  const request = firebaseService.db.ref('users').once('value')

  return (dispatch) =>
    request.then((snapshot) => {
      const users = snapshot.val()

      return dispatch({
        type: GET_USERS,
        payload: convertObjectToArray(users),
      })
    })
}

export const getUser = (userId) => {
  const request = firebaseService.db.ref(`/users/${userId}`).once('value')

  return (dispatch) =>
    request.then((snapshot) => {
      const users = snapshot.val()

      return dispatch({
        type: GET_USER,
        payload: users,
      })
    })
}

export const removeUsers = (userIds) => {
  const batch = firebaseService.firestore.batch()

  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < userIds.length; index++) {
    const element = userIds[index]
    const ref = firebaseService.firestore.collection('users').doc(element)
    batch.delete(ref)
  }

  batch.commit()
  return {
    type: REMOVE_USERS,
  }
}

export const setUsersSearchText = (value) => ({
  type: SET_USERS_SEARCH_TEXT,
  searchText: value,
})

export const saveUser = (data) => {
  const userKey = firebaseService.db.ref().push().key
  const request = firebaseService.db.ref(`users/${userKey}`).set({
    ...data,
    from: 'firebase',
    role: ['guess'],
    uid: userKey,
  })

  return (dispatch) =>
    request.then(() => {
      dispatch(showMessage({ message: 'User Saved' }))

      return dispatch({
        type: SAVE_USER,
      })
    })
}
