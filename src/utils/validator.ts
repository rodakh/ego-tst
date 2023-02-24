import { FieldErrors } from 'react-hook-form'

type AuthFormTypes = {
  login: string
  password: string
}
export function getErrorLoginMessage(error: FieldErrors<AuthFormTypes>): string | undefined {
  const { login } = error
  if (login && login.type === 'required') {
    return 'Login is required'
  }
  if (login && login.type === 'minLength') {
    return 'Login must be at least 5 characters'
  }
}

export function getErrorPasswordMessage(error: FieldErrors<AuthFormTypes>): string | undefined {
  const { password } = error
  if (password && password.type === 'required') {
    return 'Password is required'
  }
  if (password && password.type === 'minLength') {
    return 'Password must be at least 5 characters'
  }
}
