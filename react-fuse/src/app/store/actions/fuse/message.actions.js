export const HIDE_MESSAGE = '[MESSAGE] CLOSE'
export const SHOW_MESSAGE = '[MESSAGE] SHOW'

export const hideMessage = () => ({
  type: HIDE_MESSAGE,
})

export const showMessage = (options) => ({
  type: SHOW_MESSAGE,
  options,
})
