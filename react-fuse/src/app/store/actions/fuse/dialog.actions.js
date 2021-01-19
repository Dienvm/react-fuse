export const OPEN_DIALOG = '[DIALOG] OPEN'
export const CLOSE_DIALOG = '[DIALOG] CLOSE'

export const closeDialog = () => ({
  type: CLOSE_DIALOG,
})

export const openDialog = (options) => ({
  type: OPEN_DIALOG,
  options,
})
