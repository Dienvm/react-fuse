import FuseUtils from '@fuse/utils'

export const GET_NAVIGATION = '[NAVIGATION] GET NAVIGATION'
export const SET_NAVIGATION = '[NAVIGATION] SET NAVIGATION'
export const RESET_NAVIGATION = '[NAVIGATION] RESET NAVIGATION'

export const getNavigation = () => ({
  type: GET_NAVIGATION,
})

export const setNavigation = (navigation) => ({
  type: SET_NAVIGATION,
  navigation,
})

export const resetNavigation = () => ({
  type: RESET_NAVIGATION,
})

export const appendNavigationItem = (item, parentId) => (
  dispatch,
  getState
) => {
  const { navigation } = getState().fuse
  return dispatch({
    type: SET_NAVIGATION,
    navigation: FuseUtils.appendNavItem(navigation, item, parentId),
  })
}

export const prependNavigationItem = (item, parentId) => (
  dispatch,
  getState
) => {
  const { navigation } = getState().fuse
  return dispatch({
    type: SET_NAVIGATION,
    navigation: FuseUtils.prependNavItem(navigation, item, parentId),
  })
}

export const updateNavigationItem = (id, item) => (dispatch, getState) => {
  const { navigation } = getState().fuse
  return dispatch({
    type: SET_NAVIGATION,
    navigation: FuseUtils.updateNavItem(navigation, id, item),
  })
}

export const removeNavigationItem = (id) => (dispatch, getState) => {
  const { navigation } = getState().fuse
  return dispatch({
    type: SET_NAVIGATION,
    navigation: FuseUtils.removeNavItem(navigation, id),
  })
}
