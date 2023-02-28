import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { FooterStyled } from './styled'
import { Typography } from '@mui/material'
import CommonTrail from '../Animations/CommonTrail'

const Footer: FC = () => {
  const { t, i18n } = useTranslation(['common'])

  return (
    <CommonTrail
      config={{
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: 1,
        delay: 250,
        y: 0,
        from: { opacity: 0, y: 40, height: 0 },
      }}
      key={i18n.language}
    >
      <FooterStyled>
        <Typography variant={'body1'} color={'#fff'} fontSize={'1rem'}>
          {t('footer', { ns: ['common'] })}
        </Typography>
      </FooterStyled>
    </CommonTrail>
  )
}

export default Footer
