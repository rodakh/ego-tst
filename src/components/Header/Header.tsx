import React from 'react'
import Lang from './Lang/Lang'
import { HeaderStyled, LogoLetterStyled, LogoStyled } from './styled'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import CommonTrail from '../Animations/CommonTrail'
import { useTranslation } from 'react-i18next'

const Header: React.FC = () => {
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
        <Link to={'/'} aria-label={'logo'} style={{ textDecoration: 'none' }}>
          <LogoLetterStyled>Ego</LogoLetterStyled>
          <LogoStyled>News</LogoStyled>
        </Link>
        <Navbar />
        <Lang existedLangs={['en', 'ua']} />
      </HeaderStyled>
    </CommonTrail>
  )
}

export default Header
