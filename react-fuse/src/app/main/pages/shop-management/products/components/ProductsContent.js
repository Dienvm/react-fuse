import FuseScrollbars from '@fuse/core/FuseScrollbars'
import React, { useEffect, useState, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as ProductActions from 'app/store/actions/product'
import { TablePagination } from '@material-ui/core'
import isEqual from 'react-fast-compare'
import ProductsTable from './ProductsTable'

const ProductsContent = () => {
  const dispatch = useDispatch()
  const products = useSelector(({ product }) => product.products.data)
  const type = useSelector(({ product }) => product.products.type)
  const searchText = useSelector(({ product }) => product.products.searchText)

  const [data, setData] = useState(products)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  useEffect(() => {
    dispatch(ProductActions.getProducts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (searchText.length !== 0) {
      setData(
        products.filter((item) =>
          item.name.toLowerCase().includes(searchText.toLowerCase())
        )
      )
      setPage(0)
    } else {
      setData(products)
    }
  }, [products, searchText])

  useEffect(() => {
    if (type === ProductActions.REMOVE_PRODUCTS) {
      dispatch(ProductActions.getProducts())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type])

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

export default memo(ProductsContent, isEqual)
