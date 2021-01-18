import { ROUTES } from 'app/constants'
import OrderPage from './order/Order'
import OrdersPage from './orders/Orders'
import ProductPage from './product/Product'
import ProductsPage from './products/Products'
import UsersPage from './users/Users'

const ShopConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: ROUTES.orders,
      component: OrdersPage,
    },
    {
      path: ROUTES.order,
      component: OrderPage,
    },
    {
      path: ROUTES.user,
      component: UsersPage,
    },
    {
      path: ROUTES.products,
      component: ProductsPage,
    },
    {
      path: ROUTES.product,
      component: ProductPage,
    },
  ],
}

export default ShopConfig
