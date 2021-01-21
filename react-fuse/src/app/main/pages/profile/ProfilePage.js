import FuseAnimate from '@fuse/core/FuseAnimate'
import FusePageCarded from '@fuse/core/FusePageCarded'
import Button from '@material-ui/core/Button'

import React, { useState, useRef, useEffect, memo } from 'react'
import Formsy from 'formsy-react'
import { FileFormsy, TextFieldFormsy } from '@fuse/core/formsy'

import { useDispatch, useSelector } from 'react-redux'
import * as userActions from 'app/auth/store/actions'
import * as Actions from 'app/store/actions'
import { useParams } from 'react-router-dom'

import reducer from 'app/auth/store/reducers'
import { useHistory } from 'react-router'
import { ROUTES } from 'app/constants'
import { ERROR_MESSAGES } from 'app/constants/errorMessage'
import isEqual from 'react-fast-compare'

const ProfilePage = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(({ user }) => user.user)
  const userType = currentUser.type
  const { userId } = useParams()
  const history = useHistory()
  const isNewProduct = userId === 'new'

  useEffect(() => {
    dispatch(Actions.getUser(userId))
  }, [userId])

  useEffect(() => {
    if (Actions.SAVE_USER === userType) history.push(ROUTES.users)
  }, [userType])

  const {
    photoURL,
    displayName,
    email,
    phoneNumber,
    state,
    city,
    country,
    postcode,
  } = currentUser.data || {}
  const [isFormValid, setIsFormValid] = useState(false)
  const formRef = useRef(null)

  const disableButton = () => {
    setIsFormValid(false)
  }

  const enableButton = () => {
    setIsFormValid(true)
  }

  const handleSubmit = (model) => {
    const cloneUser = { ...currentUser }
    cloneUser.data = { ...cloneUser.data, ...model }

    if (isNewProduct) {
      dispatch(Actions.saveUser(cloneUser))
    } else {
      dispatch(userActions.updateUserInfo(cloneUser))
    }
  }

  return (
    <FusePageCarded
      content={
        <FuseAnimate animation="transition.expandIn">
          <div className="p-16 sm:p-24">
            <h2 className="mb-32 text-center">
              {isNewProduct ? 'Create new user' : 'Update profile'}
            </h2>
            <Formsy
              onValidSubmit={handleSubmit}
              onValid={enableButton}
              onInvalid={disableButton}
              ref={formRef}
              className="flex flex-col justify-center w-full"
            >
              <FileFormsy
                name="photoURL"
                label="Files"
                value={photoURL || ''}
              />
              <TextFieldFormsy
                className="mb-16"
                type="text"
                name="displayName"
                label="Display name"
                validations={{
                  minLength: 4,
                }}
                validationErrors={{
                  minLength: ERROR_MESSAGES.minLength,
                }}
                variant="outlined"
                value={displayName || ''}
                required
              />
              <TextFieldFormsy
                className="mb-16"
                type="text"
                name="email"
                label="Email"
                validations={{
                  isEmail: true,
                  maxLength: 50,
                }}
                validationErrors={{
                  isEmail: ERROR_MESSAGES.isEmail,
                  maxLength: ERROR_MESSAGES.maxLength,
                }}
                variant="outlined"
                value={email || ''}
                required
              />
              <TextFieldFormsy
                className="mb-16"
                type="numberic"
                name="phoneNumber"
                label="Phone number"
                validations={{
                  isNumeric: true,
                  maxLength: 10,
                }}
                validationErrors={{
                  isNumeric: ERROR_MESSAGES.isNumeric,
                  maxLength: ERROR_MESSAGES.maxLength,
                }}
                variant="outlined"
                value={phoneNumber || ''}
                required
              />
              <TextFieldFormsy
                className="mb-16"
                type="text"
                name="state"
                label="State"
                validations={{
                  minLength: 4,
                }}
                validationErrors={{
                  minLength: ERROR_MESSAGES.minLength,
                }}
                variant="outlined"
                value={state || ''}
                required
              />
              <TextFieldFormsy
                className="mb-16"
                type="text"
                name="city"
                label="City"
                validations={{
                  minLength: 4,
                }}
                validationErrors={{
                  minLength: ERROR_MESSAGES.minLength,
                }}
                variant="outlined"
                value={city || ''}
                required
              />
              <TextFieldFormsy
                className="mb-16"
                type="text"
                name="country"
                label="Country"
                validations={{
                  minLength: 4,
                }}
                validationErrors={{
                  minLength: ERROR_MESSAGES.minLength,
                }}
                variant="outlined"
                value={country || ''}
                required
              />
              <TextFieldFormsy
                className="mb-16"
                type="numberic"
                name="postcode"
                label="Post code"
                validations={{
                  isNumeric: true,
                  maxLength: 5,
                }}
                validationErrors={{
                  isNumeric: ERROR_MESSAGES.isNumeric,
                  maxLength: ERROR_MESSAGES.minLength.maxLength,
                }}
                variant="outlined"
                value={postcode || ''}
                required
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="mx-auto normal-case mt-16"
                aria-label="Update"
                disabled={!isFormValid}
              >
                {isNewProduct ? 'Add' : 'Update'}
              </Button>
            </Formsy>
          </div>
        </FuseAnimate>
      }
    />
  )
}

export default memo(ProfilePage, isEqual)
