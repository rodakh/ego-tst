import React, { FC } from 'react'
import Main from '../../components/Main/Main'
import { Link } from 'react-router-dom'
import { NotFoundLayout } from './styled'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const NotFoundPage: FC = () => {
  const { t } = useTranslation(['common'])

  return (
    <NotFoundLayout>
      <Main>
        <Typography variant='h4' component='p' gutterBottom color={'#fff'}>
          {t('notfound.text', { ns: ['common'] })}{' '}
          <Link to={'/'} style={{ color: 'red', textDecoration: 'none' }}>
            {t('notfound.link', { ns: ['common'] })}
          </Link>
        </Typography>
      </Main>
    </NotFoundLayout>
  )
}

export default NotFoundPage
