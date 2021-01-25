import FusePageCarded from '@fuse/core/FusePageCarded'
import React from 'react'
import { Box } from '@material-ui/core'
import DashboardComponent from './components'

const DashboardPage = (props) => (
  <FusePageCarded
    header={
      <Box className="p-24">
        <h4 data-cy="dashboard-header">Dashboard page</h4>
      </Box>
    }
    content={
      <Box className="p-24">
        <h4>Dashboard Content</h4>
        <br />
        <DashboardComponent />
      </Box>
    }
  />
)

export default DashboardPage
