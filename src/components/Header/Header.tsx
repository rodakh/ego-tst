import React, { FC } from 'react'
import Lang from '../Lang/Lang'
import { HeaderStyled } from './styled'
import Navbar from '../Navbar/Navbar'
import CommonTrail from '../Animations/CommonTrail'
import { useTranslation } from 'react-i18next'
import Logo from '../Logo/Logo'

const Header: FC = () => {
  const { i18n } = useTranslation()

  return (
    <CommonTrail
      config={{
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: 1,
        delay: 250,
        y: 0,
        from: { opacity: 0, y: -40, height: 0 },
      }}
      key={i18n.language}
    >
      <HeaderStyled>
        <Logo />
        <Navbar />
        <Lang existedLangs={['en', 'ua']} />
      </HeaderStyled>
    </CommonTrail>
  )
}

export default Header
