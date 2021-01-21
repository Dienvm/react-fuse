import FuseScrollbars from '@fuse/core/FuseScrollbars'
import FuseUtils from '@fuse/utils'
import _ from '@lodash'
import { Table, TablePagination } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as ordersActions from 'app/store/actions'
import OrdersTableHead from './OrdersTableHead'
import OrdersTableBody from './OrdersTableBody'

const OrdersTable = (props) => {
  const dispatch = useDispatch()
  const ordersData = useSelector(({ order }) => order.orders.data)
  const searchText = useSelector(({ order }) => order.orders.searchText)

  const [selected, setSelected] = useState([])
  const [data, setData] = useState(ordersData)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [order, setOrder] = useState({
    direction: 'asc',
    id: null,
  })

  useEffect(() => {
    dispatch(ordersActions.getOrders())
  }, [])

  useEffect(() => {
    if (searchText.length !== 0) {
      setData(FuseUtils.filterArrayByString(ordersData, searchText))
      setPage(0)
    } else {
      setData(ordersData)
    }
  }, [ordersData, searchText])

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

  const handleChangePage = (event, value) => {
    setPage(value)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value)
  }

  const handleRemoveOrder = () => {
    dispatch(ordersActions.removeOrders(selected))
  }

  const dataOrdered = _.orderBy(
    data,
    [
      (o) => {
        switch (order.id) {
          case 'id': {
            return parseInt(o.id, 10)
          }
          case 'customer': {
            return o.customer.firstName
          }
          case 'payment': {
            return o.payment.method
          }
          case 'status': {
            return o.status[0].name
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
    <div className="w-full flex flex-col">
      <FuseScrollbars className="flex-grow overflow-x-auto">
        <Table className="min-w-xl" aria-labelledby="tableTitle">
          <OrdersTableHead
            numSelected={selected.length}
            order={order}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={data.length}
            handleRemoveOrder={handleRemoveOrder}
          />

          <OrdersTableBody
            dataOrdered={dataOrdered}
            selected={selected}
            setSelected={setSelected}
            history={props.history}
          />
        </Table>
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

export default withRouter(OrdersTable)
