import React, { memo, useCallback } from 'react'

import {
  Checkbox,
  Icon,
  TableCell,
  TableRow,
  TableBody,
} from '@material-ui/core'
import { handleSelectRow } from 'app/helpers'
import isEqual from 'react-fast-compare'

const ProductTableBody = ({
  selected,
  setSelected,
  history,
  data,
  dataOrdered,
}) => {
  const showProductDetail = useCallback((id) => {
    history.push(`/products/${id}`)
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
      {dataOrdered.map((productItem) => {
        const {
          id,
          images,
          featuredImageId,
          name,
          categories,
          priceTaxIncl,
          quantity,
          active,
        } = productItem || {}
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
            onClick={() => showProductDetail(id)}
          >
            <TableCell className="w-64 text-center" padding="none">
              <Checkbox
                checked={isSelected}
                onClick={(event) => event.stopPropagation()}
                onChange={() => handleCheck(id)}
              />
            </TableCell>

            <TableCell
              className="w-52"
              component="th"
              scope="row"
              padding="none"
            >
              {images.length > 0 && featuredImageId ? (
                <img
                  className="w-full block rounded"
                  src={images.find((image) => image.id === featuredImageId).url}
                  alt={name}
                />
              ) : (
                <img
                  className="w-full block rounded"
                  src="assets/images/product-placeholder.png"
                  alt={name}
                />
              )}
            </TableCell>

            <TableCell component="th" scope="row">
              {name}
            </TableCell>

            <TableCell className="truncate" component="th" scope="row">
              {categories.join(', ')}
            </TableCell>

            <TableCell component="th" scope="row" align="right">
              <span>$</span>
              {priceTaxIncl}
            </TableCell>

            <TableCell component="th" scope="row" align="right">
              {quantity}
              <i
                className={`
            inline-block w-8 h-8 rounded mx-8 ${
              (quantity <= 5 && 'bg-red',
              quantity > 5 && quantity <= 25 && 'bg-orange',
              quantity > 25 && 'bg-green')
            }
          `}
              />
            </TableCell>

            <TableCell component="th" scope="row" align="right">
              {active ? (
                <Icon className="text-green text-20">check_circle</Icon>
              ) : (
                <Icon className="text-red text-20">remove_circle</Icon>
              )}
            </TableCell>
          </TableRow>
        )
      })}
    </TableBody>
  )
}

export default memo(ProductTableBody, isEqual)
