import FuseScrollbars from '@fuse/core/FuseScrollbars'
import _ from '@lodash'
import {
  Checkbox,
  Icon,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as UserActions from 'app/store/actions'
import UserTableHead from './UserTableHead'

const UsersTable = (props) => {
  const dispatch = useDispatch()
  const users = useSelector(({ user }) => user.users)
  const searchText = useSelector(({ user }) => user.users.searchText)

  const [selected, setSelected] = useState([])
  const [data, setData] = useState(users.data)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [order, setOrder] = useState({
    direction: 'asc',
    id: null,
  })

  useEffect(() => {
    if (users.data.length > 0) setData(users.data)
  }, [users.data])

  useEffect(() => {
    dispatch(UserActions.getUsers())
  }, [dispatch])

  useEffect(() => {
    if (searchText.length !== 0) {
      setData(
        data.filter((item) =>
          item.name.toLowerCase().includes(searchText.toLowerCase())
        )
      )
      setPage(0)
    } else {
      setData(data)
    }
  }, [data, searchText])

  useEffect(() => {
    if (users.type === UserActions.REMOVE_USERS)
      dispatch(UserActions.getUsers())
  }, [users, dispatch])

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

  const handleClick = (item) => {
    props.history.push(`/profile/${item.id}`)
  }

  const handleCheck = (event, id) => {
    const selectedIndex = selected.indexOf(id)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }

    setSelected(newSelected)
  }

  const handleChangePage = (event, value) => {
    setPage(value)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value)
  }

  const handleRemoveUsers = () => {
    dispatch(UserActions.removeUsers(selected))
  }

  return (
    <div className="w-full flex flex-col">
      <FuseScrollbars className="flex-grow overflow-x-auto">
        <Table className="min-w-xl" aria-labelledby="tableTitle">
          <UserTableHead
            numSelected={selected.length}
            order={order}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={data.length}
            handleRemoveUsers={handleRemoveUsers}
          />

          <TableBody>
            {_.orderBy(
              data,
              [
                (o) => {
                  switch (order.id) {
                    case 'displayName': {
                      return o.displayName
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
              .map((userInfo) => {
                const isSelected = selected.indexOf(userInfo.id) !== -1
                return (
                  <TableRow
                    className="h-64 cursor-pointer"
                    hover
                    role="checkbox"
                    aria-checked={isSelected}
                    tabIndex={-1}
                    key={userInfo.id}
                    selected={isSelected}
                    onClick={(event) => handleClick(userInfo)}
                  >
                    <TableCell className="w-64 text-center" padding="none">
                      <Checkbox
                        checked={isSelected}
                        onClick={(event) => event.stopPropagation()}
                        onChange={(event) => handleCheck(event, userInfo.id)}
                      />
                    </TableCell>

                    <TableCell
                      className="w-52"
                      component="th"
                      scope="row"
                      padding="none"
                    >
                      {userInfo.photoURL ? (
                        <img
                          className="w-full block rounded"
                          src={userInfo.photoURL}
                          alt={userInfo.displayName}
                        />
                      ) : (
                        <img
                          className="w-full block rounded circle"
                          src="assets/images/avatars/profile.jpg"
                          alt={userInfo.displayName}
                        />
                      )}
                    </TableCell>

                    <TableCell component="th" scope="row">
                      {userInfo.displayName}
                    </TableCell>

                    <TableCell component="th" scope="row">
                      {userInfo.role.join(',')}
                    </TableCell>

                    <TableCell className="truncate" component="th" scope="row">
                      {userInfo.email}
                    </TableCell>

                    <TableCell component="th" scope="row">
                      {userInfo.phoneNumber}
                    </TableCell>

                    <TableCell component="th" scope="row">
                      {userInfo.active ? (
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

export default withRouter(UsersTable)
