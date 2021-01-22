import React, { useEffect, useState } from 'react'
import FuseScrollbars from '@fuse/core/FuseScrollbars'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import _ from '@lodash'

import * as UserActions from 'app/store/actions'
import { Table, TablePagination } from '@material-ui/core'
import UserTableHead from './UserTableHead'
import UserTableBody from './UserTableBody'

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
    // eslint-disable-next-line
  }, [])

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users])

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

  const handleRemoveUsers = () => {
    dispatch(UserActions.removeUsers(selected))
  }

  const dataOrdered = _.orderBy(
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
  ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

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

          <UserTableBody
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

export default withRouter(UsersTable)
