import React, { memo } from 'react'
import { Icon, Typography, Box, Grid } from '@material-ui/core'
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

      <Grid container spacing={3}>
        {TABLE_HEAD.ORDER_STATUS.map((title, index) => (
          <Grid item xs={6} key={index.toString()}>
            <Box>{title}</Box>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Box className={`inline p-4 rounded truncate', ${color}`}>{name}</Box>
        </Grid>
        <Grid item xs={6}>
          <Box>{date}</Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default memo(OrderStatus)
