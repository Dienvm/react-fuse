import FusePageCarded from '@fuse/core/FusePageCarded'
import React from 'react'
import { Box } from '@material-ui/core'
import DashboardComponent from './components'

function DashboardPage(props) {
  return (
    <FusePageCarded
      header={
        <Box className="p-24">
          <h4>TITLE</h4>
        </Box>
      }
      content={
        <Box className="p-24">
          <h4>Content</h4>
          <br />
          <DashboardComponent />
        </Box>
      }
    />
  )
}

export default DashboardPage
