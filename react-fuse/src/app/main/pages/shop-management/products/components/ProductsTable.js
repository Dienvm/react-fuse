import _ from '@lodash'
import { Table } from '@material-ui/core'
import React, { useState, memo } from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router'
import * as ProductActions from 'app/store/actions/product'
import isEqual from 'react-fast-compare'
import ProductsTableHead from './ProductsTableHead'
import ProductTableBody from './ProductTableBody'

const ProductsTable = ({ data, page, rowsPerPage, history }) => {
  const dispatch = useDispatch()
  const [selected, setSelected] = useState([])
  const [order, setOrder] = useState({
    direction: 'asc',
    id: null,
  })

  const handleRequestSort = (event, property) => {
    const id = property
    let direction = 'desc'

    if (order.id === property && order.direction === 'desc') {
      direction = 'asc'
    }

    setOrder({
      direction,
      id,
    })
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      setSelected(data.map((n) => n.id))
      return
    }
    setSelected([])
  }

  const handleRemoveProducts = () => {
    dispatch(ProductActions.removeProducts(selected))
  }
  const dataOrdered = _.orderBy(
    data,
    [
      (o) => {
        switch (order.id) {
          case 'categories': {
            return o.categories[0]
          }
          default: {
            return o[order.id]
          }
        }
      },
    ],
    [order.direction]
  ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  return (
    <Table className="min-w-xl" aria-labelledby="tableTitle">
      <ProductsTableHead
        numSelected={selected.length}
        order={order}
        onSelectAllClick={handleSelectAllClick}
        onRequestSort={handleRequestSort}
        rowCount={data.length}
        handleRemoveProducts={handleRemoveProducts}
      />

      <ProductTableBody
        selected={selected}
        setSelected={setSelected}
        history={history}
        dataOrdered={dataOrdered}
      />
    </Table>
  )
}

const areEqual = (prevProps, nextProps) =>
  isEqual(prevProps.data, nextProps.data)

export default withRouter(memo(ProductsTable, areEqual))
