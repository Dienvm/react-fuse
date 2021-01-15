import {Avatar, Icon, Typography} from '@material-ui/core'
import {TABLE_HEAD} from 'app/constants'
import React from 'react'
import {Link} from 'react-router-dom'

const OrderContent = ({order}) => (
  <div className="p-16 sm:p-24 max-w-2xl w-full">
    {/* Order Details */}
    <div>
      <div className="pb-48">
        <div className="pb-16 flex items-center">
          <Icon color="action">account_circle</Icon>
          <Typography className="h2 mx-16" color="textSecondary">
            Customer
          </Typography>
        </div>

        <div className="mb-24">
          <div className="table-responsive mb-16">
            <table className="simple">
              <thead>
                <tr>
                  {TABLE_HEAD.CUSTOMER_ORDER.map((title) => (
                    <th>{title}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="flex items-center">
                      <Avatar src={order.customer.avatar} />
                      <Typography className="truncate mx-8">
                        {`${order.customer.firstName} ${order.customer.lastName}`}
                      </Typography>
                    </div>
                  </td>
                  <td>
                    <Typography className="truncate">
                      {order.customer.email}
                    </Typography>
                  </td>
                  <td>
                    <Typography className="truncate">
                      {order.customer.phone}
                    </Typography>
                  </td>
                  <td>
                    <span className="truncate">{order.customer.company}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Typography className="font-600">Shipping Address</Typography>
          <Typography className="w-full md:max-w-256 mb-16 md:mb-0">
            {order.customer.address.address}
          </Typography>
        </div>
      </div>

      <div className="pb-48">
        <div className="pb-16 flex items-center">
          <Icon color="action">access_time</Icon>
          <Typography className="h2 mx-16" color="textSecondary">
            Order Status
          </Typography>
        </div>

        <div className="table-responsive">
          <table className="simple">
            <thead>
              <tr>
                {TABLE_HEAD.ORDER_STATUS.map((title) => (
                  <th>{title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div
                    className={`inline text-12 p-4 rounded truncate', ${order.status.color}`}>
                    {order.status.name}
                  </div>
                </td>
                <td>{order.status.date}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="pb-48">
        <div className="pb-16 flex items-center">
          <Icon color="action">attach_money</Icon>
          <Typography className="h2 mx-16" color="textSecondary">
            Payment
          </Typography>
        </div>

        <div className="table-responsive">
          <table className="simple">
            <thead>
              <tr>
                {TABLE_HEAD.ORDER_PAYMENT.map((title) => (
                  <th>{title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="truncate">
                    {order.payment.transactionId}
                  </span>
                </td>
                <td>
                  <span className="truncate">{order.payment.method}</span>
                </td>
                <td>
                  <span className="truncate">{order.payment.amount}</span>
                </td>
                <td>
                  <span className="truncate">{order.payment.date}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="pb-48">
        <div className="pb-16 flex items-center">
          <Icon color="action">local_shipping</Icon>
          <Typography className="h2 mx-12" color="textSecondary">
            Shipping
          </Typography>
        </div>

        <div className="table-responsive">
          <table className="simple">
            <thead>
              <tr>
                {TABLE_HEAD.ORDER_SHIPPING.map((title) => (
                  <th>{title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {order.shippingDetails.map((shipping) => (
                <tr key={shipping.date}>
                  <td>
                    <span className="truncate">{shipping.tracking}</span>
                  </td>
                  <td>
                    <span className="truncate">{shipping.carrier}</span>
                  </td>
                  <td>
                    <span className="truncate">{shipping.weight}</span>
                  </td>
                  <td>
                    <span className="truncate">{shipping.fee}</span>
                  </td>
                  <td>
                    <span className="truncate">{shipping.date}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    {/* Products */}
    <div className="table-responsive">
      <table className="simple">
        <thead>
          <tr>
            {TABLE_HEAD.ORDER_PRODUCTS.map((title) => (
              <th>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {order.products.map((product) => (
            <tr key={product.id}>
              <td className="w-64">{product.id}</td>
              <td className="w-180">
                <img
                  className="product-image"
                  src={product.image}
                  alt="product"
                />
              </td>
              <td>
                <Typography
                  component={Link}
                  to={`/product/${product.id}`}
                  className="truncate"
                  style={{
                    color: 'inherit',
                    textDecoration: 'underline',
                  }}>
                  {product.name}
                </Typography>
              </td>
              <td className="w-64 text-right">
                <span className="truncate">${product.price}</span>
              </td>
              <td className="w-64 text-right">
                <span className="truncate">{product.quantity}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

export default OrderContent
