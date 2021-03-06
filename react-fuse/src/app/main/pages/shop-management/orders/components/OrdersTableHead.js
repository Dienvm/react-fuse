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
import clsx from 'clsx'
import React, { useState } from 'react'

const rows = [
  {
    id: 'orderId',
    align: 'left',
    disablePadding: false,
    label: 'OrderID',
    sort: true,
  },
  {
    id: 'customer',
    align: 'left',
    disablePadding: false,
    label: 'Customer',
    sort: true,
  },
  {
    id: 'total',
    align: 'right',
    disablePadding: false,
    label: 'Total',
    sort: true,
  },
  {
    id: 'payment',
    align: 'left',
    disablePadding: false,
    label: 'Payment',
    sort: true,
  },
  {
    id: 'status',
    align: 'left',
    disablePadding: false,
    label: 'Status',
    sort: true,
  },
  {
    id: 'date',
    align: 'left',
    disablePadding: false,
    label: 'Date',
    sort: true,
  },
]

const OrdersTableHead = (props) => {
  const classes = useStyles(props)
  const [selectedOrdersMenu, setSelectedOrdersMenu] = useState(null)

  const createSortHandler = (property) => (event) => {
    props.onRequestSort(event, property)
  }

  const openSelectedOrdersMenu = (event) => {
    setSelectedOrdersMenu(event.currentTarget)
  }

  const closeSelectedOrdersMenu = () => {
    setSelectedOrdersMenu(null)
  }

  const onRemoveOrders = () => {
    props.handleRemoveOrder()
    closeSelectedOrdersMenu()
  }

  return (
    <TableHead>
      <TableRow className="h-64">
        <TableCell padding="none" className="relative w-64 text-center">
          <Checkbox
            indeterminate={
              props.numSelected > 0 && props.numSelected < props.rowCount
            }
            checked={props.numSelected === props.rowCount}
            onChange={props.onSelectAllClick}
          />
          {props.numSelected > 0 && (
            <div
              className={clsx(
                'flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10',
                classes.actionsButtonWrapper
              )}
            >
              <IconButton
                aria-owns={selectedOrdersMenu ? 'selectedOrdersMenu' : null}
                aria-haspopup="true"
                onClick={openSelectedOrdersMenu}
              >
                <Icon>more_horiz</Icon>
              </IconButton>
              <Menu
                id="selectedOrdersMenu"
                anchorEl={selectedOrdersMenu}
                open={Boolean(selectedOrdersMenu)}
                onClose={closeSelectedOrdersMenu}
              >
                <MenuList>
                  <MenuItem onClick={onRemoveOrders}>
                    <ListItemIcon className="min-w-40">
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
              sortDirection={
                props.order.id === row.id ? props.order.direction : false
              }
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
                    active={props.order.id === row.id}
                    direction={props.order.direction}
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

export default OrdersTableHead
