export const SET_SETTINGS = '[SETTINGS] SET SETTINGS'
export const SET_DEFAULT_SETTINGS = '[SETTINGS] SET DEFAULT SETTINGS'
export const SET_INITIAL_SETTINGS = '[SETTINGS] SET INITIAL SETTINGS'
export const RESET_DEFAULT_SETTINGS = '[SETTINGS] RESET DEFAULT SETTINGS'

export const setSettings = (value) => ({
  type: SET_SETTINGS,
  value,
})

export const setDefaultSettings = (value) => ({
  type: SET_DEFAULT_SETTINGS,
  value,
})

export const setInitialSettings = () => ({
  type: SET_INITIAL_SETTINGS,
})

export const resetSettings = (value) => ({
  type: RESET_DEFAULT_SETTINGS,
  value,
})
