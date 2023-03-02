import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { FooterStyled } from './styled'
import { Typography } from '@mui/material'
import CommonTrail from '../Animations/CommonTrail'
import { ANIMATION_FOOTER_CONFIG } from '../Animations/config'

const Footer: FC = () => {
  const { t, i18n } = useTranslation(['common'])

  return (
    <CommonTrail config={ANIMATION_FOOTER_CONFIG} key={i18n.language}>
      <FooterStyled>
        <Typography variant={'body1'} color={'#fff'} fontSize={'1rem'}>
          {t('footer', { ns: ['common'] })}
        </Typography>
      </FooterStyled>
    </CommonTrail>
  )
}

export default Footer
