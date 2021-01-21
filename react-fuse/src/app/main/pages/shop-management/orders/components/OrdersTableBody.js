import React, { memo, useCallback } from 'react'
import { TableBody, TableRow, TableCell, Checkbox } from '@material-ui/core'
import { handleSelectRow } from 'app/helpers'
import isEqual from 'react-fast-compare'

const OrdersTableBody = ({ dataOrdered, selected, setSelected, history }) => {
  const showOrderDetail = useCallback((id) => {
    history.push(`/orders/${id}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleCheck = useCallback(
    (id) => {
      const newSelected = handleSelectRow(id, selected)

      setSelected(newSelected)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selected]
  )

  return (
    <TableBody>
      {dataOrdered.map((orderItem) => {
        const {
          id,
          customer,
          orderId,
          total,
          payment,
          status,
          date,
        } = orderItem
        const isSelected = selected.indexOf(id) !== -1

        return (
          <TableRow
            className="h-64 cursor-pointer"
            hover
            role="checkbox"
            aria-checked={isSelected}
            tabIndex={-1}
            key={id}
            selected={isSelected}
            onClick={() => showOrderDetail(id)}
          >
            <TableCell className="w-64 text-center" padding="none">
              <Checkbox
                checked={isSelected}
                onClick={(event) => event.stopPropagation()}
                onChange={() => handleCheck(id)}
              />
            </TableCell>
            <TableCell component="th" scope="row">
              {orderId}
            </TableCell>

            <TableCell className="truncate" component="th" scope="row">
              {`${customer.firstName} ${customer.lastName}`}
            </TableCell>

            <TableCell component="th" scope="row" align="right">
              <span>$</span>
              {total}
            </TableCell>

            <TableCell component="th" scope="row">
              {payment.method}
            </TableCell>

            <TableCell component="th" scope="row">
              <div
                className={`inline text-12 p-4 rounded truncate', ${status.color}`}
              >
                {status.name}
              </div>
            </TableCell>

            <TableCell component="th" scope="row">
              {date}
            </TableCell>
          </TableRow>
        )
      })}
    </TableBody>
  )
}

export default memo(OrdersTableBody, isEqual)
