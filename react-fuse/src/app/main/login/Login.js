import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import * as authActions from 'app/auth/store/actions'
import Formsy from 'formsy-react'

import { useForm } from '@fuse/hooks'
import FuseAnimate from '@fuse/core/FuseAnimate'
import { TextFieldFormsy } from '@fuse/core/formsy'

import {
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Typography,
  InputAdornment,
  Icon,
} from '@material-ui/core'
import { ERROR_MESSAGES, ROUTES } from 'app/constants'
import { useStyles } from 'app/themes'

const LoginPage = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const login = useSelector(({ auth }) => auth.login)

  const [isFormValid, setIsFormValid] = useState(false)
  const formRef = useRef(null)
  const { form, handleChange } = useForm({
    email: '',
    password: '',
    remember: true,
  })

  useEffect(() => {
    if (login.error && (login.error.username || login.error.password)) {
      formRef.current.updateInputsWithError({
        ...login.error,
      })
      disableButton()
    }
  }, [login.error])

  const disableButton = () => {
    setIsFormValid(false)
  }

  const enableButton = () => {
    setIsFormValid(true)
  }

  const handleSubmit = (model) => {
    dispatch(authActions.submitLoginWithFireBase(model))
  }

  const handleLoginWithGoogle = () =>
    dispatch(authActions.submitLoginWithGoogle())

  const handleLoginWithFacebook = () => {
    // TODO
    // dispatch(authActions.submitLoginWithFacebook);
  }

  return (
    <div
      className={clsx(
        classes.root,
        'flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32'
      )}
    >
      <div className="flex flex-col items-center justify-center w-full">
        <FuseAnimate animation="transition.expandIn">
          <Card className="w-full max-w-384">
            <CardContent className="flex flex-col items-center justify-center p-32">
              <img
                className="w-128 m-32"
                src="assets/images/logos/fuse.svg"
                alt="logo"
              />

              <Typography variant="h6" className="mt-16 mb-32">
                LOGIN TO YOUR ACCOUNT
              </Typography>

              <Formsy
                onValidSubmit={handleSubmit}
                onValid={enableButton}
                onInvalid={disableButton}
                ref={formRef}
                className="flex flex-col justify-center w-full"
              >
                <TextFieldFormsy
                  className="mb-16"
                  type="text"
                  name="username"
                  label="Email"
                  validations={{
                    minLength: 4,
                  }}
                  validationErrors={{
                    minLength: ERROR_MESSAGES.minLength,
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon className="text-20" color="action">
                          email
                        </Icon>
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  required
                />

                <TextFieldFormsy
                  className="mb-16"
                  type="password"
                  name="password"
                  label="Password"
                  validations={{
                    minLength: 4,
                  }}
                  validationErrors={{
                    minLength: ERROR_MESSAGES.minLength,
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon className="text-20" color="action">
                          vpn_key
                        </Icon>
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  required
                  data-cy="cy-login-password"
                />

                <div className="flex items-center justify-between">
                  <FormControl>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="remember"
                          checked={form.remember}
                          onChange={handleChange}
                        />
                      }
                      label="Remember Me"
                    />
                  </FormControl>

                  <Link className="font-medium" to={ROUTES.forgotPassword}>
                    Forgot Password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="w-full mx-auto normal-case mt-16"
                  aria-label="LOG IN"
                  disabled={!isFormValid}
                  data-cy="cy-login-submit"
                >
                  Log in
                </Button>
              </Formsy>

              <div className="my-24 flex items-center justify-center">
                <Divider className="w-32" />
                <span className="mx-8 font-bold">OR</span>
                <Divider className="w-32" />
              </div>

              <Button
                variant="contained"
                color="secondary"
                size="small"
                className="normal-case w-192 mb-8"
                onClick={handleLoginWithGoogle}
              >
                Log in with Google
              </Button>

              <Button
                variant="contained"
                color="primary"
                size="small"
                className="normal-case w-192"
                onClick={handleLoginWithFacebook}
              >
                Log in with Facebook
              </Button>

              <div className="flex flex-col items-center justify-center pt-32 pb-24">
                <span className="font-medium">Don't have an account?</span>
                <Link className="font-medium" to={ROUTES.register}>
                  Create an account
                </Link>
              </div>
            </CardContent>
          </Card>
        </FuseAnimate>
      </div>
    </div>
  )
}

export default LoginPage
