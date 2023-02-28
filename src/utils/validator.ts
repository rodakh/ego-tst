import { FieldErrors } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

type AuthFormTypes = {
  login: string
  password: string
}
export function getErrorLoginMessage(error: FieldErrors<AuthFormTypes>): string | undefined {
  const { t } = useTranslation(['login'])
  const requiredError = t('form.errors.login.required', { ns: ['login'] })
  const lengthError = t('form.errors.login.minlength', { ns: ['login'] })
  const { login } = error
  if (login && login.type === 'required') {
    return requiredError
  }
  if (login && login.type === 'minLength') {
    return lengthError
  }
}

export function getErrorPasswordMessage(error: FieldErrors<AuthFormTypes>): string | undefined {
  const { t } = useTranslation(['login'])
  const requiredError = t('form.errors.password.required', { ns: ['login'] })
  const lengthError = t('form.errors.password.minlength', { ns: ['login'] })
  const { password } = error
  if (password && password.type === 'required') {
    return requiredError
  }
  if (password && password.type === 'minLength') {
    return lengthError
  }
}
