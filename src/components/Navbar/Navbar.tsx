import React, { FC, useState } from 'react'
import { NavbarStyled } from './styled'
import { NavLink } from 'react-router-dom'
import { Tooltip } from '@mui/material'

type NavbarProps = {
  navItems: string[]
}
const Navbar: FC<NavbarProps> = () => {
  const [linkDisabled, setLinkDisabled] = useState(true)
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (linkDisabled) e.preventDefault()
  }

  return (
    <NavbarStyled>
      <NavLink to={`/news`}>NEWS</NavLink>
      <Tooltip title={'Need to login'} arrow>
        <NavLink onClick={handleClick} to={`/profile/1`}>
          PROFILE
        </NavLink>
      </Tooltip>
    </NavbarStyled>
  )
}

export default Navbar
