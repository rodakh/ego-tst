import React from 'react'
import { SubmitHandler } from 'react-hook-form'
import { MOCKED_USER, MOCKED_USER_CREDS } from '../contants/user'
import { login } from '../features/userSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AuthFormTypes } from '../interfaces/form.interface'

export const useLogin = () => {
  const [isValidCreds, setIsValidCreds] = React.useState<boolean>(true)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogin: SubmitHandler<AuthFormTypes> = (data) => {
    if (data.login === MOCKED_USER_CREDS.login && data.password === MOCKED_USER_CREDS.password) {
      setIsValidCreds(true)
      dispatch(login(MOCKED_USER))
      navigate('/')
      return
    }

    setIsValidCreds(false)
  }

  return { handleLogin, isValidCreds }
}
