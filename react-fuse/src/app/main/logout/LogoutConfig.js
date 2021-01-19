import { authRoles } from 'app/auth'
import { logoutUser } from 'app/auth/store/actions'
import { ROUTES } from 'app/constants'
import store from 'app/store'

const LogoutConfig = {
  auth: authRoles.user,
  routes: [
    {
      path: ROUTES.logout,
      component: () => {
        store.dispatch(logoutUser())
        return 'Logging out..'
      },
    },
  ],
}

export default LogoutConfig
