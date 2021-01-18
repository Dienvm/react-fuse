import React, { memo } from 'react'
import {
  Avatar,
  Box,
  Typography,
  Icon,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@material-ui/core'
import { TABLE_HEAD } from 'app/constants'

const ShippingAddress = ({ customer }) => {
  const {
    avatar,
    firstName,
    lastName,
    email,
    phone,
    company,
    address,
  } = customer

  return (
    <Box className="pb-48">
      <Box className="pb-16 flex items-center">
        <Icon color="action">account_circle</Icon>
        <Typography className="h2 mx-16" color="textSecondary">
          Customer
        </Typography>
      </Box>

      <Box className="mb-24">
        <Box className="table-responsive mb-16">
          <Table className="simple">
            <TableHead>
              <TableRow>
                {TABLE_HEAD.CUSTOMER_ORDER.map((title, index) => (
                  <TableCell key={index.toString()}>{title}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Box className="flex items-center">
                    <Avatar src={avatar} />
                    <Typography className="truncate mx-8">
                      {`${firstName} ${lastName}`}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography className="truncate">{email}</Typography>
                </TableCell>
                <TableCell>
                  <Typography className="truncate">{phone}</Typography>
                </TableCell>
                <TableCell>
                  <span className="truncate">{company}</span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
        <Typography className="font-600">Shipping Address</Typography>
        <Typography className="w-full md:max-w-256 mb-16 md:mb-0">
          {address.address}
        </Typography>
      </Box>
    </Box>
  )
}

export default memo(ShippingAddress)
