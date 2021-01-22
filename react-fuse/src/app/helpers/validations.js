import { RE_EMAIL } from 'app/constants'

export const isFormRestPasswordValid = ({ form }) => {
  return (
    form.email.length > 0 &&
    RE_EMAIL.test(form.email) &&
    form.password.length > 0 &&
    form.password.length > 3 &&
    form.password === form.passwordConfirm
  )
}
