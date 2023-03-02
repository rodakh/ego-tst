import React, { FC } from 'react'
import Lang from '../Lang/Lang'
import { HeaderStyled } from './styled'
import Navbar from '../Navbar/Navbar'
import CommonTrail from '../Animations/CommonTrail'
import { useTranslation } from 'react-i18next'
import Logo from '../Logo/Logo'
import { ANIMATION_HEADER_CONFIG } from '../Animations/config'

const Header: FC = () => {
  const { i18n } = useTranslation()

  return (
    <CommonTrail config={ANIMATION_HEADER_CONFIG} key={i18n.language}>
      <HeaderStyled>
        <Logo />
        <Navbar />
        <Lang existedLangs={['en', 'ua']} />
      </HeaderStyled>
    </CommonTrail>
  )
}

export default Header
