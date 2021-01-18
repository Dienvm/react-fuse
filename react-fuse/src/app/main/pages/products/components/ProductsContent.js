import FuseScrollbars from '@fuse/core/FuseScrollbars'
import React, { useEffect, useState, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as ProductActions from 'app/store/actions/product'
import { TablePagination } from '@material-ui/core'
import ProductsTable from './ProductsTable'

const ProductsContent = () => {
  const dispatch = useDispatch()
  const products = useSelector(({ product }) => product.products)
  const searchText = useSelector(({ product }) => product.products.searchText)

  const [data, setData] = useState(products.data)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  useEffect(() => {
    dispatch(ProductActions.getProducts())
  }, [dispatch])

  useEffect(() => {
    if (searchText.length !== 0) {
      setData(
        products.data.filter((item) =>
          item.name.toLowerCase().includes(searchText.toLowerCase())
        )
      )
      setPage(0)
    } else {
      setData(products.data)
    }
  }, [products, searchText])

  useEffect(() => {
    if (products.type === ProductActions.REMOVE_PRODUCTS)
      dispatch(ProductActions.getProducts())
  }, [products, dispatch])

  const handleChangePage = (event, value) => {
    setPage(value)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value)
  }

  return (
    <div className="w-full flex flex-col">
      <FuseScrollbars className="flex-grow overflow-x-auto">
        <ProductsTable data={data} page={page} rowsPerPage={rowsPerPage} />
      </FuseScrollbars>

      <TablePagination
        className="overflow-hidden"
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'Previous Page',
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  )
}

export default memo(ProductsContent)
