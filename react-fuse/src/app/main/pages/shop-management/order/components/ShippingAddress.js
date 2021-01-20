import React, { memo } from 'react'
import { Avatar, Box, Typography, Icon, Grid } from '@material-ui/core'
import { TABLE_HEAD } from 'app/constants'

const ShippingAddress = ({ customer }) => {
  const { avatar, firstName, lastName, email, phone, company } = customer

  return (
    <Box className="pb-48">
      <Box className="pb-16 flex items-center">
        <Icon color="action">account_circle</Icon>
        <Typography className="h2 mx-16" color="textSecondary">
          Customer
        </Typography>
      </Box>

      <Box className="mb-24">
        <Grid container spacing={3}>
          {TABLE_HEAD.CUSTOMER_ORDER.map((title, index) => (
            <Grid item xs={3} key={index.toString()}>
              <Box>{title}</Box>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Box className="flex items-center">
              <Avatar src={avatar} />
              <Typography className="truncate mx-8">
                {`${firstName} ${lastName}`}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Typography className="truncate">{email}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography className="truncate">{phone}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography className="truncate">{company}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default memo(ShippingAddress)
