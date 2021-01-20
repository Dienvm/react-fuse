import React, { memo } from 'react'
import { Box, Icon, Typography, Grid } from '@material-ui/core'
import { TABLE_HEAD } from 'app/constants'
import isEqual from 'react-fast-compare'

const OrderPayment = ({ orderPayment }) => {
  const { transactionId, method, amount, date } = orderPayment
  return (
    <Box className="pb-48">
      <Box className="pb-16 flex items-center">
        <Icon color="action">attach_money</Icon>
        <Typography className="h2 mx-16" color="textSecondary">
          Payment
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {TABLE_HEAD.ORDER_PAYMENT.map((title, index) => (
          <Grid item xs={3} key={index.toString()}>
            <Box>{title}</Box>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={3}>
          <span className="truncate">{transactionId}</span>
        </Grid>
        <Grid item xs={3}>
          <span className="truncate">{method}</span>
        </Grid>
        <Grid item xs={3}>
          <span className="truncate">{amount}</span>
        </Grid>
        <Grid item xs={3}>
          <span className="truncate">{date}</span>
        </Grid>
      </Grid>
    </Box>
  )
}

export default memo(OrderPayment, isEqual)
