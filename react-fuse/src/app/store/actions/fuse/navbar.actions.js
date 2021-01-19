export const OPEN_FOLDED_NAVBAR = '[NAVBAR] OPEN FOLDED'
export const CLOSE_FOLDED_NAVBAR = '[NAVBAR] CLOSE FOLDED'
export const TOGGLE_FOLDED_NAVBAR = '[NAVBAR] TOGGLE FOLDED'
export const TOGGLE_MOBILE_NAVBAR = '[NAVBAR] TOGGLE MOBILE'
export const OPEN_MOBILE_NAVBAR = '[NAVBAR] OPEN MOBILE'
export const CLOSE_MOBILE_NAVBAR = '[NAVBAR] CLOSE MOBILE'

export const navbarToggleFolded = () => ({
  type: TOGGLE_FOLDED_NAVBAR,
})

export const navbarOpenFolded = () => ({
  type: OPEN_FOLDED_NAVBAR,
})

export const navbarCloseFolded = () => ({
  type: CLOSE_FOLDED_NAVBAR,
})

export const navbarToggleMobile = () => ({
  type: TOGGLE_MOBILE_NAVBAR,
})

export const navbarOpenMobile = () => ({
  type: OPEN_MOBILE_NAVBAR,
})

export const navbarCloseMobile = () => ({
  type: CLOSE_MOBILE_NAVBAR,
})
