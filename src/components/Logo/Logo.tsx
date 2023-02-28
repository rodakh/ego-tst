import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { LogoLetterStyled, LogoStyled } from './styled'

const Logo: FC = () => {
  return (
    <div>
      <Link to={'/'} aria-label={'logo'} style={{ textDecoration: 'none' }}>
        <LogoLetterStyled>Ego</LogoLetterStyled>
        <LogoStyled>News</LogoStyled>
      </Link>
    </div>
  )
}

export default Logo
