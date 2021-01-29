import React, { useState, memo } from 'react'
import clsx from 'clsx'

import Checkbox from '@material-ui/core/Checkbox'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Tooltip from '@material-ui/core/Tooltip'
import { useStyles } from 'app/themes'
import isEqual from 'react-fast-compare'

const rows = [
  {
    id: 'image',
    align: 'left',
    disablePadding: true,
    label: '',
    sort: false,
  },
  {
    id: 'name',
    align: 'left',
    disablePadding: false,
    label: 'Name',
    sort: true,
  },
  {
    id: 'categories',
    align: 'left',
    disablePadding: false,
    label: 'Category',
    sort: true,
  },
  {
    id: 'priceTaxIncl',
    align: 'right',
    disablePadding: false,
    label: 'Price',
    sort: true,
  },
  {
    id: 'quantity',
    align: 'right',
    disablePadding: false,
    label: 'Quantity',
    sort: true,
  },
  {
    id: 'active',
    align: 'right',
    disablePadding: false,
    label: 'Active',
    sort: true,
  },
]

const ProductsTableHead = ({
  numSelected,
  order,
  onSelectAllClick,
  onRequestSort,
  rowCount,
  handleRemoveProducts,
}) => {
  const classes = useStyles()
  const [selectedProductsMenu, setSelectedProductsMenu] = useState(null)

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property)
  }

  const openSelectedProductsMenu = (event) => {
    setSelectedProductsMenu(event.currentTarget)
  }

  const closeSelectedProductsMenu = () => {
    setSelectedProductsMenu(null)
  }

  const onRemoveProducts = () => {
    closeSelectedProductsMenu()
    handleRemoveProducts()
  }

  return (
    <TableHead>
      <TableRow className="h-64">
        <TableCell padding="none" className="relative w-64 text-center">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
          />
          {numSelected > 0 && (
            <div
              className={clsx(
                'flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10',
                classes.actionsButtonWrapper
              )}
            >
              <IconButton
                aria-owns={selectedProductsMenu ? 'selectedProductsMenu' : null}
                aria-haspopup="true"
                onClick={openSelectedProductsMenu}
                data-cy="cy-products-select-menu"
              >
                <Icon>more_horiz</Icon>
              </IconButton>
              <Menu
                id="selectedProductsMenu"
                anchorEl={selectedProductsMenu}
                open={Boolean(selectedProductsMenu)}
                onClose={closeSelectedProductsMenu}
              >
                <MenuList>
                  <MenuItem onClick={onRemoveProducts}>
                    <ListItemIcon
                      className="min-w-40"
                      data-cy="cy-products-remote"
                    >
                      <Icon>delete</Icon>
                    </ListItemIcon>
                    <ListItemText primary="Remove" />
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          )}
        </TableCell>

        {rows.map((row) => {
          return (
            <TableCell
              key={row.id}
              align={row.align}
              padding={row.disablePadding ? 'none' : 'default'}
              sortDirection={order.id === row.id ? order.direction : false}
              data-cy={`cy-head-${row.id}`}
            >
              {row.sort && (
                <Tooltip
                  title="Sort"
                  placement={
                    row.align === 'right' ? 'bottom-end' : 'bottom-start'
                  }
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={order.id === row.id}
                    direction={order.direction}
                    onClick={createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              )}
            </TableCell>
          )
        })}
      </TableRow>
    </TableHead>
  )
}

export default memo(ProductsTableHead, isEqual)
