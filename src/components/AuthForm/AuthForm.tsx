import React, { FC } from 'react'
import { AuthFormLayout, AuthFormStyled } from './styled'
import { Button, FormHelperText, TextField, Tooltip, Typography } from '@mui/material'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { getErrorLoginMessage, getErrorPasswordMessage } from '../../utils/validator'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'
import { MOCKED_USER, MOCKED_USER_CREDS } from '../../contants/user'

type AuthFormTypes = {
  login: string
  password: string
}
const AuthForm: FC = () => {
  const dispatch = useDispatch()
  const [isValidCreds, setIsValidCreds] = React.useState<boolean>(true)
  const navigate = useNavigate()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormTypes>()
  const handleLogin: SubmitHandler<AuthFormTypes> = (data) => {
    if (data.login === MOCKED_USER_CREDS.login && data.password === MOCKED_USER_CREDS.password) {
      setIsValidCreds(true)
      dispatch(login(MOCKED_USER))
      navigate('/')
      return
    }

    setIsValidCreds(false)
  }

  return (
    <AuthFormLayout>
      <AuthFormStyled onSubmit={handleSubmit(handleLogin)}>
        <Typography variant={'h1'} fontSize={'20px'} fontWeight={700}>
          Login
        </Typography>
        <Tooltip title={'user: admin; pass: 12345'} arrow>
          <Typography variant={'subtitle1'} fontSize={'14px'} fontWeight={500}>
            Login with mock user only (hover to view data)
          </Typography>
        </Tooltip>

        <Controller
          control={control}
          name={'login'}
          defaultValue={''}
          rules={{ required: true, minLength: 5 }}
          render={({ field: { onChange, value } }) => (
            <TextField
              label={'login'}
              size={'small'}
              margin={'none'}
              onChange={onChange}
              value={value}
              error={!!errors.login}
              helperText={getErrorLoginMessage(errors)}
            />
          )}
        />

        <Controller
          control={control}
          name={'password'}
          defaultValue={''}
          rules={{ required: true, minLength: 5 }}
          render={({ field: { onChange, value } }) => (
            <TextField
              label={'password'}
              size={'small'}
              margin={'none'}
              type={'password'}
              onChange={onChange}
              value={value}
              error={!!errors.password}
              helperText={getErrorPasswordMessage(errors)}
            />
          )}
        />

        {!isValidCreds && (
          <FormHelperText error={true}>User credentials are incorrect</FormHelperText>
        )}

        <Button variant={'contained'} type={'submit'} disableElevation={true} sx={{ marginTop: 2 }}>
          Login
        </Button>
      </AuthFormStyled>
    </AuthFormLayout>
  )
}

export default AuthForm
