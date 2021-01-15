import { authRoles } from '../auth'

const navigationConfig = [
  {
    id: 'applications',
    title: 'Dashboard',
    type: 'item',
    icon: 'dashboard',
    auth: authRoles.admin,
    url: '/dashboard',
  },
  {
    id: 'products',
    title: 'Products Management',
    type: 'item',
    icon: 'burst_mode',
    auth: authRoles.admin,
    url: '/products',
  },
  {
    id: 'user',
    title: 'User Management',
    type: 'item',
    icon: 'account_circle',
    auth: authRoles.admin,
    url: '/users',
  },
  {
    id: 'order',
    title: 'Order Management',
    type: 'item',
    icon: 'add_shopping_cart',
    auth: authRoles.admin,
    url: '/orders',
  },
]

export default navigationConfig
