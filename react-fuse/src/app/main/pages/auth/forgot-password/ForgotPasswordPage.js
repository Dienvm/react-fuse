import FuseAnimate from '@fuse/core/FuseAnimate'
import { useForm } from '@fuse/hooks'
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { darken } from '@material-ui/core/styles/colorManipulator'
import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as authActions from 'app/auth/store/actions'
import history from '@history'
import { ROUTES } from 'app/constants'

const useStyles = makeStyles((theme) => ({
  root: {
    background: `radial-gradient(${darken(
      theme.palette.primary.dark,
      0.5
    )} 0%, ${theme.palette.primary.dark} 80%)`,
    color: theme.palette.primary.contrastText,
  },
}))

const ForgotPasswordPage = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { form, handleChange, resetForm } = useForm({
    email: '',
  })

  const isFormValid = () => {
    return form.email.length > 0
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()

    dispatch(authActions.resetPassword(form))
    resetForm()
    history.push({
      pathname: ROUTES.login,
    })
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
              <div className="w-128 m-32">
                <img src="assets/images/logos/fuse.svg" alt="logo" />
              </div>

              <Typography variant="h6" className="mt-16 mb-32">
                RECOVER YOUR PASSWORD
              </Typography>

              <form
                name="recoverForm"
                noValidate
                className="flex flex-col justify-center w-full"
                onSubmit={handleSubmit}
              >
                <TextField
                  className="mb-16"
                  label="Email"
                  autoFocus
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  variant="outlined"
                  required
                  fullWidth
                />

                <Button
                  variant="contained"
                  color="primary"
                  className="w-224 mx-auto mt-16"
                  aria-label="Reset"
                  disabled={!isFormValid()}
                  type="submit"
                >
                  SEND RESET LINK
                </Button>
              </form>

              <div className="flex flex-col items-center justify-center pt-32 pb-24">
                <Link className="font-medium" to={ROUTES.login}>
                  Go back to login
                </Link>
              </div>
            </CardContent>
          </Card>
        </FuseAnimate>
      </div>
    </div>
  )
}

export default ForgotPasswordPage
