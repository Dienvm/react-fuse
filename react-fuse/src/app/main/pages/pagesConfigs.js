import ForgotPasswordPageConfig from './auth/forgot-password/ForgotPasswordPageConfig'
import ResetPasswordPageConfig from './auth/reset-password/ResetPasswordPageConfig'
import Error404PageConfig from './errors/404/Error404PageConfig'
import Error500PageConfig from './errors/500/Error500PageConfig'
import ProfilePageConfig from './profile/ProfilePageConfig'
import ShopConfig from './shop-management/shopConfig'

const pagesConfigs = [
  ResetPasswordPageConfig,
  ForgotPasswordPageConfig,
  Error404PageConfig,
  Error500PageConfig,
  ProfilePageConfig,
  ShopConfig,
]

export default pagesConfigs
