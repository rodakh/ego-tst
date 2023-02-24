import React, { FC } from 'react'
import { LoginLayout } from './styled'
import { Container } from '@mui/material'
import AuthForm from '../../components/AuthForm/AuthForm'
const LoginPage: FC = () => {
  return (
    <LoginLayout>
      <Container>
        <AuthForm />
      </Container>
    </LoginLayout>
  )
}

export default LoginPage
