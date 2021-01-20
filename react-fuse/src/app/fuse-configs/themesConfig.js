import { fuseDark, skyBlue } from '@fuse/colors'
import { lightBlue, red } from '@material-ui/core/colors'
import { COLORS } from 'app/themes'

const themesConfig = {
  default: {
    palette: {
      type: 'light',
      primary: fuseDark,
      secondary: {
        light: skyBlue[100],
        main: skyBlue[500],
        dark: skyBlue[900],
      },
      background: {
        paper: COLORS.white,
        default: COLORS.alabaster,
      },
      error: red,
    },
    status: {
      danger: COLORS.orange,
    },
  },
  legacy: {
    palette: {
      type: 'light',
      primary: fuseDark,
      secondary: {
        light: lightBlue[400],
        main: lightBlue[600],
        dark: lightBlue[700],
      },
      background: {
        paper: COLORS.white,
        default: COLORS.alabaster,
      },
      error: red,
    },
    status: {
      danger: COLORS.orange,
    },
  },
  sunset: {
    palette: {
      type: 'light',
      primary: {
        light: COLORS.sunsetPrimaryLight,
        main: COLORS.sunsetPrimaryMain,
        dark: COLORS.sunsetPrimaryDark,
      },
      secondary: {
        light: COLORS.sunsetSecondaryLight,
        main: COLORS.sunsetSecondaryMain,
        dark: COLORS.sunsetSecondaryDark,
        contrastText: COLORS.white,
      },
      background: {
        paper: COLORS.white,
        default: COLORS.alabaster,
      },
      error: red,
    },
    status: {
      danger: COLORS.orange,
    },
  },
  greeny: {
    palette: {
      type: 'light',
      primary: {
        light: COLORS.greenyPrimaryLight,
        main: COLORS.greenyPrimaryMain,
        dark: COLORS.greenyPrimaryDark,
      },
      secondary: {
        light: COLORS.greenySecondaryLight,
        main: COLORS.greenySecondaryMain,
        dark: COLORS.greenySecondaryDark,
        contrastText: COLORS.white,
      },
      background: {
        paper: COLORS.white,
        default: COLORS.alabaster,
      },
      error: red,
    },
    status: {
      danger: COLORS.orange,
    },
  },
  beach: {
    palette: {
      type: 'light',
      primary: {
        light: COLORS.beachPrimaryLight,
        main: COLORS.beachPrimaryMain,
        dark: COLORS.beachPrimaryDark,
        contrastText: COLORS.white,
      },
      secondary: {
        light: COLORS.beachSecondaryLight,
        main: COLORS.beachSecondaryMain,
        dark: COLORS.beachSecondaryDark,
        contrastText: COLORS.white,
      },
      background: {
        paper: COLORS.white,
        default: COLORS.alabaster,
      },
    },
  },
  tech: {
    palette: {
      type: 'light',
      primary: {
        light: COLORS.techPrimaryLight,
        main: COLORS.techPrimaryMain,
        dark: COLORS.techPrimaryDark,
        contrastText: COLORS.white,
      },
      secondary: {
        light: COLORS.techSecondaryLight,
        main: COLORS.techSecondaryMain,
        dark: COLORS.techSecondaryDark,
      },
      background: {
        paper: COLORS.white,
        default: COLORS.alabaster,
      },
    },
  },
  sweetHues: {
    palette: {
      type: 'light',
      primary: {
        light: COLORS.sweetHuesPrimaryLight,
        main: COLORS.sweetHuesPrimaryMain,
        dark: COLORS.sweetHuesPrimaryDark,
        contrastText: COLORS.white,
      },
      secondary: {
        light: COLORS.sweetHuesSecondaryLight,
        main: COLORS.sweetHuesSecondaryMain,
        dark: COLORS.sweetHuesSecondaryDark,
      },
      background: {
        paper: COLORS.white,
        default: COLORS.alabaster,
      },
    },
  },
  defaultDark: {
    palette: {
      type: 'dark',
      primary: fuseDark,
      secondary: {
        light: skyBlue[100],
        main: skyBlue[500],
        dark: skyBlue[900],
      },
      background: {
        paper: COLORS.backgroundPaper,
        default: COLORS.backgroundDefault,
      },
      error: red,
    },
    status: {
      danger: COLORS.orange,
    },
  },
  deepOcean: {
    palette: {
      type: 'dark',
      primary: {
        light: COLORS.deepOceanPrimaryLight,
        main: COLORS.deepOceanPrimaryMain,
        dark: COLORS.deepOceanPrimaryDark,
      },
      secondary: {
        light: COLORS.deepOceanSecondaryLight,
        main: COLORS.deepOceanSecondaryMain,
        dark: COLORS.deepOceanSecondaryDark,
        contrastText: COLORS.white,
      },
      background: {
        paper: COLORS.backgroundPaper,
        default: COLORS.backgroundDefault,
      },
    },
  },
  slate: {
    palette: {
      type: 'dark',
      primary: {
        light: COLORS.slatePrimaryLight,
        main: COLORS.slatePrimaryMain,
        dark: COLORS.slatePrimaryDark,
      },
      secondary: {
        light: COLORS.slateSecondaryLight,
        main: COLORS.slateSecondaryMain,
        dark: COLORS.slateSecondaryDark,
        contrastText: COLORS.white,
      },
      background: {
        paper: COLORS.backgroundPaper,
        default: COLORS.backgroundDefault,
      },
    },
  },
}

export default themesConfig
