import React, { memo, useCallback } from 'react'
import isEqual from 'react-fast-compare'
import { Checkbox, TableBody, TableCell, TableRow } from '@material-ui/core'
import { handleSelectRow } from 'app/helpers'

const UserTableBody = ({ dataOrdered, selected, setSelected, history }) => {
  const showUserDetail = (item) => {
    history.push(`/profile/${item.id}`)
  }

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
      {dataOrdered.map((userInfo) => {
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
            onClick={(event) => showUserDetail(userInfo)}
          >
            <TableCell className="w-64 text-center" padding="none">
              <Checkbox
                checked={isSelected}
                onClick={(event) => event.stopPropagation()}
                onChange={() => handleCheck(userInfo.id)}
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
          </TableRow>
        )
      })}
    </TableBody>
  )
}

const areEqual = (prevProps, nexProps) =>
  isEqual(prevProps.dataOrdered, nexProps.dataOrdered) &&
  isEqual(prevProps.selected, nexProps.selected)

export default memo(UserTableBody, areEqual)
