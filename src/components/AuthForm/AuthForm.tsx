import React, { FC } from 'react'
import { AuthFormLayout, AuthFormStyled } from './styled'
import { Box, Button, FormHelperText, TextField, Tooltip, Typography } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { getErrorLoginMessage, getErrorPasswordMessage } from '../../helpers/validator'
import { login } from '../../features/userSlice'
import { useTranslation } from 'react-i18next'
import Lang from '../Lang/Lang'
import CommonTrail from '../Animations/CommonTrail'
import { AuthFormTypes } from '../../interfaces/form.interface'
import { useLogin } from '../../hooks/useLogin'
import { ANIMATION_LOGINPAGE_CONFIG } from '../Animations/config'

const AuthForm: FC = () => {
  const { t, i18n } = useTranslation(['login'])
  const { handleLogin, isValidCreds } = useLogin()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormTypes>()

  return (
    <AuthFormLayout>
      <CommonTrail config={ANIMATION_LOGINPAGE_CONFIG} key={i18n.language}>
        <AuthFormStyled onSubmit={handleSubmit(handleLogin)}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant={'h1'} fontSize={'20px'} fontWeight={700}>
              {t('form.title', { ns: ['login'] })}
            </Typography>
            <Lang existedLangs={['en', 'ua']} color={'#000'} />
          </Box>

          <Tooltip title={'user: admin; pass: 12345'} arrow>
            <Typography variant={'subtitle1'} fontSize={'14px'} fontWeight={500}>
              {t('form.helper', { ns: ['login'] })}
            </Typography>
          </Tooltip>

          <Controller
            control={control}
            name={'login'}
            defaultValue={''}
            rules={{ required: true, minLength: 5 }}
            render={({ field: { onChange, value } }) => (
              <TextField
                label={t('form.inputs.login', { ns: ['login'] })}
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
                label={t('form.inputs.password', { ns: ['login'] })}
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
            <FormHelperText error={true}>
              {t('form.errors.creds', { ns: ['login'] })}
            </FormHelperText>
          )}

          <Button
            variant={'contained'}
            type={'submit'}
            disableElevation={true}
            sx={{
              marginTop: 2,
              backgroundColor: '#000',
              color: '#fff',
              '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
            }}
          >
            {t('form.actions.login', { ns: ['login'] })}
          </Button>

          <Link to={'/'} style={{ color: '#000', textDecoration: 'none' }}>
            {t('form.back', { ns: ['login'] })}
          </Link>
        </AuthFormStyled>
      </CommonTrail>
    </AuthFormLayout>
  )
}

export default AuthForm
