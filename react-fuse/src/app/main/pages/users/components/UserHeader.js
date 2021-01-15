import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import FuseAnimate from '@fuse/core/FuseAnimate'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import Input from '@material-ui/core/Input'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import * as userActions from 'app/store/actions'

const UserHeader = () => {
  const dispatch = useDispatch()
  const searchText = useSelector(({ user }) => user.searchText)

  const handleSearchUser = (event) => {
    dispatch(userActions.setProductsSearchText(event.target.value))
  }

  return (
    <div className="flex flex-1 w-full items-center justify-between">
      <div className="flex items-center">
        <FuseAnimate animation="transition.expandIn" delay={300}>
          <Icon className="text-32">burst_mode</Icon>
        </FuseAnimate>
        <FuseAnimate animation="transition.slideLeftIn" delay={300}>
          <Typography className="hidden sm:flex mx-0 sm:mx-12" variant="h6">
            Users
          </Typography>
        </FuseAnimate>
      </div>

      <div className="flex flex-1 items-center justify-center px-12">
        <FuseAnimate animation="transition.slideDownIn" delay={300}>
          <Paper
            className="flex items-center w-full max-w-512 px-8 py-4 rounded-8"
            elevation={1}
          >
            <Icon color="action">search</Icon>

            <Input
              placeholder="Search"
              className="flex flex-1 mx-8"
              disableUnderline
              fullWidth
              value={searchText}
              inputProps={{
                'aria-label': 'Search',
              }}
              onChange={handleSearchUser}
            />
          </Paper>
        </FuseAnimate>
      </div>
      <FuseAnimate animation="transition.slideRightIn" delay={300}>
        <Button
          component={Link}
          to="/profile/new"
          className="whitespace-no-wrap normal-case"
          variant="contained"
          color="secondary"
        >
          <span className="hidden sm:flex">Add New User</span>
          <span className="flex sm:hidden">New</span>
        </Button>
      </FuseAnimate>
    </div>
  )
}

export default UserHeader
