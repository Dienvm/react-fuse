import React, { memo } from 'react'
import {
  Box,
  Icon,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@material-ui/core'
import { TABLE_HEAD } from 'app/constants'

const OrderPayment = ({ orderPayment }) => (
  <Box className="pb-48">
    <Box className="pb-16 flex items-center">
      <Icon color="action">attach_money</Icon>
      <Typography className="h2 mx-16" color="textSecondary">
        Payment
      </Typography>
    </Box>

    <Box className="table-responsive">
      <Table className="simple">
        <TableHead>
          <TableRow>
            {TABLE_HEAD.ORDER_PAYMENT.map((title, index) => (
              <TableCell key={index.toString()}>{title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <span className="truncate">{orderPayment.transactionId}</span>
            </TableCell>
            <TableCell>
              <span className="truncate">{orderPayment.method}</span>
            </TableCell>
            <TableCell>
              <span className="truncate">{orderPayment.amount}</span>
            </TableCell>
            <TableCell>
              <span className="truncate">{orderPayment.date}</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  </Box>
)

export default memo(OrderPayment)
