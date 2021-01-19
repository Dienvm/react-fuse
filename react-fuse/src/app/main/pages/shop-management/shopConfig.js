import { lazy } from 'react'
import { ROUTES } from 'app/constants'

const ShopConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: ROUTES.order,
      component: lazy(() => import('./order/Order')),
    },
    {
      path: ROUTES.orders,
      component: lazy(() => import('./orders/Orders')),
    },
    {
      path: ROUTES.users,
      component: lazy(() => import('./users/Users')),
    },
    {
      path: ROUTES.product,
      component: lazy(() => import('./product/Product')),
    },
    {
      path: ROUTES.products,
      component: lazy(() => import('./products/Products')),
    },
  ],
}

export default ShopConfig
