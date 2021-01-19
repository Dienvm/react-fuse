import React, { useState } from 'react'
import clsx from 'clsx'

import {
  Checkbox,
  Icon,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from '@material-ui/core'
import { useStyles } from 'app/helpers/useStyles'

const rows = [
  {
    id: 'image',
    align: 'left',
    disablePadding: true,
    label: 'Avatar',
    sort: true,
  },
  {
    id: 'name',
    align: 'left',
    disablePadding: false,
    label: 'User name',
    sort: true,
  },
  {
    id: 'role',
    align: 'left',
    disablePadding: false,
    label: 'Role',
    sort: true,
  },
  {
    id: 'email',
    align: 'left',
    disablePadding: false,
    label: 'Email',
    sort: true,
  },
  {
    id: 'phoneNumber',
    align: 'left',
    disablePadding: false,
    label: 'Phone number',
    sort: true,
  },
  {
    id: 'active',
    align: 'left',
    disablePadding: false,
    label: 'Active',
    sort: true,
  },
]

const UsersTableHead = ({
  numSelected,
  order,
  onSelectAllClick,
  onRequestSort,
  rowCount,
  handleRemoveUsers,
}) => {
  const classes = useStyles()
  const [selectedUsersMenu, setSelectedUsersMenu] = useState(null)

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property)
  }

  const openSelectedUsersMenu = (event) => {
    setSelectedUsersMenu(event.currentTarget)
  }

  const closeSelectedUsersMenu = () => {
    setSelectedUsersMenu(null)
  }

  const onRemoveUsers = () => {
    closeSelectedUsersMenu()
    handleRemoveUsers()
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
                aria-owns={selectedUsersMenu ? 'selectedUsersMenu' : null}
                aria-haspopup="true"
                onClick={openSelectedUsersMenu}
              >
                <Icon>more_horiz</Icon>
              </IconButton>
              <Menu
                id="selectedUsersMenu"
                anchorEl={selectedUsersMenu}
                open={Boolean(selectedUsersMenu)}
                onClose={closeSelectedUsersMenu}
              >
                <MenuList>
                  <MenuItem onClick={onRemoveUsers}>
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
              sortDirection={order.id === row.id ? order.direction : false}
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

export default UsersTableHead
