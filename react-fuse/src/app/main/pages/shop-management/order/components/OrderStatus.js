import React, { memo } from 'react'
import {
  Icon,
  Typography,
  Box,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@material-ui/core'
import { TABLE_HEAD } from 'app/constants'

const OrderStatus = ({ orderStatus }) => {
  const { color, name, date } = orderStatus
  return (
    <Box className="pb-48">
      <Box className="pb-16 flex items-center">
        <Icon color="action">access_time</Icon>
        <Typography className="h2 mx-16" color="textSecondary">
          Order Status
        </Typography>
      </Box>

      <Box className="table-responsive">
        <Table className="simple">
          <TableHead>
            <TableRow>
              {TABLE_HEAD.ORDER_STATUS.map((title, index) => (
                <th key={index.toString()}>{title}</th>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Box
                  className={`inline text-12 p-4 rounded truncate', ${color}`}
                >
                  {name}
                </Box>
              </TableCell>
              <TableCell>{date}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Box>
  )
}

export default memo(OrderStatus)
