import FuseScrollbars from '@fuse/core/FuseScrollbars'
import FuseUtils from '@fuse/utils'
import _ from '@lodash'
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
} from '@material-ui/core'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as ordersActions from 'app/store/actions'
import { handleSelectRow } from 'app/helpers'
import OrdersTableHead from './OrdersTableHead'

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
  }, [dispatch])

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

  const showOrderDetail = (item) => {
    props.history.push(`/order/${item.id}`)
  }

  const handleCheck = useCallback(
    (id) => {
      const newSelected = handleSelectRow(id, selected)

      setSelected(newSelected)
    },
    [setSelected, selected]
  )

  const handleChangePage = (event, value) => {
    setPage(value)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value)
  }

  const handleRemoveOrder = () => {
    dispatch(ordersActions.removeOrders(selected))
  }

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

          <TableBody>
            {_.orderBy(
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
            )
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((n) => {
                const isSelected = selected.indexOf(n.id) !== -1
                return (
                  <TableRow
                    className="h-64 cursor-pointer"
                    hover
                    role="checkbox"
                    aria-checked={isSelected}
                    tabIndex={-1}
                    key={n.id}
                    selected={isSelected}
                    onClick={(event) => showOrderDetail(n)}
                  >
                    <TableCell className="w-64 text-center" padding="none">
                      <Checkbox
                        checked={isSelected}
                        onClick={(event) => event.stopPropagation()}
                        onChange={(event) => handleCheck(event, n.id)}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {n.orderId}
                    </TableCell>

                    <TableCell className="truncate" component="th" scope="row">
                      {`${n.customer.firstName} ${n.customer.lastName}`}
                    </TableCell>

                    <TableCell component="th" scope="row" align="right">
                      <span>$</span>
                      {n.total}
                    </TableCell>

                    <TableCell component="th" scope="row">
                      {n.payment.method}
                    </TableCell>

                    <TableCell component="th" scope="row">
                      <div
                        className={`inline text-12 p-4 rounded truncate', ${n.status.color}`}
                      >
                        {n.status.name}
                      </div>
                    </TableCell>

                    <TableCell component="th" scope="row">
                      {n.date}
                    </TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
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