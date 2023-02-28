import React, { FC } from 'react'
import { LoaderItem1, LoaderItem2, LoaderLayout, LoaderWrapper } from './styled'
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden'
import { useTranslation } from 'react-i18next'
import { Typography } from '@mui/material'

interface LoaderProps {
  color?: string
  withLayout?: boolean
  withText?: boolean
}
const Loader: FC<LoaderProps> = ({ withLayout = false, withText = false }) => {
  const { t } = useTranslation(['common'])

  return (
    <>
      {withLayout ? (
        <LoaderLayout>
          <LoaderWrapper>
            {withText && (
              <Typography variant={'body1'} color={'#fff'}>
                {t('loading', { ns: ['common'] })}
              </Typography>
            )}
            <LoaderItem1 />
            <LoaderItem2 />
            <VisuallyHidden>{t('loading', { ns: ['common'] })}</VisuallyHidden>
          </LoaderWrapper>
        </LoaderLayout>
      ) : (
        <LoaderWrapper>
          {withText && (
            <Typography variant={'body1'} color={'#fff'}>
              {t('loading', { ns: ['common'] })}
            </Typography>
          )}
          <LoaderItem1 />
          <LoaderItem2 />
          <VisuallyHidden>{t('loading', { ns: ['common'] })}</VisuallyHidden>
        </LoaderWrapper>
      )}
    </>
  )
}

export default React.memo(Loader)
