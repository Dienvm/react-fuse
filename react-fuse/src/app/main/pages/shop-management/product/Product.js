import React, { memo } from 'react'
import isEqual from 'react-fast-compare'

import FusePageCarded from '@fuse/core/FusePageCarded'
import TableForm from './components/TableForm'
import Header from './components/Header'

const ProductPage = (props) => {
  return (
    <FusePageCarded
      classes={{
        toolbar: 'p-0',
        header: 'min-h-72 h-72 sm:h-136 sm:min-h-136',
      }}
      header={<Header />}
      content={<TableForm />}
      innerScroll
    />
  )
}

export default memo(ProductPage, isEqual)
