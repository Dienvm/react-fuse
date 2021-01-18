import _ from '@lodash'
import {
  Checkbox,
  Icon,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core'
import clsx from 'clsx'
import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router'
import * as ProductActions from 'app/store/actions/product'
import { handleSelectRow } from 'app/helpers'
import ProductsTableHead from './ProductsTableHead'

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

  const showProductDetail = (item) => {
    history.push(`/product/${item.id}/${item.handle}`)
  }

  const handleCheck = useCallback(
    (id) => {
      const newSelected = handleSelectRow(id, selected)

      setSelected(newSelected)
    },
    [setSelected, selected]
  )

  const handleRemoveProducts = () => {
    dispatch(ProductActions.removeProducts(selected))
  }

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

      <TableBody>
        {_.orderBy(
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
                onClick={(event) => showProductDetail(n)}
              >
                <TableCell className="w-64 text-center" padding="none">
                  <Checkbox
                    checked={isSelected}
                    onClick={(event) => event.stopPropagation()}
                    onChange={() => handleCheck(n.id)}
                  />
                </TableCell>

                <TableCell
                  className="w-52"
                  component="th"
                  scope="row"
                  padding="none"
                >
                  {n.images.length > 0 && n.featuredImageId ? (
                    <img
                      className="w-full block rounded"
                      src={
                        n.images.find((image) => image.id === n.featuredImageId)
                          .url
                      }
                      alt={n.name}
                    />
                  ) : (
                    <img
                      className="w-full block rounded"
                      src="assets/images/product-placeholder.png"
                      alt={n.name}
                    />
                  )}
                </TableCell>

                <TableCell component="th" scope="row">
                  {n.name}
                </TableCell>

                <TableCell className="truncate" component="th" scope="row">
                  {n.categories.join(', ')}
                </TableCell>

                <TableCell component="th" scope="row" align="right">
                  <span>$</span>
                  {n.priceTaxIncl}
                </TableCell>

                <TableCell component="th" scope="row" align="right">
                  {n.quantity}
                  <i
                    className={clsx(
                      'inline-block w-8 h-8 rounded mx-8',
                      n.quantity <= 5 && 'bg-red',
                      n.quantity > 5 && n.quantity <= 25 && 'bg-orange',
                      n.quantity > 25 && 'bg-green'
                    )}
                  />
                </TableCell>

                <TableCell component="th" scope="row" align="right">
                  {n.active ? (
                    <Icon className="text-green text-20">check_circle</Icon>
                  ) : (
                    <Icon className="text-red text-20">remove_circle</Icon>
                  )}
                </TableCell>
              </TableRow>
            )
          })}
      </TableBody>
    </Table>
  )
}

export default withRouter(ProductsTable)
