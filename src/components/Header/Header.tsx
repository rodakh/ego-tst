import React from 'react'
import Lang from './Lang/Lang'
import { HeaderStyled, LogoStyled } from './styled'
import Logo from '../../assets/images/logo.png'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <Link to={'/'}>
        <LogoStyled src={Logo} alt='logo' />
      </Link>
      <Navbar navItems={['news', 'profile']} />
      <Lang existedLangs={['en', 'ua']} />
    </HeaderStyled>
  )
}

export default Header
