import { lazy } from 'react'
import { ROUTES } from 'app/constants'

const ShopConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: ROUTES.orders,
      component: lazy(() => import('./orders/Orders')),
    },
    {
      path: ROUTES.order,
      component: lazy(() => import('./order/Order')),
    },
    {
      path: ROUTES.user,
      component: lazy(() => import('./users/Users')),
    },
    {
      path: ROUTES.products,
      component: lazy(() => import('./products/Products')),
    },
    {
      path: ROUTES.product,
      component: lazy(() => import('./product/Product')),
    },
  ],
}

export default ShopConfig
