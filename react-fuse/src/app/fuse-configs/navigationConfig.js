import { ROUTES } from 'app/constants'
import { authRoles } from '../auth'

const navigationConfig = [
  {
    id: 'applications',
    title: 'Dashboard',
    type: 'item',
    icon: 'dashboard',
    auth: authRoles.admin,
    url: ROUTES.dashboard,
  },
  {
    id: 'products',
    title: 'Products Management',
    type: 'item',
    icon: 'burst_mode',
    auth: authRoles.admin,
    url: ROUTES.products,
  },
  {
    id: 'user',
    title: 'User Management',
    type: 'item',
    icon: 'account_circle',
    auth: authRoles.admin,
    url: ROUTES.users,
  },
  {
    id: 'order',
    title: 'Order Management',
    type: 'item',
    icon: 'add_shopping_cart',
    auth: authRoles.admin,
    url: ROUTES.orders,
  },
]

export default navigationConfig
