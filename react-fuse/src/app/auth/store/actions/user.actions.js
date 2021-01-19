import history from '@history'
import _ from '@lodash'
import firebaseService from 'app/services/firebaseService'
import * as MessageActions from 'app/store/actions/fuse/message.actions'
import * as FuseActions from 'app/store/actions/fuse'
import firebase from 'firebase/app'
import { ROUTES } from 'app/constants'

export const SET_USER_DATA = 'SET DATA'
export const REMOVE_USER_DATA = 'REMOVE DATA'
export const USER_LOGGED_OUT = 'LOGGED OUT'

/**
 * Set user data from Firebase data
 */
export const setUserDataFirebase = (user, authUser) => {
  if (
    user &&
    user.data &&
    user.data.settings &&
    user.data.settings.theme &&
    user.data.settings.layout &&
    user.data.settings.layout.style
  ) {
    // Set user data but do not update
    return setUserData(user)
  }

  // Create missing user settings
  return createUserSettingsFirebase(authUser)
}

/**
 * Create User Settings with Firebase data
 */
export const createUserSettingsFirebase = (authUser) => (
  dispatch,
  getState
) => {
  const guestUser = getState().auth.user
  const { currentUser } = firebase.auth()

  /**
   * Merge with current Settings
   */
  const user = _.merge({}, guestUser, {
    uid: authUser.uid,
    from: 'firebase',
    role: ['admin'],
    data: {
      displayName: authUser.displayName,
      email: authUser.email,
    },
  })
  currentUser.updateProfile(user.data)

  updateUserData(user, dispatch)
  return dispatch(setUserData(user))
}

/**
 * Set User Data
 */
export const setUserData = (user) => (dispatch) => {
  dispatch({
    type: SET_USER_DATA,
    payload: user,
  })
}

export const updateUserInfo = (data) => (dispatch, getState) => {
  const oldUser = getState().auth.user
  const user = { ...oldUser, ...data }

  updateUserData(user, dispatch)

  return dispatch(setUserData(user))
}

/**
 * Update User Settings
 */
export const updateUserSettings = (settings) => (dispatch, getState) => {
  const oldUser = getState().auth.user
  const user = _.merge({}, oldUser, { data: { settings } })

  updateUserData(user, dispatch)

  return dispatch(setUserData(user))
}

/**
 * Update User Shortcuts
 */
export const updateUserShortcuts = (shortcuts) => (dispatch, getState) => {
  const { user } = getState().auth
  const newUser = {
    ...user,
    data: {
      ...user.data,
      shortcuts,
    },
  }

  updateUserData(newUser, dispatch)

  return dispatch(setUserData(newUser))
}

/**
 * Remove User Data
 */
export const removeUserData = () => ({
  type: REMOVE_USER_DATA,
})

/**
 * Logout
 */
export const logoutUser = () => (dispatch, getState) => {
  const { user } = getState().auth

  if (!user.role || user.role.length === 0) {
    // is guest
    return null
  }

  history.push({
    pathname: ROUTES.login,
  })

  if (user.from === 'firebase') firebaseService.signOut()

  dispatch(FuseActions.setInitialSettings())

  return dispatch({
    type: USER_LOGGED_OUT,
  })
}

/**
 * Update User Data
 */
const updateUserData = (user, dispatch) => {
  if (!user.role || user.role.length === 0) {
    // is guest
    return
  }

  if (user.from) {
    firebaseService
      .updateUserData(user)
      .then(() => {
        dispatch(
          MessageActions.showMessage({ message: 'User data saved to firebase' })
        )
      })
      .catch((error) => {
        dispatch(MessageActions.showMessage({ message: error.message }))
      })
  }
}
