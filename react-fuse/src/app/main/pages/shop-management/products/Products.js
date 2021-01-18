import React from 'react'
import FusePageCarded from '@fuse/core/FusePageCarded'
import ProductsHeader from './components/ProductsHeader'
import ProductsContent from './components/ProductsContent'

const ProductsPage = () => (
  <FusePageCarded
    classes={{
      content: 'flex',
      header: 'min-h-72 h-72 sm:h-136 sm:min-h-136',
    }}
    header={<ProductsHeader />}
    content={<ProductsContent />}
    innerScroll
  />
)

export default ProductsPage
